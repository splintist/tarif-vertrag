import { Tarifvertrag } from '../../types';

const baseOeffentlicheBanken = {
  industry: 'oeffentliche-banken',
  region: 'Bundesweit',
  workingHours: 39,
  holidays: 30,
  description: 'Der Tarifvertrag für öffentliche Banken regelt die Arbeitsbedingungen für Beschäftigte in öffentlichen Banken und Finanzinstituten. Er wurde zwischen dem Arbeitgeberverband des öffentlichen Bankgewerbes und den Gewerkschaften ver.di und DBV ausgehandelt.',
  christmasBonus: {
    years: 'Nach 6 Monaten Beschäftigungszeit',
    percentage: 100
  },
  entgeltgruppenInfo: [
    {
      group: 'TG 1-3',
      description: 'Einfache bis mittelschwere Tätigkeiten im Bankwesen',
      examples: ['Kassierer', 'Sachbearbeiter', 'Kundenberater im Standardgeschäft']
    },
    {
      group: 'TG 4-6',
      description: 'Qualifizierte Tätigkeiten mit erhöhter Verantwortung',
      examples: ['Kreditsachbearbeiter', 'Wertpapierhändler', 'Firmenkundenberater']
    },
    {
      group: 'TG 7-9',
      description: 'Hochqualifizierte Tätigkeiten mit Führungsverantwortung',
      examples: ['Abteilungsleiter', 'Risikomanager', 'Investmentbanker']
    }
  ],
  entgeltstufenInfo: [
    {
      stufe: '1./2. Berufsjahr',
      duration: '24 Monate',
      description: 'Einstiegsstufe für die ersten beiden Berufsjahre'
    },
    {
      stufe: '3./4. Berufsjahr',
      duration: '24 Monate',
      description: 'Entwicklungsstufe im dritten und vierten Berufsjahr'
    },
    {
      stufe: '5./6. Berufsjahr',
      duration: '24 Monate',
      description: 'Fortgeschrittene Stufe im fünften und sechsten Berufsjahr'
    },
    {
      stufe: '7./8. Berufsjahr',
      duration: '24 Monate',
      description: 'Erfahrene Stufe im siebten und achten Berufsjahr'
    },
    {
      stufe: '9. Berufsjahr',
      duration: '12 Monate',
      description: 'Vertiefte Berufserfahrung im neunten Jahr'
    },
    {
      stufe: '10. Berufsjahr',
      duration: '12 Monate',
      description: 'Langjährige Berufserfahrung im zehnten Jahr'
    },
    {
      stufe: '11. Berufsjahr',
      duration: 'Unbegrenzt',
      description: 'Maximalstufe ab dem elften Berufsjahr'
    }
  ]
};

export const oeffentliche_banken_2024: Tarifvertrag = {
  ...baseOeffentlicheBanken,
  id: 'oeffentliche-banken-2024',
  title: 'Tarifvertrag Öffentliche Banken (November 2024)',
  validFrom: '2024-11-01',
  validUntil: '2025-10-31',
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2558, 2649, 2781, 2900, 3019, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2702, 2815, 2919, 3048, 3183, 3352, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [2842, 2973, 3052, 3193, 3345, 3556, 3799, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3019, 3164, 3190, 3339, 3515, 3761, 4052, 4382, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3357, 3483, 3675, 3976, 4300, 4661, 5021]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3628, 3843, 4187, 4554, 4942, 5337]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 4016, 4397, 4804, 5227, 5650]
      }
    ]
  }
};

export const oeffentliche_banken_2025: Tarifvertrag = {
  ...baseOeffentlicheBanken,
  id: 'oeffentliche-banken-2025',
  title: 'Tarifvertrag Öffentliche Banken (November 2025)',
  validFrom: '2025-11-01',
  validUntil: '2026-10-31',
  isFuture: true,
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2630, 2723, 2859, 2981, 3104, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2778, 2894, 3001, 3133, 3272, 3446, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [2922, 3056, 3137, 3282, 3439, 3656, 3905, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3104, 3253, 3279, 3432, 3613, 3866, 4165, 4505, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3451, 3581, 3778, 4087, 4420, 4792, 5162]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3730, 3951, 4304, 4682, 5080, 5486]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 4128, 4520, 4939, 5373, 5808]
      }
    ]
  },
  changes: [
    {
      type: 'increase',
      description: 'Gehaltserhöhung um 2,8 % für alle Tarifgruppen',
      details: 'Die Erhöhung gilt ab dem 1. November 2025'
    }
  ]
};

export const oeffentliche_banken_2026: Tarifvertrag = {
  ...baseOeffentlicheBanken,
  id: 'oeffentliche-banken-2026',
  title: 'Tarifvertrag Öffentliche Banken (November 2026)',
  validFrom: '2026-11-01',
  validUntil: '2026-12-31',
  isFuture: true,
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2701, 2797, 2936, 3061, 3188, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2853, 2972, 3082, 3218, 3360, 3539, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [3001, 3139, 3222, 3371, 3532, 3755, 4010, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3188, 3341, 3368, 3525, 3711, 3970, 4277, 4627, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3544, 3678, 3880, 4197, 4539, 4921, 5301]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3831, 4058, 4420, 4808, 5217, 5634]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 4239, 4642, 5072, 5518, 5965]
      }
    ]
  },
  changes: [
    {
      type: 'increase',
      description: 'Gehaltserhöhung um 2,7 % für alle Tarifgruppen',
      details: 'Die Erhöhung gilt ab dem 1. November 2026'
    }
  ]
};

export const oeffentliche_banken = [
  oeffentliche_banken_2024,
  oeffentliche_banken_2025,
  oeffentliche_banken_2026
];