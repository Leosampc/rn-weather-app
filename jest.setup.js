import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components';

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

jest.mock('@react-native-masked-view/masked-view', () => {
  return jest.fn().mockImplementation(({ children }) => children);
});

jest.mock('react-native-linear-gradient', () => {
  return jest.fn().mockImplementation(({ children }) => children);
});

jest.mock('react-native-responsive-fontsize', () => {
  return {
    RFPercentage: jest.fn().mockImplementation(value => Math.round(value)),
    RFValue: jest.fn().mockImplementation(value => Math.round(value)),
  };
});
