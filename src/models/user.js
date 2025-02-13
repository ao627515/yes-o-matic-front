import { AbstractUser } from './abstract-user.js';

export class User extends AbstractUser {
  constructor(email = null) {
    super();
    this._email = email;
  }
}