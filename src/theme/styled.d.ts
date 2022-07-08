import 'styled-components';

export type Shadow = {
  shadowColor: string;
  shadowOffset: object | number;
  shadowOpacity: number;
  shadowRadius: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBackground: string;
      cardShadow: string;
      primary: string;
      secondary: string;
      sunny?: string;
      moon?: string;
      clouds: string;
      wind: string;
      rain: string;
      snow: string;
      storm: string;
      shadow: string;
      backgroundGradient: string[];
      textGradient: string[];
    };
    layout: {
      paddingHorizontal: number;
      insetTop: number;
      insetBottom: number;
      shadow: (shadowProperties: Shadow) => object | undefined;
      elevation: (elevation: number) => object | undefined;
      percentageToSize: (percent: number) => number;
      UnitsToSize: (units: number) => number;
    };
    percentageToSize: (percent: number) => number;
    UnitsToSize: (units: number) => number;
  }
}
