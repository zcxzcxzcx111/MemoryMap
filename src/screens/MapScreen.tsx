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
import { colors, typography, spacing, radius, liquidGlass } from '../theme/appleTheme';

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

  // Empty state
  if (markers.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyHeader}>
          <Text style={styles.emptyHeaderTitle}>MemoryMap</Text>
          <Text style={styles.emptyHeaderSub}>你的回忆地图</Text>
        </View>
        <View style={styles.emptyContent}>
          <View style={styles.emptyIconCircle}>
            <Text style={styles.emptyIcon}>+</Text>
          </View>
          <Text style={styles.emptyTitle}>还没有照片</Text>
          <Text style={styles.emptySubtitle}>
            上传带有 GPS 信息的照片，在地图上生成回忆标记
          </Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={onOpenUploader} activeOpacity={0.7}>
            <Text style={styles.emptyBtnText}>上传第一张照片</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <WebMapView markers={markers} selectedIndex={selectedMarkerIndex} onMarkerPress={handleMarkerPress} />
      </View>

      {/* Frosted glass header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MemoryMap</Text>
        <Text style={styles.headerSubtitle}>{markers.length} 个回忆地点 · {photos.length} 张照片</Text>
      </View>

      <SceneWheel markers={markers} selectedIndex={selectedMarkerIndex} onSelect={handleWheelSelect} visible={showWheel} />

      {/* Info bar */}
      {selectedMarker && !detailMarker && (
        <View style={styles.infoBar}>
          <View style={styles.infoBarContent}>
            <Text style={styles.infoBarEmoji}>{sceneEmoji[selectedMarker.scene]}</Text>
            <View style={styles.infoBarText}>
              <Text style={styles.infoBarTitle} numberOfLines={1}>
                {selectedMarker.location.placeName || '未知地点'}
              </Text>
              <Text style={styles.infoBarDesc}>
                {selectedMarker.description} · {selectedMarker.photos.length} 张照片
              </Text>
            </View>
            <TouchableOpacity
              style={styles.infoBarBtn}
              onPress={() => setDetailMarker(selectedMarker)}
              activeOpacity={0.7}
            >
              <Text style={styles.infoBarBtnText}>详情</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Legend */}
      {!showWheel && (
        <View style={styles.legend}>
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

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={onOpenUploader} activeOpacity={0.7}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      {/* Detail modal */}
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

  // Liquid glass header
  header: {
    position: 'absolute', top: 50, left: spacing.xl, right: spacing.xl,
    ...liquidGlass.card,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.xl, paddingVertical: spacing.md,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 3, zIndex: 100,
  },
  headerTitle: { ...typography.title2, color: colors.textPrimary },
  headerSubtitle: { ...typography.caption1, color: colors.textSecondary, marginTop: 2 },

  // Info bar
  infoBar: {
    position: 'absolute', bottom: 100, left: spacing.xl, right: spacing.xl,
    ...liquidGlass.card,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 3, zIndex: 100,
  },
  infoBarContent: { flexDirection: 'row', alignItems: 'center' },
  infoBarEmoji: { fontSize: 24, marginRight: spacing.md },
  infoBarText: { flex: 1 },
  infoBarTitle: { ...typography.headline, color: colors.textPrimary },
  infoBarDesc: { ...typography.caption1, color: colors.textSecondary, marginTop: 2 },
  infoBarBtn: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.sm + 2,
    borderRadius: radius.xl,
  },
  infoBarBtnText: { color: colors.textOnAccent, ...typography.subhead, fontWeight: '600' },

  // Legend
  legend: {
    position: 'absolute', bottom: 30, left: spacing.xl, right: spacing.xl,
    ...liquidGlass.light,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 16, elevation: 3, zIndex: 100,
  },
  legendItems: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  legendEmoji: { fontSize: 13 },
  legendLabel: { ...typography.caption1, color: colors.textSecondary },

  // FAB
  fab: {
    position: 'absolute', bottom: 100, right: 20,
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: colors.background,
    justifyContent: 'center', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12, shadowRadius: 8, elevation: 4, zIndex: 200,
    borderWidth: 0.5, borderColor: colors.separator,
  },
  fabIcon: { fontSize: 26, color: colors.accent, fontWeight: '300', marginTop: -1 },

  // Empty state
  emptyContainer: { flex: 1, backgroundColor: colors.surface },
  emptyHeader: {
    paddingTop: 60, paddingBottom: spacing.xxl, paddingHorizontal: spacing.xl,
    backgroundColor: colors.background,
  },
  emptyHeaderTitle: { ...typography.title1, color: colors.textPrimary },
  emptyHeaderSub: { ...typography.subhead, color: colors.textSecondary, marginTop: spacing.xs },
  emptyContent: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: spacing.xxxl,
  },
  emptyIconCircle: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: colors.accentLight,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.xl,
  },
  emptyIcon: { fontSize: 36, color: colors.accent, fontWeight: '300' },
  emptyTitle: { ...typography.title2, color: colors.textPrimary, marginBottom: spacing.sm },
  emptySubtitle: {
    ...typography.subhead, color: colors.textSecondary,
    textAlign: 'center', lineHeight: 22, marginBottom: spacing.xxxl,
  },
  emptyBtn: {
    backgroundColor: colors.accent, borderRadius: radius.md,
    paddingHorizontal: spacing.xxxl, paddingVertical: spacing.lg,
  },
  emptyBtnText: { ...typography.headline, color: colors.textOnAccent },
});
