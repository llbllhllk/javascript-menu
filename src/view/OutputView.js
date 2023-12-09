import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printStartString() {
    Console.print(MESSAGE.print.start);
  },

  printResultHeaderString() {
    console.print(MESSAGE.print.resultHeader);
  },

  printWeekString() {
    console.print(MESSAGE.print.week);
  },

  printEndString() {
    Console.print(MESSAGE.print.end);
  },
};

export default OutputView;
