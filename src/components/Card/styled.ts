import styled from 'styled-components/native';

export const Card = styled.View`
  padding-top: 15px;
  margin-top: 20px;
  margin-horizontal: ${({ theme }) => theme.layout.paddingHorizontal - 25}px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;
