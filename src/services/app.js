import { User } from '../models/user.js';
import { Request } from '../models/request.js';


export class App {
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
}