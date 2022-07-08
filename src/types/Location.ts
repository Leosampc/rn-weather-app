import Geolocation from 'react-native-geolocation-service';

export type GeolocationSuccessHandler = (
  coords: Geolocation.GeoCoordinates,
) => any;
export type GelocationErrorHandler = (error?: boolean) => void;
export interface ILocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
