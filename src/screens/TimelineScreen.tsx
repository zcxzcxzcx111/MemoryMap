import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Photo, DayStory, SceneMarker } from '../types';
import DailySummary from '../components/DailySummary';

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
          <Text style={styles.emptyEmoji}>&#x1F4C5;</Text>
          <Text style={styles.emptyTitle}>还没有回忆</Text>
          <Text style={styles.emptySubtitle}>
            上传你的旅行照片{'\n'}生成每日回忆故事
          </Text>
          <TouchableOpacity style={styles.emptyBtn} onPress={onOpenUploader}>
            <Text style={styles.emptyBtnText}>&#x1F4F7; 开始上传</Text>
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

      {/* Map Button */}
      <TouchableOpacity style={styles.mapBtn} onPress={onNavigateToMap}>
        <Text style={styles.mapBtnText}>&#x1F5FA; 在地图上查看</Text>
      </TouchableOpacity>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadBtn} onPress={onOpenUploader}>
        <Text style={styles.uploadBtnText}>+ 添加更多照片</Text>
      </TouchableOpacity>

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
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    backgroundColor: '#4ECDC4', paddingTop: 60, paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTitle: { fontSize: 28, fontWeight: '700', color: 'white' },
  headerSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  statsRow: {
    flexDirection: 'row', paddingHorizontal: 16, marginTop: -16, gap: 12,
  },
  statCard: {
    flex: 1, backgroundColor: 'white', borderRadius: 12,
    paddingVertical: 16, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 4, elevation: 2,
  },
  statNumber: { fontSize: 24, fontWeight: '700', color: '#2C3E50' },
  statLabel: { fontSize: 12, color: '#7f8c8d', marginTop: 4 },
  mapBtn: {
    marginHorizontal: 16, marginTop: 16,
    backgroundColor: '#2C3E50', borderRadius: 12,
    paddingVertical: 14, alignItems: 'center',
  },
  mapBtnText: { color: 'white', fontSize: 16, fontWeight: '600' },
  uploadBtn: {
    marginHorizontal: 16, marginTop: 10,
    backgroundColor: 'white', borderRadius: 12,
    paddingVertical: 12, alignItems: 'center',
    borderWidth: 1.5, borderColor: '#4ECDC4', borderStyle: 'dashed',
  },
  uploadBtnText: { color: '#4ECDC4', fontSize: 14, fontWeight: '600' },
  listContent: { paddingTop: 8, paddingBottom: 100 },
  emptyContainer: { flex: 1, backgroundColor: '#f8f9fa' },
  emptyContent: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyEmoji: { fontSize: 80, marginBottom: 20 },
  emptyTitle: { fontSize: 24, fontWeight: '700', color: '#2C3E50', marginBottom: 8 },
  emptySubtitle: {
    fontSize: 15, color: '#7f8c8d', textAlign: 'center',
    lineHeight: 22, marginBottom: 32,
  },
  emptyBtn: {
    backgroundColor: '#4ECDC4', borderRadius: 16,
    paddingHorizontal: 32, paddingVertical: 16,
  },
  emptyBtnText: { fontSize: 17, fontWeight: '600', color: 'white' },
});
