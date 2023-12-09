import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import reTry from '../utils/reTry.js';
import CoachNamesValidator from '../utils/validators/CoachNamesValidator.js';
import UnwantedMenuValidator from '../utils/validators/UnwantedMenuValidator.js';

const InputView = {
  async readCoachNames() {
    return reTry(async () => {
      const coachNames = await Console.readLineAsync(MESSAGE.read.coachNames);
      CoachNamesValidator.validateCoachNames(coachNames);

      return coachNames;
    });
  },

  async readUnwantedMenu(coachName) {
    return reTry(async () => {
      const unwantedMenu = await Console.readLineAsync(`\n${coachName}${MESSAGE.read.unwantedMenu}`);
      UnwantedMenuValidator.validateUnwantedMenu(unwantedMenu);

      return unwantedMenu;
    });
  },
};

export default InputView;
