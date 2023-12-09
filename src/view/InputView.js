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
};

export default InputView;
