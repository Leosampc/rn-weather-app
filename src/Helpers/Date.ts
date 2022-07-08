import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';

dayjs.extend(isLeapYear);
dayjs.extend(customParseFormat);
dayjs.locale('pt-br');

const timestampToDate = (timestamp: number) => {
  const date = dayjs(timestamp * 1000);
  return {
    date,
    dateInFull: date.format('DD MMMM, YYYY'),
    toHour: date.format('HH'),
    toAbbreviatedDay: date.format('ddd'),
    toDay: date.format('dddd'),
  };
};

const isSameDate = (date: dayjs.Dayjs, toCompare: dayjs.Dayjs) => {
  return date.format('DDMMYYYY') === toCompare.format('DDMMYYYY');
};

export { dayjs, timestampToDate, isSameDate };
