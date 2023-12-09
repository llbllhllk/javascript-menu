import CONSTANTS from '../constants/constants.js';
import CoachNamesValidator from '../utils/validators/CoachNamesValidator.js';

class CoachNames {
  #coachNames;

  constructor(coachNames) {
    CoachNamesValidator.validateCoachNames(coachNames);
    this.#coachNames = this.#formatCoachNames(coachNames);
  }

  getCoachNames() {
    return this.#coachNames;
  }

  #formatCoachNames(coachNames) {
    return coachNames
      .split(CONSTANTS.coachNames.separator)
      .map(name => name.trim())
      .filter(Boolean);
  }
}

export default CoachNames;
