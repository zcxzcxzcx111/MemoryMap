import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Photo, SceneMarker } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';
import QCharacter from '../components/QCharacter';
import SceneWheel from '../components/SceneWheel';
import PhotoDetail from './PhotoDetail';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const INITIAL_REGION = {
  latitude: 31.2,
  longitude: 121.0,
  latitudeDelta: 3.5,
  longitudeDelta: 3.5,
};

interface NativeMapScreenProps {
  photos: Photo[];
  markers: SceneMarker[];
  onOpenUploader: () => void;
}

export default function NativeMapScreen({ photos, markers, onOpenUploader }: NativeMapScreenProps) {
  const mapRef = useRef<MapView>(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number>(-1);
  const [detailMarker, setDetailMarker] = useState<SceneMarker | null>(null);
  const [showWheel, setShowWheel] = useState(false);
  const [mapZoom, setMapZoom] = useState(INITIAL_REGION.latitudeDelta);

  const selectedMarker = selectedMarkerIndex >= 0 ? markers[selectedMarkerIndex] : null;

  const handleMarkerPress = useCallback(
    (index: number) => {
      setSelectedMarkerIndex(index);
      setShowWheel(true);
      const marker = markers[index];
      mapRef.current?.animateToRegion(
        {
          latitude: marker.location.latitude,
          longitude: marker.location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        500
      );
    },
    [markers]
  );

  const handleWheelSelect = useCallback(
    (index: number) => {
      setSelectedMarkerIndex(index);
      const marker = markers[index];
      mapRef.current?.animateToRegion(
        {
          latitude: marker.location.latitude,
          longitude: marker.location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        500
      );
    },
    [markers]
  );

  const handleRegionChange = useCallback((region: any) => {
    setMapZoom(region.latitudeDelta);
    if (region.latitudeDelta < 0.5) setShowWheel(true);
  }, []);

  const handleResetView = useCallback(() => {
    setSelectedMarkerIndex(-1);
    setShowWheel(false);
    mapRef.current?.animateToRegion(INITIAL_REGION, 500);
  }, []);

  if (markers.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyHeader}>
          <Text style={styles.headerTitle}>MemoryMap</Text>
          <Text style={styles.headerSubtitle}>你的回忆地图</Text>
        </View>
        <View style={styles.emptyContent}>
          <Text style={styles.emptyEmoji}>&#x1F5FA;</Text>
          <Text style={styles.emptyTitle}>还没有照片</Text>
          <Text style={styles.emptySubtitle}>上传带有GPS信息的照片{'\n'}在地图上生成你的回忆标记</Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={onOpenUploader}>
            <Text style={styles.emptyBtnText}>&#x1F4F7; 上传第一张照片</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fab} onPress={onOpenUploader}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={INITIAL_REGION}
        onRegionChangeComplete={handleRegionChange}
        showsUserLocation={false}
        showsCompass={false}
        showsScale={true}
      >
        {markers.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.location.latitude, longitude: marker.location.longitude }}
            onPress={() => handleMarkerPress(index)}
            anchor={{ x: 0.5, y: 1 }}
          >
            <View style={styles.markerContainer}>
              <QCharacter
                scene={marker.scene}
                date={marker.date}
                description={marker.description}
                size={mapZoom < 0.3 ? 60 : 45}
                showLabel={mapZoom < 0.3}
              />
            </View>
            <Callout onPress={() => setDetailMarker(marker)} style={styles.callout}>
              <View style={styles.calloutContent}>
                <Text style={styles.calloutEmoji}>{sceneEmoji[marker.scene]}</Text>
                <Text style={styles.calloutTitle}>{marker.location.placeName || '未知地点'}</Text>
                <Text style={styles.calloutDate}>{marker.date}</Text>
                <Text style={styles.calloutDesc}>{marker.description}</Text>
                <Text style={styles.calloutAction}>点击查看详细 &rarr;</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>MemoryMap</Text>
        <Text style={styles.headerSubtitle}>{markers.length} 个回忆地点 · {photos.length} 张照片</Text>
      </View>

      {showWheel && (
        <TouchableOpacity style={styles.resetBtn} onPress={handleResetView}>
          <Text style={styles.resetBtnText}>&#x1F30D; 总览</Text>
        </TouchableOpacity>
      )}

      <SceneWheel markers={markers} selectedIndex={selectedMarkerIndex} onSelect={handleWheelSelect} visible={showWheel} />

      {selectedMarker && !detailMarker && (
        <View style={styles.infoBar}>
          <View style={styles.infoBarContent}>
            <Text style={styles.infoBarEmoji}>{sceneEmoji[selectedMarker.scene]}</Text>
            <View style={styles.infoBarText}>
              <Text style={styles.infoBarTitle}>{selectedMarker.location.placeName}</Text>
              <Text style={styles.infoBarDesc}>{selectedMarker.description} · {selectedMarker.photos.length} 张照片</Text>
            </View>
            <TouchableOpacity style={styles.infoBarBtn} onPress={() => setDetailMarker(selectedMarker)}>
              <Text style={styles.infoBarBtnText}>详情</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!showWheel && (
        <View style={styles.legend}>
          <Text style={styles.legendTitle}>场景图例</Text>
          <View style={styles.legendItems}>
            {(['rowing', 'dining', 'hiking', 'shopping', 'selfie', 'beach', 'park', 'city'] as const).map((scene) => (
              <View key={scene} style={styles.legendItem}>
                <Text style={styles.legendEmoji}>{sceneEmoji[scene]}</Text>
                <Text style={styles.legendLabel}>{sceneName[scene]}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.fab} onPress={onOpenUploader}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      <Modal visible={detailMarker !== null} animationType="slide" presentationStyle="pageSheet" onRequestClose={() => setDetailMarker(null)}>
        {detailMarker && <PhotoDetail marker={detailMarker} onClose={() => setDetailMarker(null)} />}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
  header: {
    position: 'absolute', top: 50, left: 16, right: 16,
    backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 16,
    paddingHorizontal: 20, paddingVertical: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 5, zIndex: 100,
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#2C3E50' },
  headerSubtitle: { fontSize: 13, color: '#7f8c8d', marginTop: 2 },
  resetBtn: {
    position: 'absolute', top: 120, right: 16,
    backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, zIndex: 100,
  },
  resetBtnText: { fontSize: 14, fontWeight: '600', color: '#2C3E50' },
  markerContainer: { alignItems: 'center' },
  callout: { width: 200 },
  calloutContent: { padding: 8 },
  calloutEmoji: { fontSize: 24, marginBottom: 4 },
  calloutTitle: { fontSize: 14, fontWeight: '700', color: '#2C3E50' },
  calloutDate: { fontSize: 12, color: '#7f8c8d', marginTop: 2 },
  calloutDesc: { fontSize: 13, color: '#333', marginTop: 4 },
  calloutAction: { fontSize: 12, color: '#4ECDC4', fontWeight: '600', marginTop: 6 },
  infoBar: {
    position: 'absolute', bottom: 100, left: 16, right: 16,
    backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 16,
    paddingHorizontal: 16, paddingVertical: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 5, zIndex: 100,
  },
  infoBarContent: { flexDirection: 'row', alignItems: 'center' },
  infoBarEmoji: { fontSize: 28, marginRight: 12 },
  infoBarText: { flex: 1 },
  infoBarTitle: { fontSize: 15, fontWeight: '600', color: '#2C3E50' },
  infoBarDesc: { fontSize: 12, color: '#7f8c8d', marginTop: 2 },
  infoBarBtn: { backgroundColor: '#4ECDC4', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  infoBarBtnText: { color: 'white', fontWeight: '600', fontSize: 13 },
  legend: {
    position: 'absolute', bottom: 30, left: 16, right: 16,
    backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 16,
    paddingHorizontal: 16, paddingVertical: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 5, zIndex: 100,
  },
  legendTitle: { fontSize: 12, color: '#7f8c8d', marginBottom: 8 },
  legendItems: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  legendEmoji: { fontSize: 14 },
  legendLabel: { fontSize: 12, color: '#333' },
  fab: {
    position: 'absolute', bottom: 100, right: 20,
    width: 56, height: 56, borderRadius: 28, backgroundColor: '#4ECDC4',
    justifyContent: 'center', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 6, zIndex: 200,
  },
  fabIcon: { fontSize: 28, color: 'white', fontWeight: '300', marginTop: -2 },
  emptyContainer: { flex: 1, backgroundColor: '#f8f9fa' },
  emptyHeader: { paddingTop: 60, paddingBottom: 24, paddingHorizontal: 20, backgroundColor: '#4ECDC4' },
  emptyContent: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 },
  emptyEmoji: { fontSize: 80, marginBottom: 20 },
  emptyTitle: { fontSize: 24, fontWeight: '700', color: '#2C3E50', marginBottom: 8 },
  emptySubtitle: { fontSize: 15, color: '#7f8c8d', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  emptyBtn: { backgroundColor: '#4ECDC4', borderRadius: 16, paddingHorizontal: 32, paddingVertical: 16 },
  emptyBtnText: { fontSize: 17, fontWeight: '600', color: 'white' },
});
