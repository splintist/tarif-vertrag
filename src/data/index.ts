import { industries } from './industries';
import { tvoed_bund } from './tarifvertraege/tvoed-bund';
import { tvoed_vka } from './tarifvertraege/tvoed-vka';
import { tvl } from './tarifvertraege/tvl';
import { oeffentliche_banken } from './tarifvertraege/oeffentliche-banken';
import { private_banken } from './tarifvertraege/private-banken';
import { metall_elektro } from './tarifvertraege/metall-elektro';

// Combine all tarifvertraege
export const tarifvertraege = [
  tvoed_bund,
  tvoed_vka,
  ...tvl,
  ...oeffentliche_banken,
  ...private_banken,
  ...metall_elektro
];

export { industries };