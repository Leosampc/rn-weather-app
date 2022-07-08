import React from 'react';
import { Test } from '@/Helpers';
import Colors from '@/theme/Colors';
import mock from '@/mock/weather_night.json';
import Screen from '.';
import Text from '../Text';

describe('Screen Component', () => {
  const testID = 'screen';
  const text = 'testing';
  it('Must render with a Text children', async () => {
    const { findByText } = Test.renderWithProviders(
      <Screen>
        <Text>{text}</Text>
      </Screen>,
    );
    const textChildren = await findByText(text);
    expect(textChildren).toBeTruthy();
  });

  it('Should render with night theme background color when redux-state is nightly', () => {
    const { getByTestId } = Test.renderWithProviders(
      <Screen>
        <Text>{text}</Text>
      </Screen>,
      {
        preloadedState: {
          weather: { ...mock, isLoading: false, loaded: false, error: false },
        },
      },
    );
    const screen = getByTestId(testID);
    expect(screen.props.style[0].backgroundColor).toEqual(
      Colors.night.background,
    );
  });
});
