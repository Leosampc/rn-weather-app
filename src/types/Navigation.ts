import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;
