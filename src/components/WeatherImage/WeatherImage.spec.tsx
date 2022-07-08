import React from 'react';
import { Platform, ImageStyle } from 'react-native';
import { Test, Layout } from '@/Helpers';
import mock from '@/mock/weather_day.json';
import WeatherImage, { getWeatherImageBy } from '.';

const { weather } = mock.current;

describe('WeatherImage Component', () => {
  const testID = 'weather-image';
  it('Must render the image by the weather icon attribute', () => {
    const { getByTestId } = Test.renderWithProviders(
      <WeatherImage size={20} weather={weather} />,
    );
    const weatherImage = getByTestId(testID);
    const renderedImage = getWeatherImageBy(weather);

    expect(weatherImage.props.source).toEqual(renderedImage);
  });

  it('Rendering the image shadow on iOS', () => {
    Platform.OS = 'ios';
    const { getByTestId } = Test.renderWithProviders(
      <WeatherImage size={20} weather={weather} />,
    );
    const weatherImage = getByTestId(testID);
    const weatherImageStyles = weatherImage.props.style as ImageStyle[];

    const hasShadow = Layout.contentStyleHasShadow(weatherImageStyles);
    expect(hasShadow).toBeTruthy();
  });
});
