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
    this.#outputView.printStartString();

    return this.#inputCoachNames();
  }

  async #inputCoachNames() {
    const coachNames = await this.#inputView.readCoachNames();
    this.#lunchMenuService.setCoachNames(coachNames);

    this.#inputUnwantedMenu();
  }

  async #inputUnwantedMenu() {
    const coachNames = this.#lunchMenuService.getCoachNames();
    await coachNames.reduce(async (promise, name) => {
      await promise;
      const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
      this.#lunchMenuService.setUnwantedMenu(unwantedMenu);
    }, Promise.resolve());

    return this.#printRecommandResult();
  }

  #printRecommandResult() {
    this.#lunchMenuService.setRecommandMenus();
    this.#lunchMenuService.setCoaches();
    const category = this.#lunchMenuService.getCategory();
    const recommandResultString = this.#lunchMenuService.getRecommandString();
    this.#outputView.printRecommandResultString(recommandResultString, category);
    this.#outputView.printEndString();
  }
}

export default LunchMenuController;
