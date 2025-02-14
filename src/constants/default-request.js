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
  'Do You Love Me ?',
  'start.gif',
  true,
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
      "Non",
      'refusal_2.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_3.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_4.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_5.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_6.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_7.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_8.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_9.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_10.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "Non",
      'refusal_11.gif',
      null
    )
  ],
  new BgStyle(),
  'Come To My Room',
  'acceptance_1.gif'
);

