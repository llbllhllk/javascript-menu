import CONSTANTS from '../../src/constants/constants.js';
import ERROR from '../../src/constants/error.js';

class UnwantedMenuValidator {
  static validateUnwantedMenu(menus) {
    const validators = [this.#validateSeparator];
    validators.forEach(validator => validator(menus));
  }

  static #validateSeparator(menus) {
    const formattedMenus = menus.split(CONSTANTS.unwantedMenu.separator).map(name => name.trim());
    const emptyCount = formattedMenus.filter(menu => !menu.trim()).length;

    if (emptyCount > CONSTANTS.number.zero) throw new Error(ERROR.unwantedMenu.separator);
  }
}

export default UnwantedMenuValidator;
