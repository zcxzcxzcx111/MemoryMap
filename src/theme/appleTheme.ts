// Apple-style design tokens
// Based on Apple Human Interface Guidelines

export const colors = {
  // Backgrounds
  background: '#FFFFFF',
  surface: '#F2F2F7',
  card: '#FFFFFF',
  groupedBackground: '#F2F2F7',

  // Text
  textPrimary: '#000000',
  textSecondary: '#8E8E93',
  textTertiary: '#AEAEB2',
  textOnAccent: '#FFFFFF',

  // Accent
  accent: '#007AFF',
  accentLight: 'rgba(0, 122, 255, 0.1)',
  accentBorder: 'rgba(0, 122, 255, 0.3)',

  // System
  destructive: '#FF3B30',
  destructiveLight: 'rgba(255, 59, 48, 0.1)',
  warning: '#FF9500',
  success: '#34C759',

  // Separators
  separator: 'rgba(60, 60, 67, 0.12)',
  separatorOpaque: '#C6C6C8',

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.4)',
  frostedWhite: 'rgba(255, 255, 255, 0.85)',
  frostedWhite2: 'rgba(255, 255, 255, 0.72)',

  // Map
  mapOverlay: 'rgba(255, 255, 255, 0.9)',
};

export const typography = {
  largeTitle: { fontSize: 34, fontWeight: '700' as const },
  title1: { fontSize: 28, fontWeight: '700' as const },
  title2: { fontSize: 22, fontWeight: '700' as const },
  title3: { fontSize: 20, fontWeight: '600' as const },
  headline: { fontSize: 17, fontWeight: '600' as const },
  body: { fontSize: 17, fontWeight: '400' as const },
  callout: { fontSize: 16, fontWeight: '400' as const },
  subhead: { fontSize: 15, fontWeight: '400' as const },
  footnote: { fontSize: 13, fontWeight: '400' as const },
  caption1: { fontSize: 12, fontWeight: '400' as const },
  caption2: { fontSize: 11, fontWeight: '400' as const },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 100,
};

export const shadow = {
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
};
