import React from 'react';
import { Test } from '@/Helpers';
import EmptyState from '.';

describe('EmptyState Component', () => {
  const testID = 'empty-state';
  it('Must render with a valid icon name', () => {
    const { getByTestId } = Test.renderWithProviders(
      <EmptyState icon="network" />,
    );
    const emptyState = getByTestId(testID);
    expect(emptyState).toBeTruthy();
  });
});
