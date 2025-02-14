export class Service {
  static _instance = null;

  constructor() {
    if (new.target._instance !== null) {
      throw new Error(`${new.target.name} instance already created. Use ${new.target.name}.getInstance() to access it.`);
    }
    new.target._instance = this;
  }

  static getInstance() {
    if (this._instance === null) {
      this._instance = new this(); // Utilise dynamiquement la classe héritée
    }
    return this._instance;
  }
}
