import { AppDataService } from "./app-data-service.js";
import { Service } from "./service.js";
import { NoButtonService } from "./no-button-service.js";
import { RequestService } from "./request-service.js";
import { RequestMedia } from "./request-media.js";


export class YesButtonService extends Service {
  #currentIndex = 0;
  #acceptButtons = [];
  #yesButton = null

  constructor(acceptButtons) {
    super();
    this.#yesButton = document.getElementById('yes-button');
    this.#acceptButtons = [...acceptButtons];
    // this.refusalBehavior();
  }

  handle() {
    this.#yesButton.addEventListener('click', () => {
      if (this.currentIndex === (this.acceptButtons.length - 1)) {
        const appDataService = AppDataService.getInstance();
        appDataService.requestButtonContainer.style.display = 'none';
        appDataService.requestText.textContent = RequestService.getGlobalRequest().successMessage;
        RequestMedia.getInstance().changeMedia(RequestService.getGlobalRequest().successMedia);
      }

      if (this.currentIndex < (this.acceptButtons.length - 1)) {
        this.#currentIndex++;
        console.log('Le bouton "Non" a été cliqué.');
        const acceptButton = this.acceptButtons[this.#currentIndex];
        this.#yesButton.textContent = acceptButton?.text;
        const requestMedia = RequestMedia.getInstance();
        requestMedia.changeMedia(acceptButton?.media);
        const yesButton = YesButtonService.getInstance();
        yesButton.refusalBehavior();
      }


    });
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

  acceptBehavior() {
    const appDataService = AppDataService.getInstance();
    appDataService.requestButtonContainer.style.flexDirection = 'row';
    appDataService.yesButton.style.padding = '0';
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
    const requestButtonContainer = appDataService.requestButtonContainer;
    // requestButtonContainer.style.padding = padding + '%';
    appDataService.requestButtonContainer.style.flexDirection = 'column';
    appDataService.yesButton.style.padding = padding + '%';
  }

  get currentIndex() { return this.#currentIndex }
  get acceptButtons() { return this.#acceptButtons }
} 