import CONSTANTS from '../../constants/constants.js';
import ERROR from '../../constants/error.js';

class CoachNamesValidator {
  static validateCoachNames(coachNames) {
    const formattedCoachNames = this.#formatCoachNames(coachNames);
    this.#validateEmpty(coachNames);
    this.#validateSeparator(coachNames);
    this.#validateParticipants(formattedCoachNames);
    this.#validateName(formattedCoachNames);
  }

  static #validateEmpty(coachNames) {
    if (coachNames.length === CONSTANTS.number.zero) throw new Error(ERROR.coachNames.empty);
  }

  static #validateSeparator(coachNames) {
    const formattedCoachNames = coachNames
      .split(CONSTANTS.coachNames.separator)
      .map(name => name.trim());
    const emptyCount = formattedCoachNames.filter(number => !number.trim()).length;
    if (emptyCount > CONSTANTS.number.zero) throw new Error(ERROR.coachNames.separator);
  }

  static #validateParticipants(formattedCoachNames) {
    if (
      formattedCoachNames.length < CONSTANTS.coaches.min ||
      formattedCoachNames.length > CONSTANTS.coaches.max
    )
      throw new Error(ERROR.coachNames.participants);
  }

  static #validateName(formattedCoachNames) {
    formattedCoachNames.forEach(name => {
      if (name.length < CONSTANTS.coachNames.min || name.length > CONSTANTS.coachNames.max)
        throw new Error(ERROR.coachNames.length);
    });
  }

  static #formatCoachNames(coachNames) {
    return coachNames
      .split(CONSTANTS.coachNames.separator)
      .map(name => name.trim())
      .filter(Boolean);
  }
}

export default CoachNamesValidator;
