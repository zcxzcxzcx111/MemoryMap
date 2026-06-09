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
} from 'react-native';
import { Photo, PhotoLocation, SceneType } from '../types';
import {
  pickPhotos,
  takePhoto,
  processPickedPhoto,
  extractLocation,
  extractDate,
  getCurrentLocation,
  PickedPhotoData,
} from '../services/photoService';
import { detectSceneWithConfidence } from '../services/sceneDetector';
import SceneSelector from './SceneSelector';
import LocationPicker from './LocationPicker';
import { colors, typography, spacing, radius } from '../theme/appleTheme';

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

  const handlePickFromGallery = useCallback(async () => {
    try {
      const picked = await pickPhotos();
      if (picked.length === 0) return;

      const pending: PendingPhoto[] = picked.map((p) => {
        const exifLocation = extractLocation(p.exif);
        const detection = detectSceneWithConfidence(p);
        return {
          picked: p,
          detectedScene: detection.scene,
          detectedLocation: exifLocation,
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

      const exifLocation = extractLocation(picked.exif);
      const fallbackLocation = exifLocation ? null : await getCurrentLocation();
      const detection = detectSceneWithConfidence(picked);
      const pending: PendingPhoto = {
        picked,
        detectedScene: detection.scene,
        detectedLocation: exifLocation,
        manualLocation: exifLocation ? undefined : (fallbackLocation || undefined),
        selectedScene: detection.scene,
      };

      setPendingPhotos([pending]);
      setCurrentIndex(0);
      setStep('review');
    } catch (error: any) {
      Alert.alert('错误', error.message || '拍照失败');
    }
  }, []);

  const handleSceneSelect = useCallback((scene: SceneType) => {
    setPendingPhotos((prev) =>
      prev.map((p, i) => (i === currentIndex ? { ...p, selectedScene: scene } : p))
    );
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    const current = pendingPhotos[currentIndex];
    if (!current.detectedLocation && !current.manualLocation) {
      setStep('location');
      return;
    }
    if (currentIndex < pendingPhotos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      processAllPhotos();
    }
  }, [currentIndex, pendingPhotos]);

  const handleSkip = useCallback(() => {
    if (currentIndex < pendingPhotos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      processAllPhotos();
    }
  }, [currentIndex, pendingPhotos.length]);

  const handleLocationSelect = useCallback((location: PhotoLocation) => {
    setPendingPhotos((prev) =>
      prev.map((p, i) => (i === currentIndex ? { ...p, manualLocation: location } : p))
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

  const handleSkipLocation = useCallback(() => {
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
        if (processed.length === 0) photo.isDailyPick = true;
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
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={handleClose}>
      <View style={styles.container}>
        {/* Step: Pick photos */}
        {step === 'pick' && (
          <View style={styles.stepContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.title}>添加照片</Text>
              <View style={{ width: 32 }} />
            </View>

            <View style={styles.pickContent}>
              <Text style={styles.pickTitle}>选择照片来源</Text>
              <Text style={styles.pickSubtitle}>
                照片会自动提取位置信息，在地图上生成回忆标记
              </Text>

              <TouchableOpacity style={styles.pickBtn} onPress={handlePickFromGallery} activeOpacity={0.7}>
                <Text style={styles.pickBtnText}>从相册选择</Text>
                <Text style={styles.pickBtnHint}>支持多选</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.pickBtn, styles.pickBtnAlt]} onPress={handleTakePhoto} activeOpacity={0.7}>
                <Text style={[styles.pickBtnText, styles.pickBtnTextAlt]}>拍照</Text>
                <Text style={[styles.pickBtnHint, styles.pickBtnHintAlt]}>立即拍摄</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Step: Review photo */}
        {step === 'review' && currentPhoto && (
          <View style={styles.stepContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.title}>{currentIndex + 1} / {pendingPhotos.length}</Text>
              <TouchableOpacity onPress={handleSkip} style={styles.skipBtn}>
                <Text style={styles.skipText}>跳过</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.reviewContent} showsVerticalScrollIndicator={false}>
              <Image source={{ uri: currentPhoto.picked.uri }} style={styles.preview} resizeMode="contain" />

              {/* Info — grouped list style */}
              <View style={styles.groupedCard}>
                <View style={styles.groupedRow}>
                  <Text style={styles.groupedLabel}>拍摄日期</Text>
                  <Text style={styles.groupedValue}>{extractDate(currentPhoto.picked)}</Text>
                </View>
                <View style={styles.groupedSeparator} />
                <View style={styles.groupedRow}>
                  <Text style={styles.groupedLabel}>位置信息</Text>
                  <Text style={styles.groupedValue}>
                    {currentPhoto.detectedLocation || currentPhoto.manualLocation
                      ? `${(currentPhoto.detectedLocation || currentPhoto.manualLocation)!.latitude.toFixed(4)}, ${(currentPhoto.detectedLocation || currentPhoto.manualLocation)!.longitude.toFixed(4)}`
                      : '未检测到'}
                  </Text>
                </View>
                {!currentPhoto.detectedLocation && !currentPhoto.manualLocation && (
                  <>
                    <View style={styles.groupedSeparator} />
                    <TouchableOpacity style={styles.addLocationBtn} onPress={() => setStep('location')}>
                      <Text style={styles.addLocationText}>手动添加位置</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>

              <SceneSelector
                selectedScene={currentPhoto.selectedScene}
                recommendedScene={currentPhoto.detectedScene}
                onSelect={handleSceneSelect}
              />

              <View style={{ height: 20 }} />
            </ScrollView>

            <View style={styles.bottomBar}>
              <TouchableOpacity style={styles.confirmBtn} onPress={handleNext} activeOpacity={0.7}>
                <Text style={styles.confirmBtnText}>
                  {currentIndex < pendingPhotos.length - 1 ? '下一张' : '完成'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Step: Location picker */}
        {step === 'location' && (
          <LocationPicker onSelect={handleLocationSelect} onCancel={() => setStep('review')} />
        )}

        {/* Step: Processing */}
        {step === 'processing' && (
          <View style={styles.processingContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
            <Text style={styles.processingText}>正在处理照片...</Text>
            <Text style={styles.processingSubtext}>提取位置信息，生成地图标记</Text>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  stepContainer: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 50, paddingBottom: spacing.lg, paddingHorizontal: spacing.xl,
    backgroundColor: colors.background,
    borderBottomWidth: 0.5, borderBottomColor: colors.separator,
  },
  closeBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: colors.surface, justifyContent: 'center', alignItems: 'center',
  },
  closeBtnText: { fontSize: 16, color: colors.textSecondary, fontWeight: '600' },
  title: { ...typography.headline, color: colors.textPrimary },
  skipBtn: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  skipText: { ...typography.subhead, color: colors.textSecondary },
  pickContent: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    paddingHorizontal: spacing.xxxl,
  },
  pickTitle: { ...typography.title2, color: colors.textPrimary, marginBottom: spacing.sm },
  pickSubtitle: {
    ...typography.subhead, color: colors.textSecondary,
    textAlign: 'center', lineHeight: 22, marginBottom: spacing.xxxl,
  },
  pickBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.accent, borderRadius: radius.md,
    paddingHorizontal: spacing.xxl, paddingVertical: spacing.lg,
    width: '100%', marginBottom: spacing.md,
  },
  pickBtnAlt: { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.accent },
  pickBtnTextAlt: { color: colors.accent },
  pickBtnText: { ...typography.headline, color: colors.textOnAccent },
  pickBtnHint: { ...typography.caption1, color: 'rgba(255,255,255,0.6)', marginLeft: spacing.sm },
  pickBtnHintAlt: { color: colors.textTertiary },
  reviewContent: { flex: 1, paddingHorizontal: spacing.xl },
  preview: {
    width: '100%', height: 280, borderRadius: radius.lg,
    backgroundColor: colors.surface, marginTop: spacing.xl, marginBottom: spacing.xl,
  },
  groupedCard: {
    backgroundColor: colors.background, borderRadius: radius.md,
    borderWidth: 0.5, borderColor: colors.separator,
    overflow: 'hidden', marginBottom: spacing.xl,
  },
  groupedRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: spacing.lg, paddingVertical: spacing.md,
  },
  groupedLabel: { ...typography.subhead, color: colors.textSecondary },
  groupedValue: { ...typography.subhead, color: colors.textPrimary },
  groupedSeparator: { height: 0.5, backgroundColor: colors.separator, marginLeft: spacing.lg },
  addLocationBtn: { paddingVertical: spacing.md, alignItems: 'center' },
  addLocationText: { ...typography.subhead, color: colors.accent, fontWeight: '600' },
  bottomBar: {
    paddingHorizontal: spacing.xl, paddingVertical: spacing.lg, paddingBottom: spacing.xxxl,
    backgroundColor: colors.background,
    borderTopWidth: 0.5, borderTopColor: colors.separator,
  },
  confirmBtn: {
    backgroundColor: colors.accent, borderRadius: radius.md,
    paddingVertical: spacing.lg, alignItems: 'center',
  },
  confirmBtnText: { ...typography.headline, color: colors.textOnAccent },
  processingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: spacing.lg },
  processingText: { ...typography.title3, color: colors.textPrimary },
  processingSubtext: { ...typography.subhead, color: colors.textSecondary },
});
