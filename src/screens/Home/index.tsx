import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GeoCoordinates } from 'react-native-geolocation-service';
import { useTheme } from 'styled-components';
import {
  useAppDispatch,
  useAppSelector,
  useLocation,
  useWeather,
} from '@/hooks';
import { fetchLocationBy } from '@/services/locationServices';
import {
  roundNumberToString,
  metersPerSecondToKilometersPerHour,
  captalizeFirstLetters,
} from '@/Helpers';
import { TypesWeather } from '@/types';
import {
  Card,
  CardInfo,
  EmptyState,
  Header,
  Screen,
  TextGradient,
  TextWeather,
  WeatherImage,
} from '@/components';
import {
  styles,
  CurrentWeather,
  Divider,
  Title,
  SeparatorComponent,
  CardsInfoWrapper,
} from './styled';
import NextHour from './NextHour';
import NextDay from './NextDay';

function Home() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { getLocation } = useLocation();
  const { setWeather } = useWeather();
  const { weather } = useAppSelector(state => state);
  const [city, setCity] = useState<string | null>(null);
  const [canDisplay, setCanDisplay] = useState<boolean>(false);

  const fetchLocationByCoordinates = useCallback(
    async (coorinates: GeoCoordinates) => {
      try {
        const { data } = await fetchLocationBy({
          lat: coorinates.latitude,
          lon: coorinates.longitude,
        });
        setCity(data[0].name);
      } catch (error) {
        setCity(null);
      }
    },
    [],
  );

  const retrieveData = useCallback(() => {
    dispatch({ type: 'weather/setLoading' });
    getLocation(
      coordinates => {
        setWeather(coordinates).catch(() => {});
        fetchLocationByCoordinates(coordinates).catch(() => {});
      },
      () => {
        dispatch({ type: 'weather/setError', payload: 'location' });
      },
    ).catch(() => dispatch({ type: 'weather/setError', payload: 'location' }));
  }, [dispatch, getLocation, setWeather, fetchLocationByCoordinates]);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  useEffect(() => {
    setCanDisplay(() => weather.loaded && !weather.error);
  }, [weather]);

  const renderHeader = useCallback(
    (title: string) => (
      <Title size={12} weight={600} color="white">
        {title.toUpperCase()}
      </Title>
    ),
    [],
  );

  const renderNextDays = useCallback(
    (range: number) =>
      weather.daily
        .slice(0, range)
        .map(day => <NextDay key={day.dt} data={day} />),
    [weather],
  );

  const renderListItem: ListRenderItem<TypesWeather.Weather> = useCallback(
    ({ item }) => <NextHour data={item} />,
    [],
  );

  const getNext24Hours = () => weather.hourly.slice(1, 25);

  const hasDescription = weather.current.weather[0]?.description;
  return (
    <Screen>
      <LinearGradient
        colors={theme.colors.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Header
          city={city}
          date={weather.current.dt}
          onPressButton={() => retrieveData()}
        />
        {canDisplay && (
          <CurrentWeather>
            <WeatherImage size={290} weather={weather.current.weather} />
            <TextGradient size={110} colors={theme.colors.textGradient}>
              {`${roundNumberToString(Number(weather.current.temp))}°`}
            </TextGradient>
            {hasDescription && (
              <TextWeather weather={weather.current.weather}>
                {captalizeFirstLetters(weather.current.weather[0].description)}
              </TextWeather>
            )}
          </CurrentWeather>
        )}
      </LinearGradient>
      {!canDisplay && weather.error && <EmptyState icon={weather.error} />}
      {canDisplay && (
        <View>
          <Card
            header={() => (
              <>
                {renderHeader('Previsão nas próximas horas')}
                <Divider />
              </>
            )}>
            <FlatList<TypesWeather.Weather>
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.nextHoursList}
              data={getNext24Hours()}
              renderItem={renderListItem}
              keyExtractor={item => item.dt.toString()}
              ItemSeparatorComponent={SeparatorComponent}
            />
          </Card>
          <Card header={() => renderHeader('Previsão para os próximos 8 dias')}>
            {renderNextDays(8)}
          </Card>
          <CardsInfoWrapper>
            <CardInfo
              title="sensação"
              icon="pressure"
              description={`${roundNumberToString(
                Number(weather.current.feels_like),
              )}°`}
            />
            <CardInfo
              title="umidade"
              icon="humidity"
              description={`${weather.current.humidity}%`}
            />
            <CardInfo
              title="pressão"
              icon="pressure"
              description={weather.current.pressure.toString()}
              subDescription="hPa"
            />
            <CardInfo
              title="vento"
              icon="location"
              description={roundNumberToString(
                metersPerSecondToKilometersPerHour(weather.current.wind_speed),
              )}
              subDescription="km/h"
            />
          </CardsInfoWrapper>
        </View>
      )}
    </Screen>
  );
}

export default Home;
