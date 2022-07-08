import React from 'react';
import { useTheme } from 'styled-components/native';
import { Images, WeatherIconsMap } from '@/constants';
import { TypesWeather } from '@/types';
import { WeatherImage } from './styled';

interface Props {
  weather: TypesWeather.WeatherDescriptions;
  size: number;
  shadowOffset?: object | number;
}

export function getWeatherImageBy([weather]: TypesWeather.WeatherDescriptions) {
  const { icon } = weather;
  const imageName = WeatherIconsMap[icon];
  return Images[imageName as keyof typeof Images];
}

export default ({ weather, size, shadowOffset, ...rest }: Props) => {
  const theme = useTheme();
  const offset =
    shadowOffset !== undefined ? shadowOffset : { height: 5, width: 0 };

  const firstWeather = weather[0];
  if (!firstWeather?.icon) return null;
  const imageToRender = getWeatherImageBy(weather);
  return (
    <WeatherImage
      testID="weather-image"
      style={theme.layout.shadow({
        shadowColor: theme.colors.shadow,
        shadowOffset: offset,
        shadowRadius: 4.5,
        shadowOpacity: 0.5,
      })}
      size={size}
      source={imageToRender}
      {...rest}
    />
  );
};
