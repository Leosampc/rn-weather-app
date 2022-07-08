declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const content: ImageSourcePropType;

  export default content;
}

declare module 'react-native-dotenv' {
  export const API_URL: string;
  export const APP_ID: string;
}
