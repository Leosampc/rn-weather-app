type Temp =
  | {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    }
  | number;

type FeelsLike = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type WeatherDescriptions = {
  id: number;
  main: string;
  description: string;
  icon: string;
}[];

export interface Weather {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: Temp;
  feels_like: number | FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility?: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherDescriptions;
  pop?: number;
  rain?: number | { [index: string]: number };
}

export interface IWeather {
  lat: number;
  lon: number;
  current: Weather;
  hourly: Weather[];
  daily: Weather[];
}
