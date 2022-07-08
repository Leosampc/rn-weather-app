import React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Card } from './styled';

interface Props {
  style?: ViewStyle;
  header: () => React.ReactChild;
  children: React.ReactNode;
}

export default ({ header, children, style, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Card
      testID="card"
      style={[
        theme.layout.shadow({
          shadowColor: theme.colors.cardShadow,
          shadowOffset: { height: 2, width: 0 },
          shadowRadius: 4.5,
          shadowOpacity: 0.5,
        }),
        theme.layout.elevation(6),
        style,
      ]}
      {...rest}>
      {header()}
      {children}
    </Card>
  );
};
