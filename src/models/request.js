import { User } from './user';
export class Request {
  _id = undefined;
  _acceptButtonText = 'Oui';
  _text = 'Demande ?';
  _forceAccept = false;
  _isAccepted = false;
  _isRejected = false;
  _user = new User();
}