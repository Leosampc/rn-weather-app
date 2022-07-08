import React from 'react';
import { ScrollView } from './styled';

interface Props {
  children: React.ReactNode;
}

export default ({ children, ...rest }: Props) => (
  <ScrollView testID="screen" {...rest}>
    {children}
  </ScrollView>
);
