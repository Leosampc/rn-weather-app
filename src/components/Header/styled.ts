import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => 54 + theme.layout.insetTop}px;
  padding-bottom: 10px;
  padding-horizontal: ${({ theme }) => theme.layout.paddingHorizontal}px;
`;

export const HeaderInfo = styled.View`
  flex-direction: column;
  height: 100%;
  max-width: 85%;
`;

export const Icon = styled.Image`
  tint-color: white;
  width: ${({ theme }) => theme.layout.UnitsToSize(19)}px;
  height: ${({ theme }) => theme.layout.UnitsToSize(20)}px;
`;

export const RefreshButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.layout.UnitsToSize(40)}px;
  height: ${({ theme }) => theme.layout.UnitsToSize(40)}px;
  background-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 40px;
`;
