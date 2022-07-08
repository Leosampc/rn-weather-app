import { useCallback } from 'react';
import {
  Alert,
  ToastAndroid,
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { TypesLocation } from '@/types';
import appConfig from '../../app.json';

export default () => {
  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Não foi possível abrir os ajustes.');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Permissão de localização negada.');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Ative o serviço de localização para permitir "${appConfig.displayName}" para acessar sua localização.`,
        '',
        [
          { text: 'Ir para ajustes', onPress: openSetting },
          { text: 'Não usar localização', onPress: () => {} },
        ],
      );
    }

    return false;
  };

  const hasPermissionAndroid = async () => {
    if (Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Permissão de localização negada pelo usuário.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Permissão de localização revogada pelo usuário.',
        ToastAndroid.LONG,
      );
    }
    return false;
  };

  const hasLocationPermission = useCallback(async () => {
    const hasPermission =
      Platform.OS === 'android' ? hasPermissionAndroid : hasPermissionIOS;
    return hasPermission();
  }, []);

  const getLocation = useCallback(
    async (
      callback: TypesLocation.GeolocationSuccessHandler,
      onError: TypesLocation.GelocationErrorHandler,
    ) => {
      const hasPermission = await hasLocationPermission();

      if (!hasPermission) {
        onError(true);
        return;
      }

      Geolocation.getCurrentPosition(
        ({ coords }) => {
          callback(coords);
        },
        error => {
          Alert.alert(`Code ${error.code}`, error.message);
          onError(true);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
          forceLocationManager: false,
          showLocationDialog: true,
        },
      );
    },
    [hasLocationPermission],
  );

  return { getLocation };
};
