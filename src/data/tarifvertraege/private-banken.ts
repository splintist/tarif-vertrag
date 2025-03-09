import { Tarifvertrag } from '../../types';

const basePrivateBanken = {
  industry: 'private-banken',
  region: 'Bundesweit',
  workingHours: 39,
  holidays: 30,
  description: 'Der Tarifvertrag für private Banken regelt die Arbeitsbedingungen für Beschäftigte in privaten Banken und Finanzinstituten. Er wurde zwischen dem Arbeitgeberverband des privaten Bankgewerbes und den Gewerkschaften ver.di und DBV ausgehandelt.',
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

export const private_banken_2024_august: Tarifvertrag = {
  ...basePrivateBanken,
  id: 'private-banken-2024-august',
  title: 'Tarifvertrag Private Banken (August 2024)',
  validFrom: '2024-08-01',
  validUntil: '2025-07-31',
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2546, 2636, 2768, 2886, 3005, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2689, 2802, 2905, 3033, 3168, 3336, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [2828, 2959, 3037, 3178, 3330, 3540, 3781, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3005, 3149, 3174, 3323, 3498, 3743, 4033, 4361, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3341, 3467, 3658, 3957, 4280, 4639, 4998]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3611, 3824, 4167, 4532, 4918, 5312]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 3997, 4376, 4781, 5202, 5623]
      }
    ]
  }
};

export const private_banken_2025_august: Tarifvertrag = {
  ...basePrivateBanken,
  id: 'private-banken-2025-august',
  title: 'Tarifvertrag Private Banken (August 2025)',
  validFrom: '2025-08-01',
  validUntil: '2026-06-30',
  isFuture: true,
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2622, 2715, 2851, 2973, 3095, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2770, 2886, 2992, 3124, 3263, 3436, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [2913, 3048, 3128, 3273, 3430, 3646, 3894, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3095, 3243, 3269, 3423, 3603, 3855, 4154, 4492, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3441, 3571, 3768, 4076, 4408, 4778, 5148]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3719, 3939, 4292, 4668, 5066, 5471]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 4117, 4507, 4924, 5358, 5792]
      }
    ]
  },
  changes: [
    {
      type: 'increase',
      description: 'Gehaltserhöhung um 3,0 % für alle Tarifgruppen',
      details: 'Die Erhöhung gilt ab dem 1. August 2025'
    }
  ]
};

export const private_banken_2026_july: Tarifvertrag = {
  ...basePrivateBanken,
  id: 'private-banken-2026-july',
  title: 'Tarifvertrag Private Banken (Juli 2026)',
  validFrom: '2026-07-01',
  validUntil: '2026-12-31',
  isFuture: true,
  wages: {
    groups: ['TG 1', 'TG 2', 'TG 3', 'TG 4', 'TG 5', 'TG 6', 'TG 7', 'TG 8', 'TG 9'],
    years: [
      {
        label: '1./2. Berufsjahr',
        values: [2674, 2769, 2908, 3032, 3157, null, null, null, null]
      },
      {
        label: '3./4. Berufsjahr',
        values: [2825, 2944, 3052, 3186, 3328, 3505, null, null, null]
      },
      {
        label: '5./6. Berufsjahr',
        values: [2971, 3109, 3191, 3338, 3499, 3719, 3972, null, null]
      },
      {
        label: '7./8. Berufsjahr',
        values: [3157, 3308, 3334, 3491, 3675, 3932, 4237, 4582, null]
      },
      {
        label: '9. Berufsjahr',
        values: [null, null, 3510, 3642, 3843, 4158, 4496, 4847, 5251]
      },
      {
        label: '10. Berufsjahr',
        values: [null, null, null, 3793, 4018, 4378, 4761, 5167, 5580]
      },
      {
        label: '11. Berufsjahr',
        values: [null, null, null, null, 4199, 4597, 5022, 5465, 5908]
      }
    ]
  },
  changes: [
    {
      type: 'increase',
      description: 'Gehaltserhöhung um 2,0 % für alle Tarifgruppen',
      details: 'Die Erhöhung gilt ab dem 1. Juli 2026'
    }
  ]
};

export const private_banken = [
  private_banken_2024_august,
  private_banken_2025_august,
  private_banken_2026_july
];