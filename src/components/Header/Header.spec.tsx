import React from 'react';
import { Test } from '@/Helpers';
import Header from '.';

describe('Header Component', () => {
  const testID = 'header';
  it('Must render with null props', () => {
    const { getByTestId } = Test.renderWithProviders(
      <Header city={null} date={null} onPressButton={jest.fn()} />,
    );
    const header = getByTestId(testID);
    expect(header).toBeTruthy();
  });
});
