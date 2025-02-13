import { Media } from './media.js';
import { RejectionsButtonText } from './rejections-button.js';
import { User } from './user.js';

export class Request {
  constructor(
    _id = undefined,
    _acceptButtonTexts = null,
    _text = null,
    _startMedia = null,
    _numberOfRefusals = 1,
    _numberOfAcceptances = 1,
    _forceAccept = false,
    _isAccepted = false,
    _isRejected = false,
    _user = null,
    _medias = null,
    _rejectionsButtonTexts = null,
    _bgStyles = null
  ) {
    this._id = _id;
    this._acceptButtonText = _acceptButtonText;
    this._text = _text;
    this._startMedia = _startMedia;
    this._numberOfRefusals = _numberOfRefusals;
    this._numberOfAcceptances = _numberOfAcceptances;
    this._forceAccept = _forceAccept;
    this._isAccepted = _isAccepted;
    this._isRejected = _isRejected;
    this._user = _user;
    this._medias = _medias;
    this._rejectionsButtonTexts = _rejectionsButtonTexts;
    this._bgStyles = _bgStyles;
  }

  // Getters
  get id() { return this._id; }
  get acceptButtonText() { return this._acceptButtonText; }
  get text() { return this._text; }
  get forceAccept() { return this._forceAccept; }
  get isAccepted() { return this._isAccepted; }
  get isRejected() { return this._isRejected; }
  get user() { return this._user; }
  get medias() { return this._medias; }
  get rejectionsButtonTexts() { return this._rejectionsButtonTexts; }
  get bgStyles() { return this._bgStyles; }

  // Setters
  set id(value) { this._id = value; }
  set acceptButtonText(value) { this._acceptButtonText = value; }
  set text(value) { this._text = value; }
  set forceAccept(value) { this._forceAccept = value; }
  set isAccepted(value) { this._isAccepted = value; }
  set isRejected(value) { this._isRejected = value; }
  set user(value) { this._user = value; }
  set medias(value) { this._medias = value; }
  set rejectionsButtonTexts(value) { this._rejectionsButtonTexts = value; }
  set bgStyles(value) { this._bgStyles = value; }
}
