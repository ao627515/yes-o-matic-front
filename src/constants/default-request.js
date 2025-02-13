import { Request } from '../models/request.js';
import { AcceptButton } from '../models/accept-button.js';
import { RejectionsButton } from '../models/rejections-button.js';
import { BgStyle } from '../models/bg-style.js';

export const DEFAULT_REQUEST = new Request(
  undefined,
  DEFAULT_ACCEPT_BUTTON,
  'Va tu me faire un sandwich ?',
  'start.gif',
  4,
  1,
  false,
  false,
  false,
  null,
  DEFAULT_REJECTIONS_BUTTON,
  BG_STYLES
);

const DEFAULT_ACCEPT_BUTTON = [
  new AcceptButton(
    undefined,
    'Oui',
    null,
    DEFAULT_REQUEST
  )
];

const DEFAULT_REJECTIONS_BUTTON = [
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
];

const BG_STYLES = new BgStyle();