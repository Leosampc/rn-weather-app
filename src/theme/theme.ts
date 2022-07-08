import { DefaultTheme } from 'styled-components';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Layout } from '@/Helpers';
import Colors from './Colors';

const theme: DefaultTheme = {
  colors: Colors.day,
  layout: {
    paddingHorizontal: 48,
    insetTop: 0,
    insetBottom: 0,
    shadow: Layout.getShadow,
    elevation: Layout.getElevation,
    percentageToSize: (percentage: number) => RFPercentage(percentage),
    UnitsToSize: (units: number) => RFValue(units),
  },
  percentageToSize: (percentage: number) => RFPercentage(percentage),
  UnitsToSize: (units: number) => RFValue(units),
};

export default theme;
