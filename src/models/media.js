export class Media {
  constructor(_id = undefined, _url = null, _type = null, _request = null) {
    this._id = _id;
    this._url = _url;
    this._type = _type;
    this._request = _request;
  }

  // Getters
  get id() { return this._id; }
  get url() { return this._url; }
  get type() { return this._type; }
  get request() { return this._request; }

  // Setters
  set id(value) { this._id = value; }
  set url(value) { this._url = value; }
  set type(value) { this._type = value; }
  set request(value) { this._request = value; }
}
