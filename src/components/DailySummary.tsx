import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DayStory } from '../types';
import { sceneEmoji } from '../data/mockPhotos';

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
      {/* Daily Pick Image */}
      {dailyPickPhoto && (
        <Image
          source={{ uri: dailyPickPhoto.uri }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.dateRow}>
          <Text style={styles.date}>{formatDate(story.date)}</Text>
          <View style={styles.sceneRow}>
            {scenes.slice(0, 4).map((scene) => (
              <Text key={scene} style={styles.sceneEmoji}>
                {sceneEmoji[scene]}
              </Text>
            ))}
          </View>
        </View>

        <Text style={styles.summary}>{story.summary}</Text>

        <View style={styles.stats}>
          <Text style={styles.statText}>
            {story.markers.length} 个地点 ·{' '}
            {story.markers.reduce((acc, m) => acc + m.photos.length, 0)} 张照片
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  sceneRow: {
    flexDirection: 'row',
    gap: 4,
  },
  sceneEmoji: {
    fontSize: 18,
  },
  summary: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#999',
  },
});
