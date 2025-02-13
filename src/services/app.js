import { User } from '../models/user.js';
import { Request } from '../models/request.js';
import { AppDataService } from './app-data-service.js';
import { AuthService } from './auth-service.js';
import { LoadLocalDefaultPreset } from './load-local-default-preset.js';


export class App {

  _appDataService = null;
  _loadLocalDefaultPreset = null;

  constructor() {
  }
  run() {

    this._loadLocalDefaultPreset = new LoadLocalDefaultPreset();
    this._loadLocalDefaultPreset.load();




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
    // const bgContainer = document.querySelector('.bg-container');
    // const requestContainer = document.querySelector('.request-container');
    // const mediaContainer = document.querySelector('.media-container');
    // const requestTextContainer = document.querySelector('.request-text-container');
    // const requestButtonContainer = document.querySelector('.request-button-container');
    // const requestText = document.getElementById('request-text');
    // const yesButton = document.getElementById('yes-button');
    // const noButton = document.getElementById('no-button');

    // this._appDataService.bgContainer = bgContainer;
    // this._appDataService.requestContainer = requestContainer;
    // this._appDataService.mediaContainer = mediaContainer;
    // this._appDataService.requestTextContainer = requestTextContainer;
    // this._appDataService.requestButtonContainer = requestButtonContainer;
    // this._appDataService.requestText = requestText;
    // this._appDataService.yesButton = yesButton;
    // this._appDataService.noButton = noButton;

    this._appDataService = new AppDataService();

    // console.log(this._appDataService);
    AuthService.user = new User();
  }
}