import styled from 'styled-components/native';
import Text from '../Text';
import IconImage from '../IconImage';

export const Container = styled.View`
  align-items: center;
  margin-top: 50px;
  padding-horizontal: 15px;
`;

export const Description = styled(Text)`
  text-align: center;
`;

export const Icon = styled(IconImage)`
  tint-color: ${({ theme }) => theme.colors.shadow};
  width: ${({ theme }) => theme.UnitsToSize(38)}px;
  height: ${({ theme }) => theme.UnitsToSize(32)}px;
  margin-bottom: 10px;
`;
