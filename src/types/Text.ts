import { TextProps } from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export interface IText extends TextProps {
  weight?: FontWeight;
  size?: number;
  color?: string;
}
