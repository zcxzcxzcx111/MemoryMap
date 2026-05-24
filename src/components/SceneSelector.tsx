import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SceneType } from '../types';
import { getAllSceneOptions } from '../services/sceneDetector';

interface SceneSelectorProps {
  selectedScene: SceneType;
  recommendedScene?: SceneType;
  onSelect: (scene: SceneType) => void;
}

export default function SceneSelector({
  selectedScene,
  recommendedScene,
  onSelect,
}: SceneSelectorProps) {
  const options = getAllSceneOptions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>选择场景</Text>
      {recommendedScene && (
        <Text style={styles.hint}>
          自动识别: {options.find((o) => o.scene === recommendedScene)?.name}
        </Text>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {options.map((option) => {
          const isSelected = option.scene === selectedScene;
          const isRecommended = option.scene === recommendedScene;

          return (
            <TouchableOpacity
              key={option.scene}
              style={[
                styles.card,
                isSelected && styles.cardSelected,
                isRecommended && !isSelected && styles.cardRecommended,
              ]}
              onPress={() => onSelect(option.scene)}
              activeOpacity={0.7}
            >
              <Text style={styles.emoji}>{option.emoji}</Text>
              <Text
                style={[
                  styles.cardText,
                  isSelected && styles.cardTextSelected,
                ]}
              >
                {option.name}
              </Text>
              {isRecommended && !isSelected && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>AI</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  hint: {
    fontSize: 12,
    color: '#4ECDC4',
    marginBottom: 8,
  },
  scrollContent: {
    gap: 10,
    paddingVertical: 4,
  },
  card: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    minWidth: 70,
    position: 'relative',
  },
  cardSelected: {
    backgroundColor: '#4ECDC4',
    shadowColor: '#4ECDC4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardRecommended: {
    borderWidth: 1.5,
    borderColor: '#4ECDC4',
    backgroundColor: '#f0fffe',
  },
  emoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  cardTextSelected: {
    color: 'white',
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    width: 20,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 8,
    color: 'white',
    fontWeight: '700',
  },
});
