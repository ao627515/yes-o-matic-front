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
  }

  init() {
    this._appDataService = new AppDataService();

    // console.log(this._appDataService);
    AuthService.user = new User();
  }
}