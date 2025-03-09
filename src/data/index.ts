import { industries } from './industries';
import { tvoed_bund } from './tarifvertraege/tvoed-bund';
import { oeffentliche_banken } from './tarifvertraege/oeffentliche-banken';
import { private_banken } from './tarifvertraege/private-banken';

// Combine all tarifvertraege
export const tarifvertraege = [
  tvoed_bund,
  ...oeffentliche_banken,
  ...private_banken
];

export { industries };