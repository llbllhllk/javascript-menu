class Coach {
  #name;

  #unwantedMenu;

  constructor(name, unwantedMenu) {
    this.#name = name;
    this.#unwantedMenu = unwantedMenu;
  }

  getName() {
    return this.#name;
  }

  getUnwantedMenu() {
    return this.#unwantedMenu;
  }
}

export default Coach;
