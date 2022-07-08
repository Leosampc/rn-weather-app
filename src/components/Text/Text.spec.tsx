import React from 'react';
import { Test } from '@/Helpers';
import theme from '@/theme/theme';
import Text from '.';

describe('Text Component', () => {
  const text = 'testing';
  it('Must to render without any prop', () => {
    const { getByText } = Test.renderWithProviders(<Text>{text}</Text>);
    const textComponent = getByText(text);
    expect(textComponent).toBeTruthy();
  });

  it('Should have the color style setted by color prop', () => {
    const color = 'clouds';
    const { getByText } = Test.renderWithProviders(
      <Text color={color}>{text}</Text>,
    );
    const textComponent = getByText(text);
    expect(textComponent.props.style[0].color).toBe(theme.colors[color]);
  });
});
