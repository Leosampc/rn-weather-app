import React from 'react';
import { Test } from '@/Helpers';
import theme from '@/theme/theme';
import mock from '@/mock/weather_day.json';
import TextWeather, { retrieveWeatherColorName } from '.';

const { weather } = mock.current;

describe('TextWeather Component', () => {
  const text = 'testing';
  it('Must to render', () => {
    const { getByText } = Test.renderWithProviders(
      <TextWeather weather={weather}>{text}</TextWeather>,
    );
    const textComponent = getByText(text);
    expect(textComponent).toBeTruthy();
  });

  it('Should the color setted by weather icon atrribute', () => {
    const { getByText } = Test.renderWithProviders(
      <TextWeather weather={weather}>{text}</TextWeather>,
    );
    const textComponent = getByText(text);

    const color = retrieveWeatherColorName(weather[0].icon).toLowerCase();

    expect(textComponent.props.style[0].color).toBe(
      theme.colors[color as keyof typeof theme.colors],
    );
  });
});
