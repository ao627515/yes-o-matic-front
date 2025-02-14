import { Service } from './service.js';
import { AppDataService } from './app-data-service.js';

export class RequestMedia extends Service {
  #localPath = './assets/imgs/';

  constructor() {
    super();
  }

  changeMedia(mediaName = 'default.jpg') {
    const appDataService = AppDataService.getInstance();
    console.log('appDataService.requestMedia', appDataService.requestMedia);

    appDataService.requestMedia.src = this.#localPath + mediaName;
  }
}