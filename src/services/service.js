export class Service {
  static #instance = null;

  constructor() {
    if (Service.#instance !== null) {
      throw new Error("Service instance already created. Use Service.getInstance() to access it.");
    }
    Service.#instance = this;
  }

  static getInstance() {
    if (Service.#instance === null) {
      Service.#instance = new Service();
    }
    return Service.#instance;
  }
}