/**
 * Shva Arena Design System
 * All colors, typography, spacing, and styles are centralized in this file
 * for easy design changes from a single location
 */

// ==================== COLORS ====================

export const colors = {
  // Primary colors (based on screenshot)
  primary: {
    main: '#7B2CBF',      // Main purple
    light: '#9D4EDD',      // Light purple
    dark: '#5A189A',       // Dark purple
    hover: '#6A1B9A',      // Purple on hover
  },
  
  // Secondary colors
  secondary: {
    main: '#06B6D4',       // Cyan (for cancel buttons)
    light: '#22D3EE',
    dark: '#0891B2',
  },
  
  // Neutral colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
  },
  
  // Text colors
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  // Status colors
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  
  // Border colors
  border: {
    light: '#E5E7EB',
    default: '#D1D5DB',
    dark: '#9CA3AF',
  },
  
  // Notification colors
  notification: {
    badge: '#EF4444',      // Red for notification badge
  },
} as const;

// ==================== TYPOGRAPHY ====================

export const typography = {
  // Font families
  fontFamily: {
    primary: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    hebrew: "'Segoe UI', 'Arial Hebrew', 'David', sans-serif",
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },
  
  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// ==================== SPACING ====================

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
} as const;

// ==================== SHADOWS ====================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ==================== BORDER RADIUS ====================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  default: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
} as const;

// ==================== BREAKPOINTS ====================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ==================== Z-INDEX ====================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ==================== TRANSITIONS ====================

export const transitions = {
  fast: '150ms ease-in-out',
  default: '200ms ease-in-out',
  slow: '300ms ease-in-out',
} as const;

// ==================== THEME EXPORT ====================

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  breakpoints,
  zIndex,
  transitions,
} as const;

export type Theme = typeof theme;

