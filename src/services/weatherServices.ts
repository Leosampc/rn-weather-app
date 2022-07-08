import { Config } from '@/constants';
import { TypesWeather } from '@/types';
import api from './api';

async function fetchWeatherBy(params: { lat: number; lon: number }) {
  return api.get<TypesWeather.IWeather>('/data/2.5/onecall', {
    params: {
      ...params,
      appid: Config.appId,
      exclude: 'minutely',
      units: 'metric',
      lang: 'pt_br',
    },
  });
}

export { fetchWeatherBy };
