import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../Text';

interface GradientTextProps {
  colors: string[];
  size?: number;
  children: React.ReactChild;
}

export default ({ colors, size, ...rest }: GradientTextProps) => {
  return (
    <MaskedView maskElement={<Text size={size} weight="bold" {...rest} />}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.1, y: 1.2 }}
        end={{ x: 0.4, y: 0.1 }}>
        <Text {...rest} size={size} style={[{ opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};
