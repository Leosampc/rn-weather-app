import React, { memo } from 'react';
import { TypesWeather } from '@/types';
import { roundNumberToString, Date } from '@/Helpers';
import { Text } from '@/components';
import { Container, Weather } from './styled';

interface Props {
  data: TypesWeather.Weather;
}

function NextDay({ data }: Props) {
  function isToday() {
    return Date.isSameDate(Date.dayjs(), Date.timestampToDate(data.dt).date);
  }

  const temperatures = data.temp as { min: number; max: number };
  const canShowTemperature = !!temperatures.min;
  const day = isToday()
    ? 'hoje'
    : Date.timestampToDate(data.dt).toAbbreviatedDay;
  return (
    <Container>
      <Text size={15} weight={600} color="white">
        {`${day}.`}
      </Text>
      <Weather size={35} shadowOffset={0} weather={data.weather} />
      {canShowTemperature && (
        <Text size={16} weight={600} color="white">
          {`${roundNumberToString(temperatures.min)}°/${roundNumberToString(
            temperatures.max,
          )}°`}
        </Text>
      )}
    </Container>
  );
}

export default memo(NextDay);
