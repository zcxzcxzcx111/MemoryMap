import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Photo, DayStory } from '../types';
import DailySummary from '../components/DailySummary';
import { colors, typography, spacing, radius } from '../theme/appleTheme';

interface TimelineScreenProps {
  photos: Photo[];
  dayStories: DayStory[];
  onNavigateToMap: () => void;
  onOpenUploader: () => void;
}

export default function TimelineScreen({
  photos,
  dayStories,
  onNavigateToMap,
  onOpenUploader,
}: TimelineScreenProps) {
  const totalPhotos = photos.length;
  const totalDays = dayStories.length;
  const totalPlaces = new Set(photos.map((p) => p.location.placeName)).size;

  // Empty state
  if (photos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>时光回忆</Text>
          <Text style={styles.headerSubtitle}>你的旅行足迹</Text>
        </View>
        <View style={styles.emptyContent}>
          <View style={styles.emptyIconCircle}>
            <Text style={styles.emptyIcon}>+</Text>
          </View>
          <Text style={styles.emptyTitle}>还没有回忆</Text>
          <Text style={styles.emptySubtitle}>
            上传你的旅行照片，生成每日回忆故事
          </Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={onOpenUploader} activeOpacity={0.7}>
            <Text style={styles.emptyBtnText}>开始上传</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>时光回忆</Text>
        <Text style={styles.headerSubtitle}>你的旅行足迹</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalDays}</Text>
          <Text style={styles.statLabel}>天</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalPhotos}</Text>
          <Text style={styles.statLabel}>张照片</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalPlaces}</Text>
          <Text style={styles.statLabel}>个地点</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.mapBtn} onPress={onNavigateToMap} activeOpacity={0.7}>
          <Text style={styles.mapBtnText}>在地图上查看</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadBtn} onPress={onOpenUploader} activeOpacity={0.7}>
          <Text style={styles.uploadBtnText}>添加更多照片</Text>
        </TouchableOpacity>
      </View>

      {/* Day Stories */}
      <FlatList
        data={dayStories}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailySummary story={item} onPress={onNavigateToMap} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: {
    backgroundColor: colors.background,
    paddingTop: 60, paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  headerTitle: { ...typography.title1, color: colors.textPrimary },
  headerSubtitle: { ...typography.subhead, color: colors.textSecondary, marginTop: spacing.xs },
  statsRow: {
    flexDirection: 'row', paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg, gap: spacing.md,
  },
  statCard: {
    flex: 1, backgroundColor: colors.background, borderRadius: radius.md,
    paddingVertical: spacing.lg, alignItems: 'center',
    borderWidth: 0.5, borderColor: colors.separator,
  },
  statNumber: { ...typography.title2, color: colors.textPrimary },
  statLabel: { ...typography.caption1, color: colors.textSecondary, marginTop: spacing.xs },
  actions: {
    flexDirection: 'row', paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg, gap: spacing.md,
  },
  mapBtn: {
    flex: 1, backgroundColor: colors.accent, borderRadius: radius.md,
    paddingVertical: spacing.md, alignItems: 'center',
  },
  mapBtnText: { ...typography.headline, color: colors.textOnAccent },
  uploadBtn: {
    flex: 1, backgroundColor: colors.background, borderRadius: radius.md,
    paddingVertical: spacing.md, alignItems: 'center',
    borderWidth: 1, borderColor: colors.accent,
  },
  uploadBtnText: { ...typography.headline, color: colors.accent },
  listContent: { paddingTop: spacing.md, paddingBottom: 100 },
  emptyContainer: { flex: 1, backgroundColor: colors.surface },
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
