import React from 'react';
import { Test } from '@/Helpers';
import CardInfo from '.';

describe('CardInfo Component', () => {
  const testID = 'card-info';
  const title = 'Testing Card Info';
  const description = 'Mock of a card description';
  it('Must render', () => {
    const { getByTestId } = Test.renderWithProviders(
      <CardInfo title={title} description={description} />,
    );
    const cardInfo = getByTestId(testID);
    expect(cardInfo).toBeTruthy();
  });

  it('Should render with an Icon', () => {
    const icon = 'location';
    const { getByTestId } = Test.renderWithProviders(
      <CardInfo title={title} description={description} icon={icon} />,
    );
    const cardInfo = getByTestId(testID);
    const headerIcon = cardInfo.findByProps({ name: icon });
    expect(headerIcon).toBeTruthy();
  });

  it('Should render with sub description', () => {
    const subDescriptionText = 'Testing';
    const { getByTestId } = Test.renderWithProviders(
      <CardInfo
        title={title}
        description={description}
        subDescription={subDescriptionText}
      />,
    );
    const cardInfo = getByTestId(testID);
    const subDescription = cardInfo.findByProps({
      children: subDescriptionText,
    });
    expect(subDescription).toBeTruthy();
  });
});
