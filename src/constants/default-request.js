import { Request } from '../models/request.js';
import { AcceptButton } from '../models/accept-button.js';
import { RejectionsButton } from '../models/rejections-button.js';
import { BgStyle } from '../models/bg-style.js';


export const DEFAULT_REQUEST = new Request(
  undefined,
  [
    new AcceptButton(
      undefined,
      'Oui',
      null,
      null
    )
  ],
  'Va tu me faire un sandwich ?',
  'start.gif',
  4,
  1,
  false,
  false,
  false,
  null,
  [
    new RejectionsButton(
      undefined,
      'Non',
      'refusal_1.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      'Non',
      'refusal_2.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      'Non',
      'refusal_3.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      'Non',
      'refusal_4.gif',
      null
    ),
  ],
  new BgStyle()
);

