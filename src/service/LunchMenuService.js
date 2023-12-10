import Coach from '../domain/Coach.js';
import CoachNames from '../domain/CoachNames.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import RecommandMenus from '../domain/RecommandMenus.js';
import MENUS from '../constants/menus.js';
import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';

class LunchMenuService {
  #coachNames;

  #unwantedMenu;

  #recommandMenus;

  #category;

  #coaches;

  constructor() {
    this.#unwantedMenu = [];
    this.#coaches = [];
    this.#recommandMenus = [];
    this.#category = this.#generateWantCategory();
  }

  setCoachNames(coachNames) {
    this.#coachNames = new CoachNames(coachNames).getCoachNames();
  }

  setUnwantedMenu(unwantedMenu) {
    this.#unwantedMenu.push(new UnwantedMenu(unwantedMenu).getUnwantedMenu());
  }

  setRecommandMenus() {
    this.#recommandMenus = this.#unwantedMenu.map(menu =>
      new RecommandMenus(menu, this.#category).getRecommandMenus(),
    );
  }

  setCoaches() {
    this.#coaches = this.#coachNames.map((coachName, index) => {
      const recommandMenu = this.#recommandMenus[index];
      return new Coach(coachName, recommandMenu);
    });
  }

  getCoachNames() {
    return this.#coachNames;
  }

  getRecommandString() {
    return this.#coaches.map(coach => coach.getRecommandResultString());
  }

  getCategory() {
    return this.#category;
  }

  #generateWantCategory() {
    const wantCategory = [];

    while (wantCategory.length < MENUS.category.length) {
      const randomIndex = Random.pickNumberInRange(CONSTANTS.random.from, CONSTANTS.random.to) - 1;
      const randomCategory = MENUS.category.list[randomIndex];
      const categoryCount = wantCategory.filter(cat => cat === randomCategory).length;
      if (categoryCount < MENUS.category.duplicateRange) {
        wantCategory.push(randomCategory);
      }
    }

    return wantCategory;
  }
}

export default LunchMenuService;
