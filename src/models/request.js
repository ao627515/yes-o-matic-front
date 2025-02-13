import { User } from './user';
export class Request {
  _id = undefined;
  _acceptButtonText = 'Oui';
  _text = 'Demande ?';
  forceAccept = false;
  isAccepted = false;
  isRejected = false;
  _user = new User();
}