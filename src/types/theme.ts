import { lightColors } from 'style';

export const THEMES = ['light', 'dark'] as const;
export type Theme = (typeof THEMES)[number];
export type Colors = keyof typeof lightColors;

export const isTypeOfTheme = (value: any): value is Theme =>
  THEMES.includes(value);
