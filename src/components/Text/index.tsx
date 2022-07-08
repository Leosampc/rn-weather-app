import styled from 'styled-components/native';
import { TypesText } from '@/types';

export default styled.Text<TypesText.IText>`
  font-family: 'Manrope';
  font-weight: ${({ weight }) => weight || 500};
  font-size: ${({ theme, size }) => theme.layout.UnitsToSize(size || 18)}px;
  color: ${props => {
    if (!props.color) {
      return props.theme.colors.primary;
    }
    return (
      props.theme.colors[props.color as keyof typeof props.theme.colors] ||
      props.color
    );
  }};
`;
