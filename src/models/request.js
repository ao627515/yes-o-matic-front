import { Media } from './media.js';
import { RejectionsButton } from './rejections-button.js';
import { User } from './user.js';

export class Request {
  constructor(
    _id = undefined,
    _acceptButtons = null,
    _text = null,
    _startMedia = null,
    _numberOfRefusals = 1,
    _numberOfAcceptances = 1,
    _forceAccept = false,
    _isAccepted = false,
    _isRejected = false,
    _user = null,
    _rejectionsButtons = null,
    _bgStyles = null
  ) {
    this._id = _id;
    this._acceptButtons = _acceptButtons;
    this._text = _text;
    this._startMedia = _startMedia;
    this._numberOfRefusals = _numberOfRefusals;
    this._numberOfAcceptances = _numberOfAcceptances;
    this._forceAccept = _forceAccept;
    this._isAccepted = _isAccepted;
    this._isRejected = _isRejected;
    this._user = _user;
    this._rejectionsButtons = _rejectionsButtons;
    this._bgStyles = _bgStyles;
  }

  // Getters
  get id() { return this._id; }
  get acceptButtons() { return this._acceptButtons; }
  get text() { return this._text; }
  get forceAccept() { return this._forceAccept; }
  get isAccepted() { return this._isAccepted; }
  get isRejected() { return this._isRejected; }
  get user() { return this._user; }
  get rejectionsButtons() { return this._rejectionsButtons; }
  get bgStyles() { return this._bgStyles; }

  // Setters
  set id(value) { this._id = value; }
  set acceptButtons(value) { this._acceptButtons = value; }
  set text(value) { this._text = value; }
  set forceAccept(value) { this._forceAccept = value; }
  set isAccepted(value) { this._isAccepted = value; }
  set isRejected(value) { this._isRejected = value; }
  set user(value) { this._user = value; }
  set rejectionsButtons(value) { this._rejectionsButtons = value; }
  set bgStyles(value) { this._bgStyles = value; }
}
