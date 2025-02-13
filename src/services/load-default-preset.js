export class LoadDefaultPreset {
  constructor() {
    this._request = null;
  }

  get request() { return this._request; }

  set request(value) { this._request = value; }

  load() {
    if (this._request) {

    }
  }


  defaultRequest() {
    return new Request(
      undefined,
      'Oui',
      'Va tu me faire un sandwich ?',
      1,
      false,
      false,
      false,
      user,
      null,
      ['Non'],
      null
    );
  }
}