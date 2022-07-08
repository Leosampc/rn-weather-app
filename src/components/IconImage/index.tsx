import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { Images } from '@/constants';

interface Props {
  size: number;
  name: string;
  style?: StyleProp<ImageStyle>;
}

export function getImageIconBy(name: string) {
  return Images[`${name}Icon` as keyof typeof Images];
}

export default ({ size, name, style, ...rest }: Props) => {
  const image = getImageIconBy(name);
  return (
    <Image
      testID="icon-image"
      style={[{ width: size, height: size }, style]}
      source={image}
      {...rest}
    />
  );
};
