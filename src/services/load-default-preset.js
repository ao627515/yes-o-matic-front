import { Service } from "./service.js";


export class LoadDefaultPreset extends Service {
  constructor() {
    super();
    this._request = null;
  }

  get request() { return this._request; }

  set request(value) { this._request = value; }

  load() {
    if (this._request) {

    }
  }
}