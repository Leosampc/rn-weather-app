import { Platform, ImageStyle, ViewStyle } from 'react-native';
import { Shadow } from '@/theme/styled';

export const getShadow = ({ shadowOffset, ...shadow }: Shadow) => {
  if (Platform.OS === 'ios')
    return {
      ...shadow,
      shadowOffset:
        typeof shadowOffset === 'number'
          ? { height: shadowOffset, width: shadowOffset }
          : shadowOffset,
    };
  return undefined;
};

export const getElevation = (elevation: number) => {
  if (Platform.OS === 'android') return { elevation };
  return undefined;
};

export const contentStyleHasShadow = (
  imageStyles: ImageStyle[] | ViewStyle[],
) => {
  const hasShadow = imageStyles.findIndex(
    (style: ImageStyle | ViewStyle) =>
      style.shadowColor &&
      style.shadowOffset &&
      style.shadowOpacity &&
      style.shadowRadius,
  );
  return hasShadow > -1;
};
