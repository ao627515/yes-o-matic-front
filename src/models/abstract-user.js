
export class AbstractUser {
  _email = null;

  constructor() {
    if (new.target === AbstractUser) {
      throw new Error("AbstractUser est une classe abstraite et ne peut pas être instanciée directement.");
    }
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}