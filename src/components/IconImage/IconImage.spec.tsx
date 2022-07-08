import React from 'react';
import { Test } from '@/Helpers';
import IconImage from '.';

describe('IconImage Component', () => {
  const testID = 'icon-image';
  it('Must render with his default props', () => {
    const { getByTestId } = Test.renderWithProviders(
      <IconImage size={1} name="humidity" />,
    );
    const iconImage = getByTestId(testID);
    expect(iconImage).toBeTruthy();
  });
});
