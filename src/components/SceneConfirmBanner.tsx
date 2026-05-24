import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import { Photo, SceneType } from '../types';
import { sceneEmoji, sceneName } from '../data/mockPhotos';
import { getAllSceneOptions } from '../services/sceneDetector';

interface SceneConfirmBannerProps {
  photo: Photo | null;
  visible: boolean;
  onConfirm: () => void;
  onChangeScene: (scene: SceneType) => void;
  onDismiss: () => void;
}

export default function SceneConfirmBanner({
  photo,
  visible,
  onConfirm,
  onChangeScene,
  onDismiss,
}: SceneConfirmBannerProps) {
  const slideAnim = useRef(new Animated.Value(-200)).current;
  const [showScenePicker, setShowScenePicker] = useState(false);
  const autoDismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visible && photo) {
      setShowScenePicker(false);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 80,
        friction: 12,
      }).start();

      // Auto dismiss after 5 seconds
      autoDismissRef.current = setTimeout(() => {
        handleDismiss();
      }, 5000);
    } else {
      if (autoDismissRef.current) clearTimeout(autoDismissRef.current);
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }

    return () => {
      if (autoDismissRef.current) clearTimeout(autoDismissRef.current);
    };
  }, [visible, photo]);

  const handleDismiss = useCallback(() => {
    if (autoDismissRef.current) clearTimeout(autoDismissRef.current);
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onDismiss();
    });
  }, [onDismiss]);

  const handleConfirm = useCallback(() => {
    if (autoDismissRef.current) clearTimeout(autoDismissRef.current);
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onConfirm();
    });
  }, [onConfirm]);

  const handleShowPicker = useCallback(() => {
    if (autoDismissRef.current) clearTimeout(autoDismissRef.current);
    setShowScenePicker(true);
  }, []);

  const handleSelectScene = useCallback(
    (scene: SceneType) => {
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        onChangeScene(scene);
        setShowScenePicker(false);
      });
    },
    [onChangeScene]
  );

  if (!photo) return null;

  const sceneOptions = getAllSceneOptions();

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      {/* Main banner */}
      <View style={styles.banner}>
        <Image source={{ uri: photo.uri }} style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.detectLabel}>场景已识别</Text>
          <View style={styles.sceneRow}>
            <Text style={styles.sceneEmoji}>{sceneEmoji[photo.scene]}</Text>
            <Text style={styles.sceneName}>{sceneName[photo.scene]}</Text>
          </View>
          {photo.detectionReason ? (
            <Text style={styles.reason} numberOfLines={1}>
              {photo.detectionReason}
            </Text>
          ) : null}
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
            <Text style={styles.confirmText}>确认</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.changeBtn} onPress={handleShowPicker}>
            <Text style={styles.changeText}>更改</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scene picker (expands below) */}
      {showScenePicker && (
        <View style={styles.picker}>
          <Text style={styles.pickerTitle}>选择正确的场景</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pickerScroll}>
            {sceneOptions.map((opt) => (
              <TouchableOpacity
                key={opt.scene}
                style={[
                  styles.pickerItem,
                  opt.scene === photo.scene && styles.pickerItemActive,
                ]}
                onPress={() => handleSelectScene(opt.scene)}
              >
                <Text style={styles.pickerEmoji}>{opt.emoji}</Text>
                <Text
                  style={[
                    styles.pickerName,
                    opt.scene === photo.scene && styles.pickerNameActive,
                  ]}
                >
                  {opt.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
    zIndex: 300,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.97)',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  detectLabel: {
    fontSize: 11,
    color: '#4ECDC4',
    fontWeight: '600',
    marginBottom: 2,
  },
  sceneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sceneEmoji: {
    fontSize: 18,
  },
  sceneName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  reason: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 8,
  },
  confirmBtn: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  confirmText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  changeBtn: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  changeText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 13,
  },
  picker: {
    backgroundColor: 'rgba(255,255,255,0.97)',
    borderRadius: 16,
    marginTop: 8,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  pickerTitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
    fontWeight: '600',
  },
  pickerScroll: {
    flexDirection: 'row',
  },
  pickerItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    marginRight: 8,
    minWidth: 60,
  },
  pickerItemActive: {
    backgroundColor: '#4ECDC4',
  },
  pickerEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  pickerName: {
    fontSize: 11,
    color: '#666',
    fontWeight: '500',
  },
  pickerNameActive: {
    color: 'white',
    fontWeight: '600',
  },
});
