import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { Photo, PhotoLocation, SceneType } from '../types';
import {
  pickPhotos,
  takePhoto,
  processPickedPhoto,
  extractLocation,
  extractDate,
  PickedPhotoData,
} from '../services/photoService';
import { detectSceneWithConfidence } from '../services/sceneDetector';
import SceneSelector from './SceneSelector';
import LocationPicker from './LocationPicker';

type UploadStep = 'pick' | 'review' | 'location' | 'processing';

interface PendingPhoto {
  picked: PickedPhotoData;
  detectedScene: SceneType;
  detectedLocation: PhotoLocation | null;
  selectedScene: SceneType;
  manualLocation?: PhotoLocation;
}

interface PhotoUploaderProps {
  visible: boolean;
  onClose: () => void;
  onPhotosAdded: (photos: Photo[]) => void;
}

export default function PhotoUploader({ visible, onClose, onPhotosAdded }: PhotoUploaderProps) {
  const [step, setStep] = useState<UploadStep>('pick');
  const [pendingPhotos, setPendingPhotos] = useState<PendingPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const reset = useCallback(() => {
    setStep('pick');
    setPendingPhotos([]);
    setCurrentIndex(0);
    setIsProcessing(false);
  }, []);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  // Step 1: Pick photos
  const handlePickFromGallery = useCallback(async () => {
    try {
      const picked = await pickPhotos();
      if (picked.length === 0) return;

      const pending: PendingPhoto[] = picked.map((p) => {
        const detection = detectSceneWithConfidence(p);
        return {
          picked: p,
          detectedScene: detection.scene,
          detectedLocation: extractLocation(p.exif),
          selectedScene: detection.scene,
        };
      });

      setPendingPhotos(pending);
      setCurrentIndex(0);
      setStep('review');
    } catch (error: any) {
      Alert.alert('错误', error.message || '选择照片失败');
    }
  }, []);

  const handleTakePhoto = useCallback(async () => {
    try {
      const picked = await takePhoto();
      if (!picked) return;

      const detection = detectSceneWithConfidence(picked);
      const pending: PendingPhoto = {
        picked,
        detectedScene: detection.scene,
        detectedLocation: extractLocation(picked.exif),
        selectedScene: detection.scene,
      };

      setPendingPhotos([pending]);
      setCurrentIndex(0);
      setStep('review');
    } catch (error: any) {
      Alert.alert('错误', error.message || '拍照失败');
    }
  }, []);

  // Step 2: Review and edit scene
  const handleSceneSelect = useCallback((scene: SceneType) => {
    setPendingPhotos((prev) =>
      prev.map((p, i) => (i === currentIndex ? { ...p, selectedScene: scene } : p))
    );
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    const current = pendingPhotos[currentIndex];

    // If no location, go to location picker
    if (!current.detectedLocation && !current.manualLocation) {
      setStep('location');
      return;
    }

    // Move to next photo or process all
    if (currentIndex < pendingPhotos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      processAllPhotos();
    }
  }, [currentIndex, pendingPhotos]);

  const handleSkip = useCallback(() => {
    // Skip this photo
    if (currentIndex < pendingPhotos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      processAllPhotos();
    }
  }, [currentIndex, pendingPhotos.length]);

  // Step 3: Location picker
  const handleLocationSelect = useCallback((location: PhotoLocation) => {
    setPendingPhotos((prev) =>
      prev.map((p, i) => (i === currentIndex ? { ...p, manualLocation: location } : p))
    );
    setStep('review');

    // Auto advance
    setTimeout(() => {
      if (currentIndex < pendingPhotos.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        processAllPhotos();
      }
    }, 100);
  }, [currentIndex, pendingPhotos.length]);

  const handleSkipLocation = useCallback(() => {
    // Use a default location
    const defaultLocation: PhotoLocation = { latitude: 39.9042, longitude: 116.4074 };
    setPendingPhotos((prev) =>
      prev.map((p, i) => (i === currentIndex ? { ...p, manualLocation: defaultLocation } : p))
    );
    setStep('review');

    setTimeout(() => {
      if (currentIndex < pendingPhotos.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        processAllPhotos();
      }
    }, 100);
  }, [currentIndex, pendingPhotos.length]);

  // Process all photos
  const processAllPhotos = useCallback(async () => {
    setIsProcessing(true);
    setStep('processing');

    try {
      const processed: Photo[] = [];
      for (const pending of pendingPhotos) {
        const photo = await processPickedPhoto(
          pending.picked,
          pending.manualLocation || undefined,
          pending.selectedScene
        );
        // Mark the first photo as daily pick
        if (processed.length === 0) {
          photo.isDailyPick = true;
        }
        processed.push(photo);
      }

      onPhotosAdded(processed);
      handleClose();
    } catch (error: any) {
      Alert.alert('错误', error.message || '处理照片失败');
      setIsProcessing(false);
      setStep('review');
    }
  }, [pendingPhotos, onPhotosAdded, handleClose]);

  const currentPhoto = pendingPhotos[currentIndex];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        {/* Step: Pick photos */}
        {step === 'pick' && (
          <View style={styles.stepContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>&#x2715;</Text>
              </TouchableOpacity>
              <Text style={styles.title}>添加照片</Text>
              <View style={{ width: 36 }} />
            </View>

            <View style={styles.pickContent}>
              <Text style={styles.pickEmoji}>&#x1F4F7;</Text>
              <Text style={styles.pickTitle}>选择照片来源</Text>
              <Text style={styles.pickSubtitle}>
                照片会自动提取位置信息，在地图上生成回忆标记
              </Text>

              <TouchableOpacity
                style={styles.pickBtn}
                onPress={handlePickFromGallery}
              >
                <Text style={styles.pickBtnIcon}>&#x1F5BC;</Text>
                <Text style={styles.pickBtnText}>从相册选择</Text>
                <Text style={styles.pickBtnHint}>支持多选</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.pickBtn, styles.pickBtnAlt]}
                onPress={handleTakePhoto}
              >
                <Text style={styles.pickBtnIcon}>&#x1F4F8;</Text>
                <Text style={styles.pickBtnText}>拍照</Text>
                <Text style={styles.pickBtnHint}>立即拍摄</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Step: Review photo */}
        {step === 'review' && currentPhoto && (
          <View style={styles.stepContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>&#x2715;</Text>
              </TouchableOpacity>
              <Text style={styles.title}>
                {currentIndex + 1} / {pendingPhotos.length}
              </Text>
              <TouchableOpacity
                onPress={handleSkip}
                style={styles.skipBtn}
              >
                <Text style={styles.skipText}>跳过</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.reviewContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Photo preview */}
              <Image
                source={{ uri: currentPhoto.picked.uri }}
                style={styles.preview}
                resizeMode="contain"
              />

              {/* Info card */}
              <View style={styles.infoCard}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>&#x1F4F8; 拍摄日期</Text>
                  <Text style={styles.infoValue}>
                    {extractDate(currentPhoto.picked.exif)}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>&#x1F4CD; 位置信息</Text>
                  <Text style={styles.infoValue}>
                    {currentPhoto.detectedLocation
                      ? `${currentPhoto.detectedLocation.latitude.toFixed(4)}, ${currentPhoto.detectedLocation.longitude.toFixed(4)}`
                      : '未检测到'}
                  </Text>
                </View>
                {!currentPhoto.detectedLocation && (
                  <TouchableOpacity
                    style={styles.addLocationBtn}
                    onPress={() => setStep('location')}
                  >
                    <Text style={styles.addLocationText}>+ 手动添加位置</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Scene selector */}
              <SceneSelector
                selectedScene={currentPhoto.selectedScene}
                recommendedScene={currentPhoto.detectedScene}
                onSelect={handleSceneSelect}
              />

              <View style={{ height: 20 }} />
            </ScrollView>

            {/* Bottom buttons */}
            <View style={styles.bottomBar}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleNext}
              >
                <Text style={styles.confirmBtnText}>
                  {currentIndex < pendingPhotos.length - 1 ? '下一张' : '完成'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Step: Location picker */}
        {step === 'location' && (
          <LocationPicker
            onSelect={handleLocationSelect}
            onCancel={() => setStep('review')}
          />
        )}

        {/* Step: Processing */}
        {step === 'processing' && (
          <View style={styles.processingContainer}>
            <ActivityIndicator size="large" color="#4ECDC4" />
            <Text style={styles.processingText}>正在处理照片...</Text>
            <Text style={styles.processingSubtext}>
              提取位置信息，生成地图标记
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  stepContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
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
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C3E50',
  },
  skipBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  skipText: {
    fontSize: 15,
    color: '#999',
  },
  pickContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  pickEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  pickTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  pickSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  pickBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4ECDC4',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 18,
    width: '100%',
    marginBottom: 14,
    gap: 14,
  },
  pickBtnAlt: {
    backgroundColor: '#2C3E50',
  },
  pickBtnIcon: {
    fontSize: 24,
  },
  pickBtnText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  pickBtnHint: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  reviewContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  preview: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    marginTop: 16,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  addLocationBtn: {
    marginTop: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  addLocationText: {
    fontSize: 14,
    color: '#4ECDC4',
    fontWeight: '600',
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 32,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  confirmBtn: {
    backgroundColor: '#4ECDC4',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmBtnText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  processingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  processingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  processingSubtext: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
