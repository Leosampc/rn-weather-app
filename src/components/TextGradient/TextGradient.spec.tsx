import React from 'react';
import theme from '@/theme/theme';
import { Test } from '@/Helpers';
import TextGradient from '.';

describe('TextWeather Component', () => {
  const text = 'testing';
  it('Must to render', () => {
    const { getByText } = Test.renderWithProviders(
      <TextGradient colors={theme.colors.textGradient}>{text}</TextGradient>,
    );
    const textComponent = getByText(text);
    expect(textComponent).toBeTruthy();
  });
});
