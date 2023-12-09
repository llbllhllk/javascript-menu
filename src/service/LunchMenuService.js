import Coach from '../domain/Coach.js';
import CoachNames from '../domain/CoachNames.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';

class LunchMenuService {
  #coachNames;

  #unwantedMenu;

  #coaches;

  constructor() {
    this.#unwantedMenu = [];
  }

  setCoachNames(coachNames) {
    this.#coachNames = new CoachNames(coachNames).getCoachNames();
  }

  setUnwantedMenu(unwantedMenu) {
    this.#unwantedMenu.push(new UnwantedMenu(unwantedMenu).getUnwantedMenu());
  }

  getCoachNames() {
    return this.#coachNames;
  }

  getUnwantedMenu() {
    return this.#unwantedMenu;
  }
}

export default LunchMenuService;
