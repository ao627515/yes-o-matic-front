
export class AbstractUser {
  id = undefined;
  _email = null;

  constructor() {
    if (new.target === AbstractUser) {
      throw new Error("AbstractUser est une classe abstraite et ne peut pas être instanciée directement.");
    }
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}