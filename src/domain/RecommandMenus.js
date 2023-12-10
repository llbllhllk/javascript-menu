import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import MENUS from '../constants/menus.js';

class RecommandMenus {
  #recommandMenus;

  #category;

  constructor(unwantedMenu, category) {
    this.#category = category;
    this.#recommandMenus = this.#generateRecommandMenus(unwantedMenu);
  }

  getRecommandMenus() {
    return this.#recommandMenus;
  }

  #generateRecommandMenus(unwantedMenu) {
    const shuffledMenus = this.#shuffleMenus();
    this.#checkReRecommannd(shuffledMenus, unwantedMenu);
    return shuffledMenus;
  }

  #shuffleMenus() {
    const index = Array.from({ length: CONSTANTS.index.listLength }, (_, index) => index + 1);

    return this.#category
      .map(category => {
        const shuffledIndex = Random.shuffle(index);
        return shuffledIndex.map(index => MENUS.list[category][index - 1]);
      })
      .map(menus => menus[CONSTANTS.index.first]);
  }

  #checkReRecommannd(shuffledMenus, unwantedMenu) {
    const isUnwanted = shuffledMenus.forEach(menu =>
      this.#isNestedListIncludesValue(unwantedMenu, menu),
    );
    const isDuplcated = shuffledMenus.length !== new Set(shuffledMenus).size;
    if (isDuplcated || isUnwanted) return this.#generateRecommandMenus();
  }

  #isNestedListIncludesValue(unwantedMenu, menu) {
    return unwantedMenu.some(sublist => sublist.includes(menu));
  }
}

export default RecommandMenus;
