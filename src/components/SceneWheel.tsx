import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SceneMarker, SceneType } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';

interface SceneWheelProps {
  markers: SceneMarker[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  visible: boolean;
}

const ITEM_HEIGHT = 72;

export default function SceneWheel({
  markers,
  selectedIndex,
  onSelect,
  visible,
}: SceneWheelProps) {
  const slideAnim = useRef(new Animated.Value(-200)).current;
  const scrollRef = useRef<ScrollView>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: visible ? 0 : -200,
      useNativeDriver: true,
      tension: 65,
      friction: 11,
    }).start();
  }, [visible, slideAnim]);

  useEffect(() => {
    if (scrollRef.current && visible) {
      scrollRef.current.scrollTo({
        y: selectedIndex * ITEM_HEIGHT,
        animated: true,
      });
    }
  }, [selectedIndex, visible]);

  if (!visible || markers.length === 0) return null;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return `${month}/${day} ${weekdays[d.getDay()]}`;
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: slideAnim }] },
      ]}
    >
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.headerIcon}>&#x1F4CD;</Text>
        <Text style={styles.headerText}>
          {markers.length} 个地点
        </Text>
        <Text style={styles.expandIcon}>
          {isExpanded ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      {/* Wheel */}
      <ScrollView
        ref={scrollRef}
        style={styles.wheel}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={styles.wheelContent}
      >
        {markers.map((marker, index) => {
          const isSelected = index === selectedIndex;
          return (
            <TouchableOpacity
              key={marker.id}
              style={[
                styles.wheelItem,
                isSelected && styles.wheelItemSelected,
              ]}
              onPress={() => onSelect(index)}
              activeOpacity={0.7}
            >
              <View style={styles.itemLeft}>
                <Text style={styles.itemEmoji}>
                  {sceneEmoji[marker.scene]}
                </Text>
                {index < markers.length - 1 && (
                  <View style={styles.timelineLine} />
                )}
              </View>
              <View style={styles.itemContent}>
                <Text
                  style={[
                    styles.itemDate,
                    isSelected && styles.itemDateSelected,
                  ]}
                >
                  {formatDate(marker.date)}
                </Text>
                <Text
                  style={[
                    styles.itemPlace,
                    isSelected && styles.itemPlaceSelected,
                  ]}
                  numberOfLines={1}
                >
                  {marker.location.placeName || '未知地点'}
                </Text>
                <Text
                  style={[
                    styles.itemDesc,
                    isSelected && styles.itemDescSelected,
                  ]}
                  numberOfLines={1}
                >
                  {marker.description}
                </Text>
              </View>
              {isSelected && <View style={styles.selectedDot} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Quick nav dots */}
      <View style={styles.quickNav}>
        {markers.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect(index)}
            style={[
              styles.dot,
              index === selectedIndex && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 80,
    bottom: 100,
    width: 180,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  headerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  expandIcon: {
    fontSize: 10,
    color: '#999',
  },
  wheel: {
    flex: 1,
  },
  wheelContent: {
    paddingVertical: 8,
  },
  wheelItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 10,
    height: ITEM_HEIGHT,
  },
  wheelItemSelected: {
    backgroundColor: 'rgba(78, 205, 196, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: '#4ECDC4',
  },
  itemLeft: {
    alignItems: 'center',
    marginRight: 10,
    width: 28,
  },
  itemEmoji: {
    fontSize: 20,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 4,
  },
  itemContent: {
    flex: 1,
  },
  itemDate: {
    fontSize: 11,
    color: '#999',
    marginBottom: 2,
  },
  itemDateSelected: {
    color: '#4ECDC4',
    fontWeight: '600',
  },
  itemPlace: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  itemPlaceSelected: {
    color: '#2C3E50',
  },
  itemDesc: {
    fontSize: 11,
    color: '#666',
  },
  itemDescSelected: {
    color: '#444',
  },
  selectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ECDC4',
    marginTop: 6,
    marginLeft: 4,
  },
  quickNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 6,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ddd',
  },
  dotActive: {
    backgroundColor: '#4ECDC4',
    width: 18,
  },
});
