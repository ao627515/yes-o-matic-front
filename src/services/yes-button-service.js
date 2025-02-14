import { AppDataService } from "./app-data-service.js";
import { Service } from "./service.js";
import { NoButtonService } from "./no-button-service.js";


export class YesButtonService extends Service {
  currentIndext = 0;
  acceptButtons = [];
  #yesButton = null

  constructor(acceptButtons) {
    super();
    this.#yesButton = document.getElementById('yes-button');
    this.acceptButtons = [...acceptButtons];
    // this.refusalBehavior();
  }

  handle() {
    this.#yesButton.addEventListener('click', this.onclickYesButton);
  }

  getYesButton() {
    return this.#yesButton;
  }

  setYesButton(value) {
    this.#yesButton = value;
  }

  setAcceptButtons(value) {
    this.acceptButtons = value;
  }

  onclickYesButton() {
    console.log('Le bouton "Oui" a été cliqué.');
    // requestText.textContent = "Vous avez accepté la demande.";
  }

  refusalBehavior() {

    const nbRefusuals = NoButtonService.getInstance().rejectButtons.length - 1;
    const refusualCurrenIndex = NoButtonService.getInstance().currentIndex;
    const padding = (refusualCurrenIndex * 45) / nbRefusuals;
    // console.log(padding);
    const appDataService = AppDataService.getInstance();
    appDataService.yesButton.style.padding = padding + '%';
  }
} 