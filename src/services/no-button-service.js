export class NoButtonService {
  #currentIndex = 0;
  #rejectButtons = [];
  #noButton = null

  constructor(rejectButtons) {
    this.#noButton = document.getElementById('no-button');
    this.#rejectButtons.push(...rejectButtons);
    console.log(this.rejectButtons.length);

  }

  handle() {
    this.#noButton.addEventListener('click', () => {

      if (this.currentIndex < (this.rejectButtons.length - 1)) {
        // console.log('currentIndex - ', this.currentIndex);
        this.#currentIndex++;
        console.log('Le bouton "Non" a été cliqué.');
        // console.log('currentIndex - ', this.currentIndex);
        // console.log('rejectButtons - ', this.rejectButtons.length - 1);
        this.#noButton.textContent = this.rejectButtons[this.#currentIndex]?.text;
      }
    });
  }

  getNoButton() {
    return this.#noButton;
  }

  setNoButton(value) {
    this.#noButton = value;
  }

  setAcceptButtons(value) {
    this.rejectButtons = value;
  }

  onclickNoButton(currentIndex, rejectButtons) {
    console.log('Le bouton "Non" a été cliqué.');
    if (currentIndex <= (rejectButtons.length - 1)) {
      this.#noButton.textContent = this.rejectButtons[this.#currentIndex]?.text;
    }
    // requestText.textContent = "Vous avez accepté la demande.";
  }

  get currentIndex() { return this.#currentIndex }
  get rejectButtons() { return this.#rejectButtons }
}