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
  get color() { return this.color; }
  get media() { return this.media; }
  get choice() { return this.choice; }
  get request() { return this._request; }

  // Setters
  set id(value) { this._id = value; }
  set color(value) { this.color = value; }
  set media(value) { this.media = value; }
  set choice(value) { this.choice = value; }
  set request(value) { this._request = value; }
}
