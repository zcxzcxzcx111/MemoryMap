import { useState, useCallback, useMemo } from 'react';
import { Photo, SceneMarker, DayStory, PhotoLocation, SceneType } from '../types';
import { generateSceneMarkers, generateDayStories } from '../data/mockPhotos';

export interface PhotoStore {
  photos: Photo[];
  markers: SceneMarker[];
  dayStories: DayStory[];
  addPhoto: (photo: Photo) => void;
  addPhotos: (photos: Photo[]) => void;
  removePhoto: (id: string) => void;
  updatePhoto: (id: string, updates: Partial<Photo>) => void;
  clearAll: () => void;
}

export function usePhotoStore(initialPhotos: Photo[] = []): PhotoStore {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);

  const markers = useMemo(() => generateSceneMarkers(photos), [photos]);
  const dayStories = useMemo(() => generateDayStories(photos), [photos]);

  const addPhoto = useCallback((photo: Photo) => {
    setPhotos((prev) => [...prev, photo]);
  }, []);

  const addPhotos = useCallback((newPhotos: Photo[]) => {
    setPhotos((prev) => [...prev, ...newPhotos]);
  }, []);

  const removePhoto = useCallback((id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const updatePhoto = useCallback((id: string, updates: Partial<Photo>) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  }, []);

  const clearAll = useCallback(() => {
    setPhotos([]);
  }, []);

  return {
    photos,
    markers,
    dayStories,
    addPhoto,
    addPhotos,
    removePhoto,
    updatePhoto,
    clearAll,
  };
}
