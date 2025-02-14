import { RequestService } from "./request-service.js";
import { YesButtonService } from "./yes-button-service.js";
import { DEFAULT_REQUEST } from './../constants/default-request.js'
import { NoButtonService } from "./no-button-service.js";
import { Service } from "./service.js";


export class LoadLocalDefaultPreset extends Service {

  constructor() {
    super();
    RequestService.setGlobalRequest(DEFAULT_REQUEST);
    RequestService.displayRequest();
  }

  load() {
    const yesButtonService = new YesButtonService(RequestService.getGlobalRequest()?.acceptButtons);
    yesButtonService.handle();

    console.log(RequestService.getGlobalRequest()?.rejectionsButtons);

    const noButtonSerivce = new NoButtonService(RequestService.getGlobalRequest()?.rejectionsButtons);
    noButtonSerivce.handle();
  }
}