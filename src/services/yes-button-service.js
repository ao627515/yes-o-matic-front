import { AppDataService } from "./app-data-service.js";

export class YesButtonSerivce {
  currentIndext = 0;
  acceptButtons = [];
  #yesButton = null

  constructor(acceptButtons) {
    this.#yesButton = document.getElementById('yes-button');
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
}