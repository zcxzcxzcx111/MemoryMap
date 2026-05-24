import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Photo, SceneType } from './src/types';
import { usePhotoStore } from './src/hooks/usePhotoStore';
import MapScreen from './src/screens/MapScreen';
import TimelineScreen from './src/screens/TimelineScreen';
import PhotoUploader from './src/components/PhotoUploader';
import { reverseGeocode } from './src/services/amapService';

type Screen = 'map' | 'timeline';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('map');
  const [showUploader, setShowUploader] = useState(false);
  const [latestPhoto, setLatestPhoto] = useState<Photo | null>(null);
  const store = usePhotoStore();

  const handlePhotosAdded = useCallback(
    (photos: Photo[]) => {
      store.addPhotos(photos);
      if (photos.length > 0) {
        setLatestPhoto(photos[0]);
      }

      // 异步逆地理编码：为没有地址的照片补充高德地址信息
      photos.forEach(async (photo) => {
        if (photo.location.placeName || !photo.location.latitude || !photo.location.longitude) return;
        try {
          const result = await reverseGeocode(photo.location.latitude, photo.location.longitude);
          if (result) {
            store.updatePhoto(photo.id, {
              location: {
                ...photo.location,
                address: result.address,
                placeName: result.placeName,
              },
            });
          }
        } catch {}
      });
    },
    [store]
  );

  const handleSceneChange = useCallback(
    (photoId: string, scene: SceneType) => {
      store.updatePhoto(photoId, { scene });
      setLatestPhoto(null);
    },
    [store]
  );

  const handleBannerDismiss = useCallback(() => {
    setLatestPhoto(null);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {currentScreen === 'map' ? (
        <MapScreen
          photos={store.photos}
          markers={store.markers}
          onOpenUploader={() => setShowUploader(true)}
          latestPhoto={latestPhoto}
          onSceneChange={handleSceneChange}
          onBannerDismiss={handleBannerDismiss}
        />
      ) : (
        <TimelineScreen
          photos={store.photos}
          dayStories={store.dayStories}
          onNavigateToMap={() => setCurrentScreen('map')}
          onOpenUploader={() => setShowUploader(true)}
        />
      )}

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, currentScreen === 'map' && styles.tabActive]}
          onPress={() => setCurrentScreen('map')}
        >
          <Text style={styles.tabIcon}>&#x1F5FA;</Text>
          <Text style={[styles.tabLabel, currentScreen === 'map' && styles.tabLabelActive]}>
            地图
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, currentScreen === 'timeline' && styles.tabActive]}
          onPress={() => setCurrentScreen('timeline')}
        >
          <Text style={styles.tabIcon}>&#x1F4C5;</Text>
          <Text style={[styles.tabLabel, currentScreen === 'timeline' && styles.tabLabelActive]}>
            回忆
          </Text>
        </TouchableOpacity>
      </View>

      {/* Photo Uploader Modal */}
      <PhotoUploader
        visible={showUploader}
        onClose={() => setShowUploader(false)}
        onPhotosAdded={handlePhotosAdded}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.98)',
    paddingBottom: 28, paddingTop: 8,
    borderTopWidth: 1, borderTopColor: '#f0f0f0',
    shadowColor: '#000', shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05, shadowRadius: 4, elevation: 5,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  tabActive: { borderTopWidth: 2, borderTopColor: '#4ECDC4' },
  tabIcon: { fontSize: 22 },
  tabLabel: { fontSize: 11, color: '#999', marginTop: 2 },
  tabLabelActive: { color: '#4ECDC4', fontWeight: '600' },
});
