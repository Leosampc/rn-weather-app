import React from 'react';
import { StatusBar, Platform } from 'react-native';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components/native';
import { useAppSelector } from '@/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isNight } from '@/Helpers';
import theme from './theme';
import Colors from './Colors';

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const insets = useSafeAreaInsets();
  const { current } = useAppSelector(state => state.weather);
  let currentTheme = 'day';
  const weatherIcon = current?.weather[0]?.icon;
  if (weatherIcon) {
    currentTheme = isNight(weatherIcon) ? 'night' : 'day';
  }
  const statusBarStyle =
    currentTheme === 'night' ? 'light-content' : 'dark-content';
  const selectedTheme: DefaultTheme = {
    ...theme,
    colors: Colors[currentTheme as keyof typeof Colors],
    layout: {
      ...theme.layout,
      insetTop: insets.top,
      insetBottom: insets.bottom,
    },
  };
  return (
    <StyledThemeProvider theme={selectedTheme}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? statusBarStyle : 'default'}
      />
      {children}
    </StyledThemeProvider>
  );
}
