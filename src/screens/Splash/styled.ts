import styled from 'styled-components/native';
import { ImageBackgroundProps } from 'react-native';

export const Background = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 267px;
  height: 267px;
`;
