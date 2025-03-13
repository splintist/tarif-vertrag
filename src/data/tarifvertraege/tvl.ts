import { Tarifvertrag } from '../../types';

const baseTVL = {
  industry: 'oeffentlicher-dienst',
  validFrom: '2025-02-01',
  validUntil: '2025-10-31',
  holidays: 30,
  description: 'Der Tarifvertrag der Länder (TV-L) regelt die Arbeitsbedingungen für Beschäftigte der Bundesländer (außer Hessen). Er gilt für Angestellte in Landesverwaltungen, Universitäten, Hochschulen und anderen Landeseinrichtungen.',
  christmasBonus: {
    years: 'Beschäftigte, die am 1. Dezember im Arbeitsverhältnis stehen',
    percentage: {
      'E1-E4': 87.43,
      'E5-E8': 88.14,
      'E9-E11': 74.35,
      'E12-E13': 46.47,
      'E14-E15': 32.53
    },
    details: 'Die Jahressonderzahlung berechnet sich aus dem monatlichen Entgelt.'
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
      group: 'E9-E12',
      description: 'Tätigkeiten, die ein Hochschulstudium (Bachelor/FH) oder vergleichbare Qualifikationen erfordern',
      examples: ['Sachbearbeiter', 'Ingenieure', 'IT-Fachkräfte']
    },
    {
      group: 'E13-E15',
      description: 'Hochqualifizierte Tätigkeiten mit Universitätsabschluss (Master) und besonderer Verantwortung',
      examples: ['Wissenschaftliche Mitarbeiter', 'Referatsleiter', 'Projektleiter']
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
  ],
  wages: {
    groups: [
      'E 1', 'E 2', 'E 2Ü', 'E 3', 'E 4', 'E 5', 'E 6', 'E 7', 'E 8',
      'E 9a', 'E 9b', 'E 10', 'E 11', 'E 12', 'E 13', 'E 13Ü',
      'E 14', 'E 15', 'E 15Ü'
    ],
    years: [
      {
        label: 'Stufe 1',
        values: [
          null, 2642.84, 2711.20, 2815.57, 2849.24, 2973.97, 3086.57, 3135.83, 3319.52,
          3520.10, 3520.10, 3928.42, 4064.54, 4193.48, 4629.74, null,
          5003.49, 5504.26, 6670.37
        ]
      },
      {
        label: 'Stufe 2',
        values: [
          2434.49, 2853.24, 2930.72, 3040.47, 3079.22, 3201.87, 3318.08, 3369.72, 3559.02,
          3765.38, 3765.38, 4182.83, 4323.79, 4474.13, 4967.01, 4967.01,
          5365.66, 5902.04, 7380.67
        ]
      },
      {
        label: 'Stufe 3',
        values: [
          2465.06, 2917.80, 3014.64, 3105.03, 3240.61, 3330.99, 3447.20, 3545.69, 3692.14,
          3818.66, 3925.17, 4474.13, 4619.10, 5068.49, 5220.71, 5220.71,
          5662.85, 6112.24, 8054.80
        ]
      },
      {
        label: 'Stufe 4',
        values: [
          2501.78, 2982.36, 3117.96, 3208.32, 3330.99, 3453.66, 3578.99, 3678.84, 3818.66,
          3925.17, 4366.72, 4771.29, 5068.49, 5590.37, 5713.58, 6112.24,
          6112.24, 6858.84, 8496.92
        ]
      },
      {
        label: 'Stufe 5',
        values: [
          2538.51, 3130.84, 3188.97, 3292.25, 3421.39, 3552.34, 3665.52, 3785.37, 3958.47,
          4366.72, 4742.32, 5336.70, 5720.84, 6264.45, 6394.91, 6800.81,
          6800.81, 7424.19, 8605.68
        ]
      },
      {
        label: 'Stufe 6',
        values: [
          2630.30, 3285.81, 3285.81, 3363.27, 3479.47, 3618.92, 3758.72, 3878.56, 4045.01,
          4490.04, 4878.28, 5490.47, 5886.14, 6446.05, 6580.44, 6998.52,
          6998.52, 7640.58, null
        ]
      }
    ]
  }
};

export const tvl_west: Tarifvertrag = {
  ...baseTVL,
  id: 'tvl-west-2025',
  title: 'TV-L West',
  region: 'West',
  workingHours: 38.5,
  isFuture: true
};

export const tvl_east: Tarifvertrag = {
  ...baseTVL,
  id: 'tvl-east-2025',
  title: 'TV-L Ost',
  region: 'Ost',
  workingHours: 40,
  isFuture: true
};

export const tvl = [tvl_west, tvl_east];