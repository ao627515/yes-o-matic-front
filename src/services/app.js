import { User } from '../models/user.js';
import { Request } from '../models/request.js';
import { AppDataService } from './app-data-service.js';
import { AuthService } from './auth-service.js';
import { LoadLocalDefaultPreset } from './load-local-default-preset.js';
import { Service } from "./service.js";

export class App extends Service {

  _appDataService = null;
  _loadLocalDefaultPreset = null;

  constructor() {
    super();
  }

  run() {

    this._loadLocalDefaultPreset = LoadLocalDefaultPreset.getInstance();
    this._loadLocalDefaultPreset.load();
  }

  init() {
    this._appDataService = AppDataService.getInstance();
    // console.log(this._appDataService);
    AuthService.user = new User();
  }
}