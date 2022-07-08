import { useCallback } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { fetchWeatherBy } from '@/services/weatherServices';
import { useAppDispatch } from '.';

export default () => {
  const dispatch = useAppDispatch();
  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    try {
      const { data } = await fetchWeatherBy({ lat, lon });
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  const setWeather = useCallback(
    async (coords: Geolocation.GeoCoordinates) => {
      const weather = await fetchWeather(coords.latitude, coords.longitude);
      if (weather === null) {
        return dispatch({ type: 'weather/setError', payload: 'network' });
      }

      return dispatch({ type: 'weather/setData', payload: weather });
    },
    [dispatch, fetchWeather],
  );

  return { setWeather };
};
