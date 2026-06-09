import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DayStory } from '../types';
import { sceneEmoji } from '../data/mockPhotos';
import { colors, typography, spacing, radius } from '../theme/appleTheme';

interface DailySummaryProps {
  story: DayStory;
  onPress: () => void;
}

export default function DailySummary({ story, onPress }: DailySummaryProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return `${month}月${day}日 ${weekdays[d.getDay()]}`;
  };

  const dailyPickPhoto = story.dailyPickPhoto;
  const scenes = [...new Set(story.markers.map((m) => m.scene))];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      {dailyPickPhoto && (
        <Image source={{ uri: dailyPickPhoto.uri }} style={styles.image} resizeMode="cover" />
      )}
      <View style={styles.content}>
        <View style={styles.dateRow}>
          <Text style={styles.date}>{formatDate(story.date)}</Text>
          <View style={styles.sceneRow}>
            {scenes.slice(0, 4).map((scene) => (
              <View key={scene} style={styles.scenePill}>
                <Text style={styles.sceneEmoji}>{sceneEmoji[scene]}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.summary}>{story.summary}</Text>
        <Text style={styles.stats}>
          {story.markers.length} 个地点 · {story.markers.reduce((acc, m) => acc + m.photos.length, 0)} 张照片
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.sm,
    overflow: 'hidden',
    borderWidth: 0.5, borderColor: colors.separator,
  },
  image: { width: '100%', height: 180 },
  content: { padding: spacing.lg },
  dateRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: spacing.sm,
  },
  date: { ...typography.headline, color: colors.textPrimary },
  sceneRow: { flexDirection: 'row', gap: spacing.xs },
  scenePill: {
    backgroundColor: colors.surface, borderRadius: radius.sm,
    paddingHorizontal: spacing.xs + 1, paddingVertical: 1,
  },
  sceneEmoji: { fontSize: 14 },
  summary: {
    ...typography.subhead, color: colors.textSecondary,
    lineHeight: 20, marginBottom: spacing.sm,
  },
  stats: { ...typography.caption1, color: colors.textTertiary },
});
