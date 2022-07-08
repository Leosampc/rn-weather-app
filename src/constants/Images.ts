import { TypesMap } from '@/types';
import splashBackground from '@/assets/gradient_background.png';
import humidityIcon from '@/assets/icon_humidity.png';
import locationIcon from '@/assets/icon_location.png';
import pressureIcon from '@/assets/icon_pressure.png';
import refreshIcon from '@/assets/icon_refresh.png';
import networkOffIcon from '@/assets/icon_network_off.png';
import locationOffIcon from '@/assets/icon_location_off.png';
import dayClouds from '@/assets/day_clouds.png';
import dayRain from '@/assets/day_rain.png';
import daySnow from '@/assets/day_snow.png';
import dayStorm from '@/assets/day_storm.png';
import dayWind from '@/assets/day_wind.png';
import nightClouds from '@/assets/night_clouds.png';
import nightMoon from '@/assets/night_moon.png';
import nightRain from '@/assets/night_rain.png';
import nightSnow from '@/assets/night_snow.png';
import nightStorm from '@/assets/night_storm.png';
import nightWind from '@/assets/night_wind.png';
import daySunny from '@/assets/day_sunny.png';

export const WeatherIconsMap: TypesMap.IWeatherIconsMap = {
  '01d': 'daySunny',
  '01n': 'nightMoon',
  '02d': 'dayClouds',
  '02n': 'nightClouds',
  '03d': 'dayClouds',
  '03n': 'nightClouds',
  '04d': 'dayClouds',
  '04n': 'nightClouds',
  '09d': 'dayRain',
  '09n': 'nightRain',
  '10d': 'dayRain',
  '10n': 'nightRain',
  '11d': 'dayStorm',
  '11n': 'nightStorm',
  '13d': 'daySnow',
  '13n': 'nightSnow',
  '50d': 'dayWind',
  '50n': 'nightWind',
};

export default {
  splashBackground,
  humidityIcon,
  locationIcon,
  pressureIcon,
  refreshIcon,
  networkOffIcon,
  locationOffIcon,
  dayClouds,
  dayRain,
  daySnow,
  dayStorm,
  daySunny,
  dayWind,
  nightClouds,
  nightMoon,
  nightRain,
  nightSnow,
  nightStorm,
  nightWind,
};
