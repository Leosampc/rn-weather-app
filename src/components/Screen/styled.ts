import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingBottom: theme.layout.insetBottom || 20,
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
