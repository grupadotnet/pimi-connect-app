import React from 'react';
import { Switch } from 'react-native';

import { useTheme } from '@/hooks';

const SwitchTheme = () => {
  const { theme, switchTheme } = useTheme();

  return <Switch value={theme === 'dark'} onChange={switchTheme} />;
};

export default SwitchTheme;
