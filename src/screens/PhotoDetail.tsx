import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { SceneMarker, SceneType, Photo } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';
import QCharacter from '../components/QCharacter';
import SceneSelector from '../components/SceneSelector';
import { colors, typography, spacing, radius } from '../theme/appleTheme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PhotoDetailProps {
  marker: SceneMarker;
  onClose: () => void;
  onDeletePhoto: (photoId: string) => void;
  onUpdatePhoto: (photoId: string, updates: Partial<Photo>) => void;
}

export default function PhotoDetail({ marker, onClose, onDeletePhoto, onUpdatePhoto }: PhotoDetailProps) {
  const [editingScene, setEditingScene] = useState(false);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `${year}年${month}月${day}日 ${weekdays[d.getDay()]}`;
  };

  const handleDeletePhoto = (photoId: string) => {
    Alert.alert('删除照片', '确定要删除这张照片吗？此操作不可撤销。', [
      { text: '取消', style: 'cancel' },
      {
        text: '删除',
        style: 'destructive',
        onPress: () => {
          onDeletePhoto(photoId);
          if (marker.photos.length <= 1) onClose();
        },
      },
    ]);
  };

  const handleSceneSelect = (scene: SceneType) => {
    marker.photos.forEach((photo) => onUpdatePhoto(photo.id, { scene }));
    setEditingScene(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.6}>
          <Text style={styles.closeBtnText}>✕</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerDate}>{formatDate(marker.date)}</Text>
          <Text style={styles.headerPlace}>{marker.location.placeName || '未知地点'}</Text>
          {marker.location.address && (
            <Text style={styles.headerAddress}>{marker.location.address}</Text>
          )}
        </View>
        <View style={styles.sceneTag}>
          <Text style={styles.sceneTagEmoji}>{sceneEmoji[marker.scene]}</Text>
          <Text style={styles.sceneTagText}>{sceneName[marker.scene]}</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Scene Editor */}
        {editingScene && (
          <View style={styles.sceneEditor}>
            <SceneSelector selectedScene={marker.scene} onSelect={handleSceneSelect} />
          </View>
        )}

        {/* Character */}
        <View style={styles.characterSection}>
          <QCharacter scene={marker.scene} date={marker.date} description={marker.description} size={120} showLabel={false} />
          <Text style={styles.characterCaption}>{marker.description}</Text>
        </View>

        {/* Switch Character Button */}
        <View style={styles.switchSection}>
          <TouchableOpacity style={styles.switchBtn} onPress={() => setEditingScene(!editingScene)} activeOpacity={0.7}>
            <Text style={styles.switchBtnText}>{editingScene ? '收起' : '切换形象'}</Text>
          </TouchableOpacity>
        </View>

        {/* Photos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>照片 ({marker.photos.length})</Text>
          {marker.photos.map((photo, index) => (
            <View key={photo.id} style={styles.photoCard}>
              <Image source={{ uri: photo.uri }} style={styles.photoImage} resizeMode="cover" />
              <View style={styles.photoInfo}>
                <Text style={styles.photoDesc}>{photo.description}</Text>
                <TouchableOpacity onPress={() => handleDeletePhoto(photo.id)} activeOpacity={0.6}>
                  <Text style={styles.deleteText}>删除</Text>
                </TouchableOpacity>
              </View>
              {photo.isDailyPick && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>精选</Text>
                </View>
              )}
              {index < marker.photos.length - 1 && <View style={styles.photoDivider} />}
            </View>
          ))}
        </View>

        {/* Location Info — iOS grouped list style */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>位置信息</Text>
          <View style={styles.groupedCard}>
            <View style={styles.groupedRow}>
              <Text style={styles.groupedLabel}>纬度</Text>
              <Text style={styles.groupedValue}>{marker.location.latitude.toFixed(4)}</Text>
            </View>
            <View style={styles.groupedSeparator} />
            <View style={styles.groupedRow}>
              <Text style={styles.groupedLabel}>经度</Text>
              <Text style={styles.groupedValue}>{marker.location.longitude.toFixed(4)}</Text>
            </View>
            {marker.location.placeName && (
              <>
                <View style={styles.groupedSeparator} />
                <View style={styles.groupedRow}>
                  <Text style={styles.groupedLabel}>地点</Text>
                  <Text style={styles.groupedValue}>{marker.location.placeName}</Text>
                </View>
              </>
            )}
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl, paddingTop: 50, paddingBottom: spacing.lg,
    borderBottomWidth: 0.5, borderBottomColor: colors.separator,
  },
  closeBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: colors.surface,
    justifyContent: 'center', alignItems: 'center',
  },
  closeBtnText: { fontSize: 16, color: colors.textSecondary, fontWeight: '600' },
  headerInfo: { flex: 1, marginLeft: spacing.md },
  headerDate: { ...typography.subhead, color: colors.textPrimary, fontWeight: '600' },
  headerPlace: { ...typography.caption1, color: colors.textSecondary, marginTop: 2 },
  headerAddress: { ...typography.caption2, color: colors.textTertiary, marginTop: 1 },
  sceneTag: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.accentLight, borderRadius: radius.pill,
    paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2,
  },
  sceneTagEmoji: { fontSize: 14, marginRight: spacing.xs },
  sceneTagText: { ...typography.caption1, color: colors.accent, fontWeight: '600' },
  content: { flex: 1 },
  sceneEditor: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl, paddingTop: spacing.md,
    marginBottom: spacing.sm,
  },
  characterSection: {
    alignItems: 'center', paddingVertical: spacing.xxl,
    backgroundColor: colors.background, marginBottom: spacing.sm,
  },
  characterCaption: { ...typography.headline, color: colors.textPrimary, marginTop: spacing.md },
  switchSection: {
    alignItems: 'center', paddingVertical: spacing.md,
    backgroundColor: colors.background, marginBottom: spacing.sm,
  },
  switchBtn: {
    paddingHorizontal: spacing.xl, paddingVertical: spacing.sm + 2,
    borderWidth: 1, borderColor: colors.accent, borderRadius: radius.pill,
  },
  switchBtnText: { ...typography.subhead, color: colors.accent, fontWeight: '600' },
  section: { paddingHorizontal: spacing.xl, marginBottom: spacing.xl },
  sectionTitle: { ...typography.headline, color: colors.textPrimary, marginBottom: spacing.md },
  photoCard: { marginBottom: spacing.md },
  photoImage: {
    width: '100%', height: SCREEN_WIDTH * 0.55,
    borderRadius: radius.md, backgroundColor: colors.surface,
  },
  photoInfo: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: spacing.sm + 2,
  },
  photoDesc: { ...typography.subhead, color: colors.textPrimary, flex: 1 },
  deleteText: { ...typography.subhead, color: colors.destructive, fontWeight: '500' },
  badge: {
    position: 'absolute', top: spacing.md, right: spacing.md,
    backgroundColor: colors.accent, borderRadius: radius.sm,
    paddingHorizontal: spacing.sm, paddingVertical: 2,
  },
  badgeText: { ...typography.caption2, color: colors.textOnAccent, fontWeight: '600' },
  photoDivider: { height: 0.5, backgroundColor: colors.separator, marginTop: spacing.md },
  // iOS grouped list style
  groupedCard: {
    backgroundColor: colors.background, borderRadius: radius.md,
    borderWidth: 0.5, borderColor: colors.separator,
    overflow: 'hidden',
  },
  groupedRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
  },
  groupedLabel: { ...typography.subhead, color: colors.textSecondary },
  groupedValue: { ...typography.subhead, color: colors.textPrimary },
  groupedSeparator: { height: 0.5, backgroundColor: colors.separator, marginLeft: spacing.lg },
});
