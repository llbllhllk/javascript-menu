import CONSTANTS from '../constants/constants.js';
import UnwantedMenuValidator from '../utils/validators/UnwantedMenuValidator.js';

class UnwantedMenu {
  #unwantedMenu;

  constructor(menus) {
    UnwantedMenuValidator.validateUnwantedMenu(menus);
    this.#unwantedMenu = this.#formatUnwantedMenu(menus);
  }

  getUnwantedMenu() {
    return this.#unwantedMenu;
  }

  #formatUnwantedMenu(menus) {
    return menus
      .split(CONSTANTS.coachNames.separator)
      .map(name => name.trim())
      .filter(Boolean);
  }
}

export default UnwantedMenu;
