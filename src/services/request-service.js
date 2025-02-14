import { AppDataService } from "./app-data-service.js";
import { Service } from "./service.js";


export class RequestService extends Service {
  static #globalRequest = null;

  constructor() {
    super();
  }

  static getGlobalRequest() {

    return RequestService.#globalRequest;
  }

  static setGlobalRequest(value) {
    RequestService.#globalRequest = value;
  }

  static displayRequest(request = null, rejectionBtnIndex = 0, acceptBtnIndex = 0) {
    if (!request)
      request = RequestService.#globalRequest;

    const appDataService = AppDataService.getInstance();
    appDataService.requestText.textContent = request.text;
    appDataService.yesButton.textContent = request.acceptButtons[acceptBtnIndex].text;
    appDataService.noButton.textContent = request.rejectionsButtons[rejectionBtnIndex].text;
  }
}