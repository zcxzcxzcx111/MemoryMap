import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Photo, SceneType } from './src/types';
import { usePhotoStore } from './src/hooks/usePhotoStore';
import MapScreen from './src/screens/MapScreen';
import TimelineScreen from './src/screens/TimelineScreen';
import PhotoUploader from './src/components/PhotoUploader';
import { reverseGeocode } from './src/services/amapService';
import { colors, typography } from './src/theme/appleTheme';

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
          onDeletePhoto={store.removePhoto}
          onUpdatePhoto={store.updatePhoto}
        />
      ) : (
        <TimelineScreen
          photos={store.photos}
          dayStories={store.dayStories}
          onNavigateToMap={() => setCurrentScreen('map')}
          onOpenUploader={() => setShowUploader(true)}
        />
      )}

      {/* Bottom Tab Bar — Apple style */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setCurrentScreen('map')}
          activeOpacity={0.6}
        >
          <Text style={[styles.tabLabel, currentScreen === 'map' && styles.tabLabelActive]}>
            地图
          </Text>
          {currentScreen === 'map' && <View style={styles.tabDot} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setCurrentScreen('timeline')}
          activeOpacity={0.6}
        >
          <Text style={[styles.tabLabel, currentScreen === 'timeline' && styles.tabLabelActive]}>
            回忆
          </Text>
          {currentScreen === 'timeline' && <View style={styles.tabDot} />}
        </TouchableOpacity>
      </View>

      <PhotoUploader
        visible={showUploader}
        onClose={() => setShowUploader(false)}
        onPhotosAdded={handlePhotosAdded}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  tabBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row',
    backgroundColor: colors.frostedWhite,
    paddingBottom: 28, paddingTop: 10,
    borderTopWidth: 0.5, borderTopColor: colors.separator,
  },
  tab: {
    flex: 1, alignItems: 'center', paddingVertical: 4,
  },
  tabLabel: {
    ...typography.caption1,
    color: colors.textTertiary,
  },
  tabLabelActive: {
    color: colors.accent,
    fontWeight: '600',
  },
  tabDot: {
    width: 5, height: 5, borderRadius: 2.5,
    backgroundColor: colors.accent,
    marginTop: 4,
  },
});
