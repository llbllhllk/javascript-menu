import CONSTANTS from '../../constants/constants.js';
import ERROR from '../../constants/error.js';

class UnwantedMenuValidator {
  static validateUnwantedMenu(menus) {
    if (this.#checkEmpty(menus)) {
      const formattedUnwantedMenu = this.#formatUnwantedMenu(menus);
      this.#validateCount(formattedUnwantedMenu);
      this.#validateSeparator(menus);
    }
  }

  static #validateSeparator(menus) {
    const formattedMenus = menus.split(CONSTANTS.unwantedMenu.separator).map(name => name.trim());
    const emptyCount = formattedMenus.filter(menu => !menu.trim()).length;
    if (emptyCount > CONSTANTS.number.zero) throw new Error(ERROR.unwantedMenu.separator);
  }

  static #validateCount(formattedUnwantedMenu) {
    if (
      formattedUnwantedMenu.length < CONSTANTS.unwantedMenu.min ||
      formattedUnwantedMenu.length > CONSTANTS.unwantedMenu.max
    )
      throw new Error(ERROR.unwantedMenu.count);
  }

  static #formatUnwantedMenu(menus) {
    return menus
      .split(CONSTANTS.unwantedMenu.separator)
      .map(name => name.trim())
      .filter(Boolean);
  }

  static #checkEmpty(menus) {
    return menus !== CONSTANTS.string.empty;
  }
}

export default UnwantedMenuValidator;
