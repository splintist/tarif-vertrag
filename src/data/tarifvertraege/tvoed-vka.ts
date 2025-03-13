import { Tarifvertrag } from '../../types';

export const tvoed_vka: Tarifvertrag = {
  id: 'tvoed-vka-2024',
  title: 'TVöD VKA',
  industry: 'oeffentlicher-dienst',
  region: 'Bundesweit',
  validFrom: '2024-03-01',
  validUntil: '2024-12-31',
  wages: {
    groups: [
      'E 1', 'E 2', 'E 2Ü', 'E 3', 'E 4', 'E 5', 'E 6', 'E 7', 'E 8',
      'E 9a', 'E 9b', 'E 9c', 'E 10', 'E 11', 'E 12', 'E 13',
      'E 14', 'E 15', 'E 15Ü'
    ],
    years: [
      {
        label: 'Stufe 1',
        values: [
          null, 2582.16, 2601.60, 2762.69, 2802.62, 2928.99, 3042.04, 3095.23, 3281.44,
          3448.96, 3566.89, 3787.84, 3895.33, 4032.38, 4170.32, 4628.76,
          5003.84, 5504.00, null
        ]
      },
      {
        label: 'Stufe 2',
        values: [
          2355.52, 2784.28, 2835.82, 2968.02, 2993.55, 3117.67, 3236.55, 3331.58, 3486.59,
          3662.32, 3814.56, 4052.08, 4191.53, 4410.41, 4581.34, 4985.95,
          5329.75, 5863.92, 6752.60
        ]
      },
      {
        label: 'Stufe 3',
        values: [
          2388.86, 2834.67, 2921.62, 3017.99, 3153.75, 3245.11, 3372.94, 3472.38, 3628.68,
          3869.96, 3969.97, 4339.43, 4528.25, 4765.62, 5061.67, 5392.57,
          5755.37, 6265.40, 7462.01
        ]
      },
      {
        label: 'Stufe 4',
        values: [
          2430.55, 2906.58, 3036.03, 3132.21, 3253.48, 3380.06, 3507.92, 3614.47, 3770.54,
          4331.88, 4429.89, 4649.06, 4893.44, 5151.01, 5594.63, 5834.04,
          6227.68, 6813.49, 8134.09
        ]
      },
      {
        label: 'Stufe 5',
        values: [
          2469.42, 3064.63, 3114.63, 3217.92, 3353.20, 3505.47, 3640.49, 3748.49, 3922.69,
          4436.39, 4702.42, 4981.91, 5300.10, 5678.44, 6220.01, 6353.53,
          6754.16, 7377.29, 8582.18
        ]
      },
      {
        label: 'Stufe 6',
        values: [
          2569.47, 3229.97, 3229.97, 3296.43, 3411.60, 3570.28, 3708.02, 3820.45, 3995.85,
          4703.23, 5018.11, 5220.52, 5433.63, 5975.19, 6516.74, 6635.44,
          7132.13, 7748.20, 8686.69
        ]
      }
    ]
  },
  workingHours: 39,
  holidays: 30,
  description: 'Der Tarifvertrag TVöD VKA gilt für Beschäftigte, die in einem Arbeitsverhältnis zu einem Arbeitgeber stehen, der Mitglied eines Mitgliedverbandes der Vereinigung der kommunalen Arbeitgeberverbände (VKA) ist.',
  christmasBonus: {
    years: 'Beschäftigte, die am 1. Dezember im Arbeitsverhältnis stehen',
    percentage: {
      'E1-E8': 84.51,
      'E9a-E12': 70.28,
      'E13-E15': 51.78
    },
    details: 'Die Jahressonderzahlung berechnet sich aus dem durchschnittlichen Monatseinkommen der Monate Juli, August und September.'
  },
  entgeltgruppenInfo: [
    {
      group: 'E1-E4',
      description: 'Einfache Tätigkeiten, die keine oder eine kurze Einarbeitung erfordern',
      examples: ['Reinigungskräfte', 'Küchenhilfen', 'Hausmeisterhelfer']
    },
    {
      group: 'E5-E8',
      description: 'Tätigkeiten, die eine abgeschlossene Berufsausbildung oder entsprechende Berufserfahrung voraussetzen',
      examples: ['Verwaltungsfachangestellte', 'Handwerker', 'Technische Mitarbeiter']
    },
    {
      group: 'E9a-E12',
      description: 'Tätigkeiten, die ein Hochschulstudium (Bachelor/FH) oder vergleichbare Qualifikationen erfordern',
      examples: ['Sachbearbeiter', 'Sozialarbeiter', 'IT-Fachkräfte']
    },
    {
      group: 'E13-E15',
      description: 'Hochqualifizierte Tätigkeiten mit Universitätsabschluss (Master) und besonderer Verantwortung',
      examples: ['Abteilungsleiter', 'Referatsleiter', 'Projektleiter']
    }
  ],
  entgeltstufenInfo: [
    {
      stufe: 'Stufe 1',
      duration: '12 Monate',
      description: 'Berufseinstieg und erste Erfahrungssammlung'
    },
    {
      stufe: 'Stufe 2',
      duration: '24 Monate',
      description: 'Zunehmende Berufserfahrung und Routine'
    },
    {
      stufe: 'Stufe 3',
      duration: '36 Monate',
      description: 'Fundierte Berufserfahrung'
    },
    {
      stufe: 'Stufe 4',
      duration: '48 Monate',
      description: 'Langjährige Berufserfahrung'
    },
    {
      stufe: 'Stufe 5',
      duration: '60 Monate',
      description: 'Umfassende Berufserfahrung'
    },
    {
      stufe: 'Stufe 6',
      duration: 'Unbegrenzt',
      description: 'Höchststufe mit maximaler Berufserfahrung'
    }
  ]
};