import { User } from '../models/user.js';
import { Request } from '../models/request.js';
import { AppDataService } from './app-data-service.js';


export class App {
  static i = '0'
  constructor(i) {
    // self.i = '0';
  }
  run() {
    const user = new User();

    // let request = defaultRequest();

    // displayRequest(request);

    // function defaultRequest() {
    //   return new Request(
    //     undefined,
    //     'Oui',
    //     'Va tu me faire un sandwich ?',
    //     1,
    //     false,
    //     false,
    //     false,
    //     user,
    //     null,
    //     ['Non'],
    //     null
    //   );
    // }

    // function displayRequest(request, rejectionBtnIndex = 0) {
    //   requestText.textContent = request.text;
    //   yesButton.textContent = request.acceptButtonText;
    //   noButton.textContent = request.rejectionsButtonTexts[rejectionBtnIndex];
    // }

    // function onclickYesButton() {
    //   console.log('Le bouton "Oui" a été cliqué.');
    //   requestText.textContent = "Vous avez accepté la demande.";
    // }

    // function onclickNoButton() {
    //   console.log('Le bouton "Non" a été cliqué.');
    //   requestText.textContent = "Vous avez rejeté la demande.";
    // }


    // yesButton.addEventListener('click', onclickYesButton);

    // noButton.addEventListener('click', onclickNoButton);

  }

  init() {
    const bgContainer = document.querySelector('.bg-container');
    const requestContainer = document.querySelector('.request-container');
    const mediaContainer = document.querySelector('.media-container');
    const requestTextContainer = document.querySelector('.request-text-container');
    const requestButtonContainer = document.querySelector('.request-button-container');
    const requestText = document.getElementById('request-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    AppDataService._bgContainer = bgContainer;
    AppDataService._requestContainer = requestContainer;
    AppDataService._mediaContainer = mediaContainer;
    AppDataService._requestTextContainer = requestTextContainer;
    AppDataService._requestButtonContainer = requestButtonContainer;
    AppDataService._requestText = requestText;
    AppDataService._yesButton = yesButton;
    AppDataService._noButton = noButton;
  }
}