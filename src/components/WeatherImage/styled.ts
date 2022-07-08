import styled from 'styled-components/native';
import { TypesWeatherImage } from '@/types';

export const WeatherImage = styled.Image<TypesWeatherImage.IWeatherImage>`
  width: ${({ theme, size }) => theme.layout.UnitsToSize(size)}px;
  height: ${({ theme, size }) => theme.layout.UnitsToSize(size)}px;
  align-self: center;
`;
