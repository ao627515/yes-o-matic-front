import { User } from './models/user.js';
import { AbstractUser } from './models/abstract-user.js';

const user = new User();
console.log(user); // null

const abstractUser = new AbstractUser(); // Error: AbstractUser is an abstract class and cannot be instantiated directly.
console.log(abstractUser);
