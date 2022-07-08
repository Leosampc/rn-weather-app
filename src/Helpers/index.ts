import * as Layout from './Layout';
import * as Date from './Date';
import * as Test from './Test';

const roundNumberToString = (number: number) => number.toFixed();

const metersPerSecondToKilometersPerHour = (metersPerSecond: number) =>
  metersPerSecond * 3.6;

const captalizeFirstLetters = (string: string) =>
  string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

const removeWordFromString = (word: string, string: string) =>
  string.replace(word, '');

const isNight = (iconString: string) => iconString.indexOf('n') > -1;

export {
  roundNumberToString,
  metersPerSecondToKilometersPerHour,
  captalizeFirstLetters,
  removeWordFromString,
  isNight,
  Date,
  Layout,
  Test,
};
