import React from 'react';
import { ViewStyle } from 'react-native';
import Colors from '@/theme/Colors';
import { Test, Layout } from '@/Helpers';
import mock from '@/mock/weather_night.json';
import Card from '.';
import Text from '../Text';

const headerMock = () => <Text>header</Text>;

function getCardShadowStyle(cardStyles: ViewStyle[]) {
  return (
    cardStyles.find(
      (style: ViewStyle) =>
        style.shadowColor &&
        style.shadowOffset &&
        style.shadowOpacity &&
        style.shadowRadius,
    ) || {}
  );
}

function getCardBackgroundColor(cardStyles: ViewStyle[]) {
  return (
    cardStyles.find((style: ViewStyle) => style.backgroundColor)
      ?.backgroundColor || {}
  );
}

describe('Card Component', () => {
  const testID = 'card';
  const text = 'testing';

  it('Must render', () => {
    const { getByTestId } = Test.renderWithProviders(
      <Card header={headerMock}>
        <Text>{text}</Text>
      </Card>,
    );
    const card = getByTestId(testID);
    expect(card).toBeTruthy();
  });

  it('Should render with night theme background and shadow color when redux-state is nightly', () => {
    const { getByTestId } = Test.renderWithProviders(
      <Card header={headerMock}>
        <Text>{text}</Text>
      </Card>,
      {
        preloadedState: {
          weather: { ...mock, isLoading: false, loaded: false, error: false },
        },
      },
    );
    const card = getByTestId(testID);
    const cardStyles = card.props.style as ViewStyle[];

    const hasShadow = Layout.contentStyleHasShadow(cardStyles);
    expect(hasShadow).toBeTruthy();

    const shadowStyle = getCardShadowStyle(cardStyles);
    expect(shadowStyle?.shadowColor).toEqual(Colors.night.cardShadow);

    const cardBackgroundColor = getCardBackgroundColor(cardStyles);
    expect(cardBackgroundColor).toEqual(Colors.night.cardBackground);
  });
});
