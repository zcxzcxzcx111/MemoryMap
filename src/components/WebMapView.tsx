import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SceneMarker, SceneType } from '../types';
import { getCharacterInlineSVG } from './characters';
import { preloadCharacterImages } from '../utils/imageToBase64';
import { wgs84ToGcj02 } from '../utils/coordTransform';

interface WebMapViewProps {
  markers: SceneMarker[];
  selectedIndex: number;
  onMarkerPress: (index: number) => void;
}

export default function WebMapView({ markers, selectedIndex, onMarkerPress }: WebMapViewProps) {
  const webViewRef = useRef<WebView>(null);
  const [characterImages, setCharacterImages] = useState<Partial<Record<SceneType, string>>>({});

  // Preload character PNG images on mount
  useEffect(() => {
    preloadCharacterImages().then(setCharacterImages);
  }, []);

  const handleMessage = useCallback(
    (event: any) => {
      try {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.type === 'markerPress' && typeof data.index === 'number') {
          onMarkerPress(data.index);
        }
      } catch {}
    },
    [onMarkerPress]
  );

  const html = useMemo(
    () => buildMapHTML(markers, selectedIndex, characterImages),
    [markers, selectedIndex, characterImages]
  );

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html }}
        style={styles.webview}
        onMessage={handleMessage}
        scrollEnabled={false}
        javaScriptEnabled
        originWhitelist={['*']}
      />
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>{markers.length} 个地点</Text>
        <Text style={styles.infoText}>
          {markers.filter((m) => m.scene === 'dining').length > 0 && '\u{1F37D} 美食标记 · '}
          双指缩放 / 拖拽查看
        </Text>
      </View>
    </View>
  );
}

function buildMapHTML(
  markers: SceneMarker[],
  selectedIndex: number,
  characterImages: Partial<Record<SceneType, string>>
): string {
  const markersJSON = JSON.stringify(
    markers.map((m, i) => {
      // GPS 坐标 (WGS-84) → 高德坐标 (GCJ-02)
      const [gcjLat, gcjLng] = wgs84ToGcj02(m.location.latitude, m.location.longitude);
      return {
        lat: gcjLat,
        lng: gcjLng,
        scene: m.scene,
        description: m.description,
        date: m.date,
        photoUri: m.photos[0]?.uri || '',
        placeName: m.location.placeName || '',
        index: i,
        isSelected: i === selectedIndex,
      };
    })
  );

  // Build character images map for injection into HTML
  const imagesJSON = JSON.stringify(characterImages);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; }
    #map { width: 100%; height: 100%; }
    .leaflet-control-zoom { border-radius: 12px !important; overflow: hidden; }
    .leaflet-control-zoom a { width: 36px !important; height: 36px !important; line-height: 36px !important; font-size: 18px !important; }
    .marker-wrapper { cursor: pointer; transition: transform 0.2s; }
    .marker-wrapper:hover { transform: scale(1.1); }
    .marker-wrapper.selected { z-index: 1000 !important; }
    .marker-bubble {
      background: white; border-radius: 12px; padding: 6px 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15); text-align: center;
      max-width: 130px; margin-bottom: 4px; font-family: -apple-system, sans-serif;
    }
    .marker-bubble .emoji { font-size: 14px; }
    .marker-bubble .date { font-size: 11px; color: #666; margin-top: 2px; }
    .marker-bubble .desc { font-size: 12px; color: #333; font-weight: 600; margin-top: 1px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .selected-indicator {
      width: 8px; height: 8px; background: #4ECDC4; border-radius: 50%;
      margin: 0 auto 4px; box-shadow: 0 0 6px rgba(78,205,196,0.6);
    }
    .char-img { border-radius: 8px; object-fit: cover; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var markersData = ${markersJSON};
    var characterImages = ${imagesJSON};
    var sceneEmoji = {
      selfie: '\\u{1F4F8}', rowing: '\\u{1F6A3}', dining: '\\u{1F468}\\u200D\\u{1F373}',
      hiking: '\\u{1F9D7}', shopping: '\\u{1F483}', beach: '\\u{1F3C4}',
      park: '\\u{1F333}', city: '\\u{1F574}', travel: '\\u{1F3C3}',
      work: '\\u{1F4BC}', home: '\\u{1F3E0}'
    };

    var characterSVGs = ${JSON.stringify(
      Object.fromEntries(
        (['selfie','rowing','dining','hiking','shopping','beach','park','city','travel','work','home'] as const).map(
          (s) => [s, getCharacterInlineSVG(s)]
        )
      )
    )};

    // Initialize map
    var map = L.map('map', {
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ['1', '2', '3', '4'],
      maxZoom: 18,
    }).addTo(map);

    // Fit bounds to markers
    if (markersData.length > 0) {
      var bounds = L.latLngBounds(markersData.map(function(m) { return [m.lat, m.lng]; }));
      map.fitBounds(bounds.pad(0.3));
    } else {
      map.setView([31.0, 121.0], 8);
    }

    // Create markers
    markersData.forEach(function(m) {
      var isSelected = m.isSelected;
      var size = isSelected ? 55 : 42;
      var isDining = m.scene === 'dining';

      var markerHTML;
      if (isDining) {
        var foodSize = isSelected ? 60 : 48;
        markerHTML = '<div style="width:' + foodSize + 'px;height:' + (foodSize * 1.3) + 'px;display:flex;flex-direction:column;align-items:center;cursor:pointer;">' +
          '<div style="width:' + (foodSize - 8) + 'px;height:' + (foodSize - 8) + 'px;border-radius:50%;overflow:hidden;border:3px solid #FFB366;background:#FFF9E6;box-shadow:0 3px 6px rgba(0,0,0,0.2);position:relative;">' +
          '<img src="' + m.photoUri + '" style="width:100%;height:100%;object-fit:cover;" />' +
          '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255,179,102,0.15);mix-blend-mode:multiply;"></div>' +
          '<span style="position:absolute;top:-2px;right:-2px;font-size:14px;">\\u2728</span>' +
          '<span style="position:absolute;top:2px;left:-4px;font-size:10px;">\\u2728</span>' +
          '<span style="position:absolute;bottom:8px;right:-4px;font-size:12px;color:#FFD700;">\\u2605</span>' +
          '</div>' +
          '<div style="width:16px;height:16px;background:#FF6B6B;border-radius:2px;transform:rotate(45deg);margin-top:-8px;box-shadow:0 2px 3px rgba(0,0,0,0.15);"></div>' +
          '<span style="font-size:16px;margin-top:-4px;">\\u{1F35C}</span>' +
          '</div>';
      } else {
        // Use PNG image if available, fallback to SVG
        var imgData = characterImages[m.scene];
        if (imgData) {
          markerHTML = '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.15);">' +
            '<img src="' + imgData + '" class="char-img" style="width:100%;height:100%;" />' +
            '</div>';
        } else {
          var svgContent = characterSVGs[m.scene] || characterSVGs.selfie;
          markerHTML = '<div style="width:' + size + 'px;height:' + size + 'px;">' + svgContent + '</div>';
        }
      }

      // Add bubble for selected
      var bubbleHTML = '';
      if (isSelected) {
        bubbleHTML = '<div class="selected-indicator"></div>' +
          '<div class="marker-bubble">' +
          '<div class="emoji">' + (sceneEmoji[m.scene] || '') + '</div>' +
          (m.placeName ? '<div class="desc" style="font-size:11px;color:#4ECDC4;font-weight:400;">' + escapeHtml(m.placeName) + '</div>' : '') +
          '<div class="date">' + formatDate(m.date) + '</div>' +
          '<div class="desc">' + escapeHtml(m.description) + '</div>' +
          '</div>';
      }

      var icon = L.divIcon({
        className: 'marker-wrapper' + (isSelected ? ' selected' : ''),
        html: '<div style="display:flex;flex-direction:column;align-items:center;animation:float 3s ease-in-out infinite;' +
          (isSelected ? '' : 'animation-delay:' + (m.index * 0.2) + 's;') +
          '">' + bubbleHTML + markerHTML + '</div>',
        iconSize: [70, isSelected ? 120 : 70],
        iconAnchor: [35, isSelected ? 120 : 70],
      });

      var marker = L.marker([m.lat, m.lng], { icon: icon }).addTo(map);
      marker.on('click', function() {
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'markerPress', index: m.index }));
        }
      });
    });

    function formatDate(dateStr) {
      var d = new Date(dateStr);
      return (d.getMonth() + 1) + '/' + d.getDate();
    }

    function escapeHtml(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
  </script>
</body>
</html>
  `;
}

const styles = StyleSheet.create({
  container: { flex: 1, minHeight: 500 },
  webview: { flex: 1, backgroundColor: '#e8f4f8' },
  infoRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    width: '100%', paddingHorizontal: 8, marginTop: 8,
  },
  infoText: { fontSize: 12, color: '#999' },
});
