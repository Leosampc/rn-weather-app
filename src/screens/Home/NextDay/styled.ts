import styled from 'styled-components/native';
import { WeatherImage } from '@/components';

export const Container = styled.View`
  height: ${({ theme }) => theme.layout.UnitsToSize(45)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  padding-vertical: 6px;
  border-top-width: 1px;
  border-top-color: white;
`;

export const Weather = styled(WeatherImage)`
  position: absolute;
  left: 50%;
`;
