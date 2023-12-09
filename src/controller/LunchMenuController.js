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
    console.log(coachNames);
  }
}

export default LunchMenuController;
