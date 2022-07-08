import React from 'react';
import { TypesWeather } from '@/types';
import { WeatherIconsMap } from '@/constants';
import { removeWordFromString, isNight } from '@/Helpers';
import Text from '../Text';

interface Props {
  weather: TypesWeather.WeatherDescriptions;
  children: React.ReactNode;
}

export function retrieveWeatherColorName(weatherIcon: string) {
  const currentTime = isNight(weatherIcon) ? 'night' : 'day';
  const weatherImageName = WeatherIconsMap[weatherIcon];
  return removeWordFromString(currentTime, weatherImageName);
}

export default ({ weather, children, ...rest }: Props) => {
  const firstWeather = weather[0];
  let color = 'shadow';
  if (firstWeather?.icon) {
    const { icon } = firstWeather;
    color = retrieveWeatherColorName(icon).toLowerCase();
  }
  return (
    <Text weight="bold" size={15} color={color} {...rest}>
      {children}
    </Text>
  );
};
