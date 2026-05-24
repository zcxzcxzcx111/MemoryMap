import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text, Platform, Image } from 'react-native';
import { SceneType } from '../types';
import { sceneEmoji } from '../data/mockPhotos';
import {
  getCharacterHTML,
  sceneColors,
  sceneEmojis,
} from './characters';
import { hasCharacterImage } from './characters/characterImages';

// Import WebView - works on both web and native
let WebViewComponent: any = null;
try {
  WebViewComponent = require('react-native-webview').WebView;
} catch (e) {}

// Static image map for React Native Image component
const characterImageMap: Partial<Record<SceneType, number>> = {
  selfie: require('../../assets/characters/selfie.png'),
  rowing: require('../../assets/characters/rowing.png'),
  dining: require('../../assets/characters/dining.png'),
  hiking: require('../../assets/characters/hiking.png'),
  shopping: require('../../assets/characters/shopping.png'),
  beach: require('../../assets/characters/beach.png'),
  park: require('../../assets/characters/park.png'),
  city: require('../../assets/characters/city.png'),
  travel: require('../../assets/characters/travel.png'),
};

interface QCharacterProps {
  scene: SceneType;
  date: string;
  description: string;
  size?: number;
  showLabel?: boolean;
  onPress?: () => void;
}

export default function QCharacter({
  scene,
  date,
  description,
  size = 80,
  showLabel = true,
}: QCharacterProps) {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -4,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [floatAnim]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  };

  const renderCharacter = () => {
    // If PNG image exists, use Image component directly
    if (hasCharacterImage(scene) && characterImageMap[scene]) {
      return (
        <View style={[styles.imageWrapper, { width: size, height: size }]}>
          <Image
            source={characterImageMap[scene]!}
            style={{ width: size, height: size }}
            resizeMode="contain"
          />
        </View>
      );
    }

    // Fallback to SVG via WebView for scenes without PNG
    if (WebViewComponent) {
      const htmlContent = getCharacterHTML(scene);
      return (
        <View style={[styles.characterWrapper, { width: size, height: size }]}>
          <WebViewComponent
            source={{ html: htmlContent }}
            style={styles.webview}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            originWhitelist={['*']}
          />
        </View>
      );
    }

    // Final fallback: emoji in colored circle
    return (
      <View style={[styles.fallbackChar, { width: size, height: size, backgroundColor: sceneColors[scene] }]}>
        <Text style={[styles.fallbackEmoji, { fontSize: size * 0.45 }]}>{sceneEmojis[scene]}</Text>
      </View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: floatAnim }] },
      ]}
    >
      {showLabel && (
        <View style={styles.bubble}>
          <Text style={styles.emoji}>{sceneEmoji[scene]}</Text>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <Text style={styles.descText} numberOfLines={1}>
            {description}
          </Text>
        </View>
      )}

      {renderCharacter()}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  bubble: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: 140,
  },
  emoji: { fontSize: 16 },
  dateText: { fontSize: 11, color: '#666', marginTop: 2 },
  descText: { fontSize: 12, color: '#333', fontWeight: '600', marginTop: 1 },
  fallbackChar: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  fallbackEmoji: { textAlign: 'center' },
  characterWrapper: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  webview: { backgroundColor: 'transparent' },
});
