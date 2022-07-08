import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.layout.UnitsToSize(80)}px;
  height: ${({ theme }) => theme.layout.UnitsToSize(120)}px;
  padding-vertical: 10px;
  padding-horizontal: 0px;
  border-radius: 6px;
`;
