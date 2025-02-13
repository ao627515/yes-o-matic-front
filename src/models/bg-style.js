export class BgStyle {
  constructor(_id = undefined, color = null, media = null, choice = null, _request = null) {
    this._id = _id;
    this.color = color;
    this.media = media;
    this.choice = choice;
    this._request = _request;
  }

  // Getters
  get id() { return this._id; }
  get color() { return this._color; }
  get media() { return this._media; }
  get choice() { return this._choice; }
  get request() { return this._request; }

  // Setters
  set id(value) { this._id = value; }
  set color(value) { this._color = value; }
  set media(value) { this._media = value; }
  set choice(value) { this._choice = value; }
  set request(value) { this._request = value; }
}
