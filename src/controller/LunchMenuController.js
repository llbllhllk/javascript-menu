class LunchMenuController {
  #lunchMenuService;

  #inputView;

  #outputView;

  constructor(lunchMenuService, inputView, outputView) {
    this.#lunchMenuService = lunchMenuService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    this.#inputCoachNames();
  }

  async #inputCoachNames() {
    const coachNames = await this.#inputView.readCoachNames();

    this.#inputUnwantedMenu();
  }

  async #inputUnwantedMenu() {
    const unwantedMenu = await this.#inputView.readUnwantedMenu('coach');
  }
}

export default LunchMenuController;
