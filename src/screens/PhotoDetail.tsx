import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SceneMarker, SceneType } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';
import QCharacter from '../components/QCharacter';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PhotoDetailProps {
  marker: SceneMarker;
  onClose: () => void;
}

export default function PhotoDetail({ marker, onClose }: PhotoDetailProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `${year}年${month}月${day}日 ${weekdays[d.getDay()]}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={styles.closeBtnText}>&#x2715;</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerDate}>{formatDate(marker.date)}</Text>
          <Text style={styles.headerPlace}>
            {marker.location.placeName || '未知地点'}
          </Text>
          {marker.location.address && (
            <Text style={styles.headerAddress}>{marker.location.address}</Text>
          )}
        </View>
        <View style={styles.headerEmoji}>
          <Text style={styles.emojiLarge}>{sceneEmoji[marker.scene]}</Text>
          <Text style={styles.sceneLabel}>{sceneName[marker.scene]}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Q Character Display */}
        <View style={styles.characterSection}>
          <QCharacter
            scene={marker.scene}
            date={marker.date}
            description={marker.description}
            size={120}
            showLabel={false}
          />
          <Text style={styles.characterCaption}>
            {marker.description}
          </Text>
        </View>

        {/* Photos Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            今日照片 ({marker.photos.length})
          </Text>
          <View style={styles.photoGrid}>
            {marker.photos.map((photo, index) => (
              <View key={photo.id} style={styles.photoCard}>
                <Image
                  source={{ uri: photo.uri }}
                  style={styles.photoImage}
                  resizeMode="cover"
                />
                <View style={styles.photoOverlay}>
                  <Text style={styles.photoDesc}>{photo.description}</Text>
                </View>
                {photo.isDailyPick && (
                  <View style={styles.dailyPickBadge}>
                    <Text style={styles.dailyPickText}>&#x2B50; 每日精选</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Location Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>&#x1F4CD; 位置信息</Text>
          <View style={styles.locationCard}>
            <View style={styles.locationRow}>
              <Text style={styles.locationLabel}>纬度</Text>
              <Text style={styles.locationValue}>
                {marker.location.latitude.toFixed(4)}
              </Text>
            </View>
            <View style={styles.locationRow}>
              <Text style={styles.locationLabel}>经度</Text>
              <Text style={styles.locationValue}>
                {marker.location.longitude.toFixed(4)}
              </Text>
            </View>
            {marker.location.placeName && (
              <View style={styles.locationRow}>
                <Text style={styles.locationLabel}>地点</Text>
                <Text style={styles.locationValue}>
                  {marker.location.placeName}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  headerDate: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  headerPlace: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  headerAddress: {
    fontSize: 11,
    color: '#999',
    marginTop: 1,
  },
  headerEmoji: {
    alignItems: 'center',
  },
  emojiLarge: {
    fontSize: 28,
  },
  sceneLabel: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  characterSection: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  characterCaption: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginTop: 12,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 12,
  },
  photoGrid: {
    gap: 12,
  },
  photoCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  photoImage: {
    width: '100%',
    height: SCREEN_WIDTH * 0.6,
  },
  photoOverlay: {
    padding: 12,
  },
  photoDesc: {
    fontSize: 14,
    color: '#333',
  },
  dailyPickBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255,215,0,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dailyPickText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  locationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  locationLabel: {
    fontSize: 13,
    color: '#999',
  },
  locationValue: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
});
