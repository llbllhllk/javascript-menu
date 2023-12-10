import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

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

  printCategoryString(category) {
    Console.print(`[ 카테고리 | ${category.join(CONSTANTS.string.separator)} ]`);
  },

  printRecommandResultString(recommandResultString, category) {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoryString(category);
    recommandResultString.forEach(result => Console.print(result));
  },

  printEndString() {
    Console.print(MESSAGE.print.end);
  },
};

export default OutputView;
