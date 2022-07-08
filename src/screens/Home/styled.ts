import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '@/components';

export const styles = StyleSheet.create({
  nextHoursList: {
    padding: 10,
  },
});

export const Title = styled(Text)`
  margin-left: 15px;
  margin-bottom: 10px;
`;
export const CurrentWeather = styled.View`
  padding-horizontal: ${({ theme }) => theme.layout.paddingHorizontal}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export const SeparatorComponent = styled.View`
  width: ${({ theme }) => theme.layout.UnitsToSize(20)}px;
`;

export const CardsInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-horizontal: ${({ theme }) => theme.layout.paddingHorizontal - 25}px;
`;
