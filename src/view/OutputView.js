import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printStartString() {
    Console.print(MESSAGE.print.start);
  },

  printResultHeaderString() {
    Console.print(MESSAGE.print.resultHeader);
  },

  printWeekString() {
    Console.print(MESSAGE.print.week);
  },

  printCategoryString() {
    Console.print(MESSAGE.print.category);
  },

  printRecommandResultString() {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoryString();
  },

  printEndString() {
    Console.print(MESSAGE.print.end);
  },
};

export default OutputView;
