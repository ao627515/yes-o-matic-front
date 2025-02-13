export class RejectionsButtonText {
  constructor(_id = undefined, _text = null, _request = null) {
    this._id = _id;
    this._text = _text;
    this._request = _request;
  }

  // Getters
  get id() { return this._id; }
  get text() { return this._text; }
  get request() { return this._request; }

  // Setters
  set id(value) { this._id = value; }
  set text(value) { this._text = value; }
  set request(value) { this._request = value; }
}
