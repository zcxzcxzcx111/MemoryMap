import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
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
  const [characterImages, setCharacterImages] = useState<Partial<Record<SceneType, string>>>({});

  useEffect(() => {
    preloadCharacterImages().then(setCharacterImages);
  }, []);

  if (Platform.OS === 'web') {
    return (
      <DirectLeafletMap
        markers={markers}
        selectedIndex={selectedIndex}
        onMarkerPress={onMarkerPress}
        characterImages={characterImages}
      />
    );
  }

  // Native: use WebView
  return (
    <NativeWebViewMap
      markers={markers}
      selectedIndex={selectedIndex}
      onMarkerPress={onMarkerPress}
      characterImages={characterImages}
    />
  );
}

// ==================== Web: Direct Leaflet ====================

function DirectLeafletMap({
  markers,
  selectedIndex,
  onMarkerPress,
  characterImages,
}: WebMapViewProps & { characterImages: Partial<Record<SceneType, string>> }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const [leafletReady, setLeafletReady] = useState(false);

  // Load Leaflet CSS + JS once
  useEffect(() => {
    // CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // JS
    if ((window as any).L) {
      setLeafletReady(true);
      return;
    }

    const existing = document.querySelector('script[src*="leaflet"]');
    if (existing) {
      existing.addEventListener('load', () => setLeafletReady(true));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => setLeafletReady(true);
    document.body.appendChild(script);
  }, []);

  // Initialize map (runs once after Leaflet is loaded)
  useEffect(() => {
    if (!leafletReady) return;
    const L = (window as any).L;
    if (!L || !mapRef.current) return;

    // Avoid creating duplicate map
    if (mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ['1', '2', '3', '4'],
      maxZoom: 18,
    }).addTo(map);

    mapInstanceRef.current = map;
    markersLayerRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [leafletReady]);

  // Update markers
  useEffect(() => {
    const L = (window as any).L;
    if (!L || !mapInstanceRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    const sceneEmoji: Record<string, string> = {
      selfie: '\u{1F4F8}', rowing: '\u{1F6A3}', dining: '\u{1F468}‍\u{1F373}',
      hiking: '\u{1F9D7}', shopping: '\u{1F483}', beach: '\u{1F3C4}',
      park: '\u{1F333}', city: '\u{1F574}', travel: '\u{1F3C3}',
      work: '\u{1F4BC}', home: '\u{1F3E0}',
    };

    const sceneSVGs: Record<string, string> = {};
    (['selfie','rowing','dining','hiking','shopping','beach','park','city','travel','work','home'] as const).forEach(
      (s) => { sceneSVGs[s] = getCharacterInlineSVG(s); }
    );

    const bounds = L.latLngBounds([]);

    markers.forEach((m, i) => {
      const [gcjLat, gcjLng] = wgs84ToGcj02(m.location.latitude, m.location.longitude);
      bounds.extend([gcjLat, gcjLng]);
      const isSelected = i === selectedIndex;
      const size = isSelected ? 55 : 42;
      const isDining = m.scene === 'dining';

      let markerHTML: string;
      if (isDining) {
        const foodSize = isSelected ? 60 : 48;
        markerHTML = `<div style="width:${foodSize}px;height:${foodSize * 1.3}px;display:flex;flex-direction:column;align-items:center;cursor:pointer;">
          <div style="width:${foodSize - 8}px;height:${foodSize - 8}px;border-radius:50%;overflow:hidden;border:3px solid #FFB366;background:#FFF9E6;box-shadow:0 3px 6px rgba(0,0,0,0.2);position:relative;">
          <img src="${m.photos[0]?.uri || ''}" style="width:100%;height:100%;object-fit:cover;" />
          <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255,179,102,0.15);mix-blend-mode:multiply;"></div>
          <span style="position:absolute;top:-2px;right:-2px;font-size:14px;">✨</span>
          </div>
          <div style="width:16px;height:16px;background:#FF6B6B;border-radius:2px;transform:rotate(45deg);margin-top:-8px;box-shadow:0 2px 3px rgba(0,0,0,0.15);"></div>
          <span style="font-size:16px;margin-top:-4px;">\u{1F35C}</span>
          </div>`;
      } else {
        const imgData = characterImages[m.scene];
        if (imgData) {
          markerHTML = `<div style="width:${size}px;height:${size}px;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.15);">
            <img src="${imgData}" style="width:100%;height:100%;border-radius:8px;object-fit:cover;" />
            </div>`;
        } else {
          const svg = sceneSVGs[m.scene] || sceneSVGs.selfie;
          markerHTML = `<div style="width:${size}px;height:${size}px;">${svg}</div>`;
        }
      }

      let bubbleHTML = '';
      if (isSelected) {
        bubbleHTML = `<div style="width:8px;height:8px;background:#4ECDC4;border-radius:50%;margin:0 auto 4px;box-shadow:0 0 6px rgba(78,205,196,0.6);"></div>
          <div style="background:white;border-radius:12px;padding:6px 10px;box-shadow:0 2px 6px rgba(0,0,0,0.15);text-align:center;max-width:130px;margin-bottom:4px;font-family:-apple-system,sans-serif;">
          <div style="font-size:14px;">${sceneEmoji[m.scene] || ''}</div>
          ${m.location.placeName ? `<div style="font-size:11px;color:#4ECDC4;font-weight:400;">${escapeHtml(m.location.placeName)}</div>` : ''}
          <div style="font-size:11px;color:#666;margin-top:2px;">${formatDate(m.date)}</div>
          <div style="font-size:12px;color:#333;font-weight:600;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(m.description)}</div>
          </div>`;
      }

      const icon = L.divIcon({
        className: 'marker-wrapper' + (isSelected ? ' selected' : ''),
        html: `<div style="display:flex;flex-direction:column;align-items:center;animation:float 3s ease-in-out infinite;${isSelected ? '' : `animation-delay:${i * 0.2}s;`}">${bubbleHTML}${markerHTML}</div>`,
        iconSize: [70, isSelected ? 120 : 70],
        iconAnchor: [35, isSelected ? 120 : 70],
      });

      L.marker([gcjLat, gcjLng], { icon }).addTo(markersLayerRef.current)
        .on('click', () => onMarkerPress(i));
    });

    if (markers.length > 0) {
      mapInstanceRef.current.fitBounds(bounds.pad(0.3));
    } else {
      mapInstanceRef.current.setView([31.0, 121.0], 8);
    }
  }, [markers, selectedIndex, characterImages, onMarkerPress]);

  return (
    <View style={styles.container}>
      <div ref={mapRef} style={{ width: '100%', height: '100%', flex: 1 }} />
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

// ==================== Native: WebView ====================

function NativeWebViewMap({
  markers,
  selectedIndex,
  onMarkerPress,
  characterImages,
}: WebMapViewProps & { characterImages: Partial<Record<SceneType, string>> }) {
  const { WebView } = require('react-native-webview');
  const webViewRef = useRef<any>(null);

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

// ==================== Helpers ====================

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function escapeHtml(str: string) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function buildMapHTML(
  markers: SceneMarker[],
  selectedIndex: number,
  characterImages: Partial<Record<SceneType, string>>
): string {
  const markersJSON = JSON.stringify(
    markers.map((m, i) => {
      const [gcjLat, gcjLng] = wgs84ToGcj02(m.location.latitude, m.location.longitude);
      return {
        lat: gcjLat, lng: gcjLng, scene: m.scene,
        description: m.description, date: m.date,
        photoUri: m.photos[0]?.uri || '',
        placeName: m.location.placeName || '',
        index: i, isSelected: i === selectedIndex,
      };
    })
  );

  const imagesJSON = JSON.stringify(characterImages);

  const characterSVGs = Object.fromEntries(
    (['selfie','rowing','dining','hiking','shopping','beach','park','city','travel','work','home'] as const).map(
      (s) => [s, getCharacterInlineSVG(s)]
    )
  );

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
    .marker-wrapper { cursor: pointer; transition: transform 0.2s; }
    .marker-wrapper:hover { transform: scale(1.1); }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var markersData = ${markersJSON};
    var characterImages = ${imagesJSON};
    var sceneEmoji = { selfie:'\\u{1F4F8}',rowing:'\\u{1F6A3}',dining:'\\u{1F468}\\u200D\\u{1F373}',hiking:'\\u{1F9D7}',shopping:'\\u{1F483}',beach:'\\u{1F3C4}',park:'\\u{1F333}',city:'\\u{1F574}',travel:'\\u{1F3C3}',work:'\\u{1F4BC}',home:'\\u{1F3E0}' };
    var characterSVGs = ${JSON.stringify(characterSVGs)};
    var map = L.map('map', { zoomControl: true, attributionControl: false });
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', { subdomains: ['1','2','3','4'], maxZoom: 18 }).addTo(map);
    if (markersData.length > 0) { var b = L.latLngBounds(markersData.map(function(m){return[m.lat,m.lng]})); map.fitBounds(b.pad(0.3)); } else { map.setView([31.0,121.0],8); }
    markersData.forEach(function(m) {
      var sel = m.isSelected, sz = sel?55:42, isD = m.scene==='dining', mh;
      if(isD){ var fs=sel?60:48; mh='<div style="width:'+fs+'px;height:'+(fs*1.3)+'px;display:flex;flex-direction:column;align-items:center;cursor:pointer;"><div style="width:'+(fs-8)+'px;height:'+(fs-8)+'px;border-radius:50%;overflow:hidden;border:3px solid #FFB366;background:#FFF9E6;box-shadow:0 3px 6px rgba(0,0,0,0.2);"><img src="'+m.photoUri+'" style="width:100%;height:100%;object-fit:cover;"/></div><div style="width:16px;height:16px;background:#FF6B6B;border-radius:2px;transform:rotate(45deg);margin-top:-8px;"></div></div>'; }
      else { var id=characterImages[m.scene]; if(id){ mh='<div style="width:'+sz+'px;height:'+sz+'px;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.15);"><img src="'+id+'" style="width:100%;height:100%;border-radius:8px;object-fit:cover;"/></div>'; } else { var sv=characterSVGs[m.scene]||characterSVGs.selfie; mh='<div style="width:'+sz+'px;height:'+sz+'px;">'+sv+'</div>'; } }
      var bh=''; if(sel){ bh='<div style="width:8px;height:8px;background:#4ECDC4;border-radius:50%;margin:0 auto 4px;box-shadow:0 0 6px rgba(78,205,196,0.6);"></div><div style="background:white;border-radius:12px;padding:6px 10px;box-shadow:0 2px 6px rgba(0,0,0,0.15);text-align:center;max-width:130px;margin-bottom:4px;font-family:-apple-system,sans-serif;"><div style="font-size:14px;">'+(sceneEmoji[m.scene]||'')+'</div>'+(m.placeName?'<div style="font-size:11px;color:#4ECDC4;font-weight:400;">'+m.placeName+'</div>':'')+'<div style="font-size:11px;color:#666;margin-top:2px;">'+(new Date(m.date).getMonth()+1)+'/'+new Date(m.date).getDate()+'</div><div style="font-size:12px;color:#333;font-weight:600;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+m.description+'</div></div>'; }
      var icon = L.divIcon({ className:'marker-wrapper'+(sel?' selected':''), html:'<div style="display:flex;flex-direction:column;align-items:center;animation:float 3s ease-in-out infinite;'+(sel?'':'animation-delay:'+m.index*0.2+'s;')+'">'+bh+mh+'</div>', iconSize:[70,sel?120:70], iconAnchor:[35,sel?120:70] });
      L.marker([m.lat,m.lng],{icon:icon}).addTo(map).on('click',function(){ if(window.ReactNativeWebView){window.ReactNativeWebView.postMessage(JSON.stringify({type:'markerPress',index:m.index}));} });
    });
  </script>
</body>
</html>`;
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
