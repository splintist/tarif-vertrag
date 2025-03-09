/**
 * @typedef {Object} EntgeltgruppenInfo
 * @property {string} group
 * @property {string} description
 * @property {string[]} examples
 */

/**
 * @typedef {Object} EntgeltstufenInfo
 * @property {string} stufe
 * @property {string} duration
 * @property {string} description
 */

/**
 * @typedef {Object} Industry
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} imageUrl
 */

/**
 * @typedef {Object} WageYear
 * @property {string} label
 * @property {(number|null)[]} values
 */

/**
 * @typedef {Object} WageStructure
 * @property {string[]} groups
 * @property {WageYear[]} years
 */

/**
 * @typedef {Object} Tarifvertrag
 * @property {string} id
 * @property {string} title
 * @property {string} industry
 * @property {string} region
 * @property {string} validFrom
 * @property {string} validUntil
 * @property {WageStructure} wages
 * @property {number} workingHours
 * @property {number} holidays
 * @property {string} description
 * @property {{years: string, percentage: number}} [christmasBonus]
 * @property {EntgeltgruppenInfo[]} entgeltgruppenInfo
 * @property {EntgeltstufenInfo[]} entgeltstufenInfo
 * @property {boolean} [isHistorical]
 */

/** @type {Industry[]} */
export const industries = [
  {
    id: 'oeffentlicher-dienst',
    name: 'Öffentlicher Dienst',
    description: 'Tarifverträge für Beschäftigte im öffentlichen Dienst',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'oeffentliche-banken',
    name: 'Öffentliche Banken',
    description: 'Tarifverträge für Beschäftigte in öffentlichen Banken',
    imageUrl: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800'
  }
];

/** @type {Tarifvertrag[]} */
export const tarifvertraege = [
  {
    id: 'tvoed-bund-2024',
    title: 'TVöD Bund',
    industry: 'oeffentlicher-dienst',
    region: 'Bundesweit',
    validFrom: '2024-01-01',
    validUntil: '2024-12-31',
    wages: {
      groups: [
        'E 1', 'E 2', 'E 2Ü', 'E 3', 'E 4', 'E 5', 'E 6', 'E 7', 'E 8',
        'E 9', 'E 9a', 'E 9b', 'E 9c', 'E 10', 'E 11', 'E 12', 'E 13',
        'E 14', 'E 15', 'E 15Ü'
      ],
      years: [
        {
          label: 'Stufe 1',
          values: [
            null, 2582.16, 2601.60, 2762.69, 2802.62, 2928.99, 3042.04, 3095.23,
            3281.44, 3480.97, 3480.97, 3619.09, 3757.21, 3895.33, 4032.38, 4170.32,
            4628.76, 5003.84, 5504.00, 6670.43
          ]
        },
        {
          label: 'Stufe 2',
          values: [
            2355.52, 2784.28, 2835.82, 2968.02, 2993.55, 3117.67, 3236.55, 3331.58,
            3486.59, null, 3699.68, 3736.32, 4013.80, 4191.53, 4410.41, 4581.34,
            4985.95, 5329.75, 5863.92, 7379.87
          ]
        },
        {
          label: 'Stufe 3',
          values: [
            2388.86, 2834.67, 2921.62, 3017.99, 3153.75, 3245.11, 3372.94, 3472.38,
            3628.68, null, 3759.84, 4029.91, 4334.08, 4528.25, 4765.62, 5061.67,
            5392.57, 5755.37, 6265.40, 8051.94
          ]
        },
        {
          label: 'Stufe 4',
          values: [
            2430.55, 2906.58, 3036.03, 3132.21, 3253.48, 3380.06, 3507.92, 3614.47,
            3770.54, null, 3963.16, 4352.06, 4683.04, 4893.44, 5151.01, 5594.63,
            5834.04, 6227.68, 6813.49, 8500.01
          ]
        },
        {
          label: 'Stufe 5',
          values: [
            2469.42, 3064.63, 3114.63, 3217.92, 3353.20, 3505.47, 3640.49, 3748.49,
            3922.69, null, 4335.69, 4706.63, 5061.38, 5300.10, 5678.44, 6220.01,
            6353.53, 6754.16, 7377.29, 8604.56
          ]
        },
        {
          label: 'Stufe 6',
          values: [
            2569.47, 3229.97, 3173.31, 3296.43, 3411.60, 3570.28, 3708.02, 3820.45,
            3995.85, 5182.84, 4483.10, 5003.35, 5182.84, 5433.63, 5975.19, 6516.74,
            6635.44, 7132.13, 7748.20, null
          ]
        }
      ]
    },
    workingHours: 39,
    holidays: 30,
    description: 'Der Tarifvertrag für den öffentlichen Dienst (TVöD) regelt die Arbeitsbedingungen für Beschäftigte des Bundes. Er gilt für etwa 2,5 Millionen Beschäftigte und ist einer der wichtigsten Tarifverträge in Deutschland.',
    christmasBonus: {
      years: 'Nach 6 Monaten Beschäftigungszeit',
      percentage: 95
    },
    entgeltgruppenInfo: [
      {
        group: 'E1-E4',
        description: 'Einfache Tätigkeiten, die keine oder eine kurze Einarbeitung erfordern',
        examples: ['Reinigungskräfte', 'Küchenhilfen', 'Botendienste']
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
    ]
  },
  {
    id: 'oeffentliche-banken-2024',
    title: 'Tarifvertrag Öffentliche Banken (November 2024)',
    industry: 'oeffentliche-banken',
    region: 'Bundesweit',
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
    },
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
  }
];