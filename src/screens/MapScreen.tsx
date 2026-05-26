import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Photo, SceneMarker, SceneType } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';
import SceneWheel from '../components/SceneWheel';
import WebMapView from '../components/WebMapView';
import SceneConfirmBanner from '../components/SceneConfirmBanner';
import PhotoDetail from './PhotoDetail';

interface MapScreenProps {
  photos: Photo[];
  markers: SceneMarker[];
  onOpenUploader: () => void;
  latestPhoto?: Photo | null;
  onSceneChange?: (photoId: string, scene: SceneType) => void;
  onBannerDismiss?: () => void;
  onDeletePhoto: (photoId: string) => void;
  onUpdatePhoto: (photoId: string, updates: Partial<Photo>) => void;
}

export default function MapScreen({
  photos,
  markers,
  onOpenUploader,
  latestPhoto,
  onSceneChange,
  onBannerDismiss,
  onDeletePhoto,
  onUpdatePhoto,
}: MapScreenProps) {
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number>(-1);
  const [detailMarker, setDetailMarker] = useState<SceneMarker | null>(null);
  const [showWheel, setShowWheel] = useState(false);

  const selectedMarker = selectedMarkerIndex >= 0 ? markers[selectedMarkerIndex] : null;

  const handleMarkerPress = useCallback(
    (index: number) => {
      setSelectedMarkerIndex(index);
      setShowWheel(true);
    },
    []
  );

  const handleWheelSelect = useCallback(
    (index: number) => {
      setSelectedMarkerIndex(index);
    },
    []
  );

  const handleBannerConfirm = useCallback(() => {
    onBannerDismiss?.();
  }, [onBannerDismiss]);

  const handleBannerChangeScene = useCallback(
    (scene: SceneType) => {
      if (latestPhoto && onSceneChange) {
        onSceneChange(latestPhoto.id, scene);
      }
    },
    [latestPhoto, onSceneChange]
  );

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
      <View style={styles.mapContainer}>
        <WebMapView markers={markers} selectedIndex={selectedMarkerIndex} onMarkerPress={handleMarkerPress} />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>MemoryMap</Text>
        <Text style={styles.headerSubtitle}>{markers.length} 个回忆地点 · {photos.length} 张照片</Text>
      </View>

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
        {detailMarker && (
          <PhotoDetail
            marker={detailMarker}
            onClose={() => setDetailMarker(null)}
            onDeletePhoto={onDeletePhoto}
            onUpdatePhoto={onUpdatePhoto}
          />
        )}
      </Modal>

      {/* Scene confirmation banner */}
      <SceneConfirmBanner
        photo={latestPhoto || null}
        visible={!!latestPhoto}
        onConfirm={handleBannerConfirm}
        onChangeScene={handleBannerChangeScene}
        onDismiss={onBannerDismiss || (() => {})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapContainer: { flex: 1, paddingTop: 120 },
  header: {
    position: 'absolute', top: 50, left: 16, right: 16,
    backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 16,
    paddingHorizontal: 20, paddingVertical: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 5, zIndex: 100,
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#2C3E50' },
  headerSubtitle: { fontSize: 13, color: '#7f8c8d', marginTop: 2 },
  markerContainer: { alignItems: 'center' },
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
