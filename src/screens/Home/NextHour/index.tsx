import React, { memo } from 'react';
import { Text, WeatherImage } from '@/components';
import { roundNumberToString, Date } from '@/Helpers';
import { TypesWeather } from '@/types';
import { Container } from './styled';

interface Props {
  data: TypesWeather.Weather;
}

function NextHour({ data }: Props) {
  const temperature = roundNumberToString(Number(data.temp));
  return (
    <Container>
      <Text color="white" size={14}>
        {Date.timestampToDate(data.dt).toHour}
      </Text>
      <WeatherImage size={40} shadowOffset={0} weather={data.weather} />
      <Text color="white" weight="bold">
        {`${temperature}°`}
      </Text>
    </Container>
  );
}

export default memo(NextHour);
