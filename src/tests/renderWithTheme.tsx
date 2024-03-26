import { render } from '@testing-library/react-native';
import React from 'react';

import { ThemeProvider } from '@/hooks';

const renderWithTheme = (component: React.ReactNode) =>
  render(<ThemeProvider>{component}</ThemeProvider>);

export default renderWithTheme;
