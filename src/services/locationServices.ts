import { Config } from '@/constants';
import { TypesLocation } from '@/types';
import api from './api';

async function fetchLocationBy(params: { lat: number; lon: number }) {
  return api.get<TypesLocation.ILocation[]>('/geo/1.0/reverse', {
    params: { ...params, appid: Config.appId },
  });
}

export { fetchLocationBy };
