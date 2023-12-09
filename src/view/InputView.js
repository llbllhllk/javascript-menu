import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import reTry from '../utils/reTry.js';

const InputView = {
  async readCoachNames() {
    return reTry(async () => {
      const coachNames = await Console.readLineAsync(MESSAGE.read.coachNames);
      // Validator

      return coachNames;
    });
  },

  async readUnwantedMenu(coachName) {
    return reTry(async () => {
      const unwantedMenu = await Console.readLineAsync(`${coachName}${MESSAGE.read.unwantedMenu}`);
      // Validator

      return unwantedMenu;
    });
  },
};

export default InputView;
