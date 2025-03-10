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
      "j'ai faim",
      'refusal_2.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "j'ai tres faim",
      'refusal_3.gif',
      null
    ),
    new RejectionsButton(
      undefined,
      "j'ai tres  tres faim",
      'refusal_4.gif',
      null
    ),
  ],
  new BgStyle(),
  'Merci pour le sandwich',
  'acceptance_1.gif'
);

