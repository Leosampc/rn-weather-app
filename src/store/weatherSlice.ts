import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypesWeather } from '@/types';

const emptyWeather: TypesWeather.Weather = {
  dt: 0,
  temp: 0,
  feels_like: 0,
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  uvi: 0,
  clouds: 0,
  wind_speed: 0,
  wind_deg: 0,
  wind_gust: 0,
  weather: [],
};

interface WeatherState extends TypesWeather.IWeather {
  loaded: boolean;
  error: boolean | string;
  isLoading: boolean;
}

const initialState: WeatherState = {
  lat: 0,
  lon: 0,
  current: emptyWeather,
  hourly: [emptyWeather],
  daily: [emptyWeather],
  loaded: false,
  error: false,
  isLoading: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: state => {
      return { ...state, isLoading: true };
    },
    setData: (_, action: PayloadAction<TypesWeather.IWeather>) => {
      return {
        ...action.payload,
        loaded: true,
        error: false,
        isLoading: false,
      };
    },
    setError: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, isLoading: false };
    },
  },
});

export const { setData, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
