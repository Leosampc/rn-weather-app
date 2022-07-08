import { StyleSheet, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import Card from '../Card';

export const styles = StyleSheet.create({
  title: {
    marginLeft: 5,
  },
});

export const StyledCard = styled(Card)<ViewProps>`
  width: 47%;
  height: ${({ theme }) => theme.layout.UnitsToSize(145)}px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  margin-horizontal: 0px;
  margin-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
