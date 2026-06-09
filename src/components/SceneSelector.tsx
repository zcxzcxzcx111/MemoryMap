import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SceneType } from '../types';
import { getAllSceneOptions } from '../services/sceneDetector';
import { colors, typography, spacing, radius } from '../theme/appleTheme';

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
                styles.chip,
                isSelected && styles.chipSelected,
                !isSelected && isRecommended && styles.chipRecommended,
              ]}
              onPress={() => onSelect(option.scene)}
              activeOpacity={0.6}
            >
              <Text style={styles.chipEmoji}>{option.emoji}</Text>
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                {option.name}
              </Text>
              {isRecommended && !isSelected && (
                <Text style={styles.recommendLabel}>推荐</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: spacing.lg },
  title: { ...typography.headline, color: colors.textPrimary, marginBottom: spacing.xs },
  hint: { ...typography.caption1, color: colors.accent, marginBottom: spacing.sm },
  scrollContent: { gap: spacing.sm, paddingVertical: spacing.xs },
  chip: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: spacing.sm, paddingHorizontal: spacing.md,
    borderRadius: radius.pill, backgroundColor: colors.surface,
    borderWidth: 1, borderColor: 'transparent',
  },
  chipSelected: {
    backgroundColor: colors.accent, borderColor: colors.accent,
  },
  chipRecommended: {
    borderColor: colors.accentBorder, backgroundColor: colors.accentLight,
  },
  chipEmoji: { fontSize: 16, marginRight: spacing.xs },
  chipText: { ...typography.subhead, color: colors.textSecondary },
  chipTextSelected: { color: colors.textOnAccent, fontWeight: '600' },
  recommendLabel: {
    ...typography.caption2, color: colors.accent,
    marginLeft: spacing.xs,
  },
});
