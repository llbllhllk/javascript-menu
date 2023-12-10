import CONSTANTS from '../constants/constants.js';

class Coach {
  #name;

  #recommandMenus;

  constructor(name, recommandMenus) {
    this.#name = name;
    this.#recommandMenus = recommandMenus;
  }

  getRecommandResultString() {
    return `[ ${this.#name} | ${this.#recommandMenus.join(CONSTANTS.string.separator)} ]`;
  }
}

export default Coach;
