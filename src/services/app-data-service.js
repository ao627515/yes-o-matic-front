import { Service } from "./service.js";

export class AppDataService extends Service {
  _bgContainer = null;
  _requestContainer = null;
  _mediaContainer = null;
  _requestTextContainer = null;
  _requestButtonContainer = null;
  _requestText = null;
  _yesButton = null;
  _noButton = null;
  _requestMedia = null;

  constructor(
  ) {
    super();

    this._bgContainer = document.querySelector('.bg-container');
    this._requestContainer = document.querySelector('.request-container');
    this._mediaContainer = document.querySelector('.media-container');
    this._requestTextContainer = document.querySelector('.request-text-container');
    this._requestButtonContainer = document.querySelector('.request-button-container');
    this._requestText = document.getElementById('request-text');
    this._yesButton = document.getElementById('yes-button');
    this._noButton = document.getElementById('no-button');
    this._requestMedia = document.getElementById('request-media');
  }


  get bgContainer() { return this._bgContainer; }
  get requestContainer() { return this._requestContainer; }
  get mediaContainer() { return this._mediaContainer; }
  get requestTextContainer() { return this._requestTextContainer; }
  get requestButtonContainer() { return this._requestButtonContainer; }
  get requestText() { return this._requestText; }
  get yesButton() { return this._yesButton; }
  get noButton() { return this._noButton }
  get requestMedia() { return this._requestMedia; }

  set bgContainer(value) { this._bgContainer = value; }
  set requestContainer(value) { this._requestContainer = value; }
  set mediaContainer(value) { this._mediaContainer = value; }
  set requestTextContainer(value) { this._requestTextContainer = value; }
  set requestButtonContainer(value) { this.requestButtonContainer = value; }
  set requestText(value) { this._requestText = value; }
  set yesButton(value) { this.yesButton = value; }
  set noButton(value) { this._noButton = value; }
  set requestMedia(value) { this._requestMedia = value; }
}