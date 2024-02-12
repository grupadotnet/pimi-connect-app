import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from 'style';

import { isTypeOfTheme, Theme, THEMES } from '@/types/theme';

type Props = {
  children: React.ReactNode;
};

type Context = {
  theme: Theme;
  themedStyles: Record<string, string>;
  switchTheme: () => void;
};

const ThemeContext = React.createContext<Context | undefined>(undefined);

const getThemedStyles = (theme: Theme): Record<string, string> => {
  switch (theme) {
    case 'dark':
      return darkColors;
    case 'light':
      return lightColors;
    default:
      return lightColors;
  }
};

export const ThemeProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<Theme>(
    isTypeOfTheme(colorScheme) ? colorScheme : THEMES[0],
  );

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);

    AsyncStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Load saved theme from storage
    console.log('xd');
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme && isTypeOfTheme(savedTheme)) {
          setTheme(savedTheme);
        }
      } catch (error) {
        // TODO - log error to db?
      }
    };

    getTheme();
  }, []);

  const themedStyles = getThemedStyles(theme);

  const value: Context = {
    theme,
    themedStyles,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('use Theme must be used within provider');
  }

  return context;
};
