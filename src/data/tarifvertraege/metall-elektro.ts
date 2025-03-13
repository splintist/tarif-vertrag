import { Tarifvertrag } from '../../types';

const baseMetallElektro = {
  industry: 'metall-elektro',
  validFrom: '2024-05-01',
  validUntil: '2024-12-31',
  holidays: 30,
  description: 'Der Tarifvertrag für die Metall- und Elektroindustrie regelt die Arbeitsbedingungen für Beschäftigte in der Metall- und Elektroindustrie. Die durchschnittliche regelmäßige wöchentliche Arbeitszeit beträgt in den alten Bundesländern 35 Stunden und in den neuen Bundesländern 38 Stunden. Die tatsächliche Arbeitszeit kann je nach Betrieb und Vereinbarung davon abweichen.',
  entgeltgruppenInfo: [
    {
      group: 'EG 1-5',
      description: 'Einfache bis mittelschwere Tätigkeiten in der Produktion und Verwaltung',
      examples: ['Produktionshelfer', 'Reinigungskräfte', 'einfache Bürotätigkeiten']
    },
    {
      group: 'EG 6-9',
      description: 'Qualifizierte Facharbeit und mittlere Verwaltungstätigkeiten',
      examples: ['Facharbeiter', 'Mechaniker', 'Sachbearbeiter']
    },
    {
      group: 'EG 10-12',
      description: 'Hochqualifizierte Tätigkeiten und erste Führungsaufgaben',
      examples: ['Meister', 'Techniker', 'Teamleiter']
    },
    {
      group: 'EG 13-17',
      description: 'Leitende Tätigkeiten und Führungspositionen',
      examples: ['Abteilungsleiter', 'Ingenieure', 'Projektleiter']
    }
  ],
  entgeltstufenInfo: [
    {
      stufe: 'Grundstufe/Eingangsstufe',
      duration: 'Einstieg',
      description: 'Einstiegsstufe für neue Mitarbeiter'
    },
    {
      stufe: 'Hauptstufe/Stufe A',
      duration: 'Nach Einarbeitung',
      description: 'Nach erfolgreicher Einarbeitung'
    },
    {
      stufe: 'Zusatzstufe 1/Stufe B',
      duration: 'Mit Erfahrung',
      description: 'Mit relevanter Berufserfahrung'
    },
    {
      stufe: 'Zusatzstufe 2/Stufe C',
      duration: 'Langjährige Erfahrung',
      description: 'Mit langjähriger Berufserfahrung'
    }
  ]
};

export const metall_elektro_baden_wuerttemberg: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-bw-2024',
  title: 'Metall- und Elektroindustrie Baden-Württemberg',
  region: 'Baden-Württemberg',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12', 'EG 13', 'EG 14', 'EG 15', 'EG 16', 'EG 17'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2606.00, 2676.50, 2817.00, 2958.00, 3134.00, 3310.00, 3521.50, 3768.00, 4014.50, 4278.50, 4560.50, 4877.50, 5194.00, 5511.00, 5828.00, 6215.50, 6567.50]
      }
    ]
  }
};

export const metall_elektro_bayern: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-by-2024',
  title: 'Metall- und Elektroindustrie Bayern',
  region: 'Bayern',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12'],
    years: [
      {
        label: 'Stufe A',
        values: [2607.00, 2658.00, 2791.00, 2964.00, 3325.00, 3531.00, 3808.00, 4130.00, 4524.00, 5003.00, 5532.00, 6065.00]
      },
      {
        label: 'Stufe B',
        values: [null, 2702.00, 2877.00, 3050.00, 3407.00, 3654.00, 3963.00, 4303.00, 4746.00, 5257.00, 5804.00, 6324.00]
      },
      {
        label: 'Stufe C',
        values: [null, null, null, 3244.00, null, null, null, null, null, null, null, null]
      }
    ]
  }
};

export const metall_elektro_berlin: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-be-2024',
  title: 'Metall- und Elektroindustrie Berlin/Brandenburg',
  region: 'Berlin/Brandenburg',
  workingHours: 38,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12', 'EG 13'],
    years: [
      {
        label: 'Eingangsstufe',
        values: [null, null, 2710.00, 2904.00, 3222.00, 3451.00, 3618.00, 3785.00, 3974.00, 4353.00, 4954.00, 5644.00, 6323.00]
      },
      {
        label: 'Hauptstufe',
        values: [2605.00, 2652.00, 2739.00, 2986.00, 3340.00, 3507.00, 3674.00, 3841.00, 4041.00, 4509.00, 5177.00, 5878.00, 6546.00]
      },
      {
        label: '1. Zusatzstufe',
        values: [null, null, 2821.00, 3104.00, 3396.00, 3563.00, 3730.00, 3908.00, 4197.00, 4732.00, 5411.00, 6101.00, null]
      },
      {
        label: '2. Zusatzstufe',
        values: [null, null, 2904.00, 3222.00, 3451.00, 3618.00, 3785.00, 3974.00, 4353.00, null, null, null, null]
      }
    ]
  }
};

export const metall_elektro_hamburg: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-hh-2024',
  title: 'Metall- und Elektroindustrie Hamburg',
  region: 'Hamburg',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundstufe',
        values: [null, 2766.00, 2853.00, 3007.00, 3311.00, 3574.00, 3837.00, 4521.00, 5234.00, 5970.00, 6741.00]
      },
      {
        label: 'Hauptstufe',
        values: [null, 2867.00, 2956.00, 3094.00, 3397.00, 3659.00, 3954.00, 4636.00, 5386.00, 6209.00, 6977.00]
      },
      {
        label: 'Zusatzstufe 1',
        values: [null, null, 3059.00, 3179.00, 3483.00, 3790.00, 4082.00, 4769.00, 5516.00, 6380.00, null]
      },
      {
        label: 'Zusatzstufe 2',
        values: [null, null, null, 3266.00, 3566.00, 3874.00, 4198.00, 4887.00, 5670.00, null, null]
      },
      {
        label: 'Zusatzstufe 3',
        values: [null, null, null, null, 3654.00, 3959.00, 4318.00, 5002.00, null, null, null]
      }
    ]
  }
};

export const metall_elektro_hessen: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-he-2024',
  title: 'Metall- und Elektroindustrie Hessen',
  region: 'Hessen',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12', 'EG 13'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4283.00, 4845.00, 5314.00, 5783.00, null, null]
      }
    ]
  }
};

export const metall_elektro_niedersachsen: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-ni-2024',
  title: 'Metall- und Elektroindustrie Niedersachsen',
  region: 'Niedersachsen',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12', 'EG 13'],
    years: [
      {
        label: 'A',
        values: [null, 2569.00, 2690.00, 2828.00, 3191.00, 3477.00, 3706.00, 3968.00, 4177.00, 4404.00, 4578.00, 5223.00, 5892.00]
      },
      {
        label: 'B',
        values: [null, 2649.00, 2734.00, 2865.00, 3394.00, 3524.00, 3789.00, 4097.00, 4256.00, 4467.00, 4793.00, 5436.00, 6355.00]
      },
      {
        label: 'C',
        values: [null, 2670.00, 2796.00, 3011.00, 3437.00, 3600.00, 3879.00, 4153.00, 4322.00, 4517.00, 5011.00, 5652.00, 6544.00]
      }
    ]
  }
};

export const metall_elektro_nrw: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-nrw-2024',
  title: 'Metall- und Elektroindustrie Nordrhein-Westfalen',
  region: 'Nordrhein-Westfalen',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12', 'EG 13', 'EG 14'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2652.00, 2684.50, 2715.00, 2757.50, 2815.00, 2888.00, 2978.50, 3133.50, 3386.50, 3722.00, 4173.50, null, null, null]
      },
      {
        label: 'bis 12. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null, 5459.50]
      },
      {
        label: 'nach 12. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null, 5801.00]
      },
      {
        label: 'bis 18. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, 4806.00, null]
      },
      {
        label: 'nach 18. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, 5088.50, null]
      },
      {
        label: 'nach 24. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, null, null, 6142.50]
      },
      {
        label: 'bis 36. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, 4301.00, null, null]
      },
      {
        label: 'nach 36. Monat',
        values: [null, null, null, null, null, null, null, null, null, null, null, 4776.50, 5653.50, 6826.00]
      }
    ]
  }
};

export const metall_elektro_osnabrueck: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-os-2024',
  title: 'Metall- und Elektroindustrie Osnabrück-Emsland',
  region: 'Osnabrück-Emsland',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12'],
    years: [
      {
        label: 'Eingangsstufe',
        values: [null, 2690.00, 2815.00, 3069.00, 3496.00, 3794.00, 3964.00, 4180.00, 4452.00, 4722.00, 5054.00, 5648.00]
      },
      {
        label: 'Hauptstufe',
        values: [2649.00, 2734.00, 2979.00, 3394.00, 3682.00, 3846.00, 4058.00, 4322.00, 4581.00, 4910.00, 5480.00, 6372.00]
      },
      {
        label: 'Zusatzstufe 1',
        values: [2690.00, 2774.00, 3009.00, 3431.00, 3719.00, 3886.00, 4101.00, 4365.00, 4627.00, 4957.00, 5537.00, null]
      },
      {
        label: 'Zusatzstufe 2',
        values: [null, 2815.00, 3042.00, 3466.00, 3755.00, 3925.00, 4141.00, 4409.00, 4673.00, 5009.00, 5593.00, null]
      },
      {
        label: 'Zusatzstufe 3',
        values: [null, null, 3069.00, 3496.00, 3794.00, 3964.00, 4180.00, 4452.00, 4722.00, 5054.00, 5648.00, null]
      }
    ]
  }
};

export const metall_elektro_pfalz: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-pf-2024',
  title: 'Metall- und Elektroindustrie Pfalz',
  region: 'Pfalz',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4220.00, 4689.00, 5314.00, 5783.00]
      }
    ]
  }
};

export const metall_elektro_rheinland_rheinhessen: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-rr-2024',
  title: 'Metall- und Elektroindustrie Rheinland-Rheinhessen',
  region: 'Rheinland-Rheinhessen',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4283.00, 4845.00, 5314.00, 5783.00]
      }
    ]
  }
};

export const metall_elektro_saarland: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-sl-2024',
  title: 'Metall- und Elektroindustrie Saarland',
  region: 'Saarland',
  workingHours: 35,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundentgelt',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4283.00, 4845.00, 5314.00, 5783.00]
      }
    ]
  }
};

export const metall_elektro_sachsen: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-sn-2024',
  title: 'Metall- und Elektroindustrie Sachsen',
  region: 'Sachsen',
  workingHours: 38,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12'],
    years: [
      {
        label: 'Grundstufe',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4283.00, 4689.00, 5002.00, 5471.00, 5783.00]
      },
      {
        label: 'Zusatzstufe',
        values: [2657.00, 2720.00, 2845.00, 3032.00, 3282.00, 3595.00, 3970.00, 4439.00, 4845.00, 5158.00, 5627.00, 6096.00]
      }
    ]
  }
};

export const metall_elektro_sachsen_anhalt: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-st-2024',
  title: 'Metall- und Elektroindustrie Sachsen-Anhalt',
  region: 'Sachsen-Anhalt',
  workingHours: 38,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundstufe',
        values: [2649.00, 2736.00, 2836.00, 2990.00, 3216.00, 3477.00, 3935.00, 4252.00, 4893.00, 5552.00, 6250.00]
      },
      {
        label: 'Zusatzstufe',
        values: [2703.00, 2772.00, 2895.00, 3091.00, 3342.00, 3716.00, 4110.00, 4472.00, 5119.00, 5771.00, 6490.00]
      }
    ]
  }
};

export const metall_elektro_schleswig_holstein: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-sh-2024',
  title: 'Metall- und Elektroindustrie Schleswig-Holstein',
  region: 'Schleswig-Holstein',
  workingHours: 35,
  wages: {
    groups: ['EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11'],
    years: [
      {
        label: 'Grundstufe',
        values: [2766.00, 2853.00, 3007.00, 3311.00, 3548.00, 3781.00, 4406.00, 5059.00, 5739.00, 6451.00]
      },
      {
        label: 'Hauptstufe',
        values: [2867.00, 2956.00, 3094.00, 3397.00, 3629.00, 3895.00, 4517.00, 5214.00, 5975.00, 6717.00]
      },
      {
        label: 'Zusatzstufe 1',
        values: [null, 3059.00, 3179.00, 3483.00, 3759.00, 4025.00, 4651.00, 5345.00, 6145.00, null]
      },
      {
        label: 'Zusatzstufe 2',
        values: [null, null, 3266.00, 3566.00, 3846.00, 4141.00, 4765.00, 5493.00, null, null]
      },
      {
        label: 'Zusatzstufe 3',
        values: [null, null, null, 3654.00, 3932.00, 4258.00, 4886.00, null, null, null]
      }
    ]
  }
};

export const metall_elektro_thueringen: Tarifvertrag = {
  ...baseMetallElektro,
  id: 'metall-elektro-th-2024',
  title: 'Metall- und Elektroindustrie Thüringen',
  region: 'Thüringen',
  workingHours: 38,
  wages: {
    groups: ['EG 1', 'EG 2', 'EG 3', 'EG 4', 'EG 5', 'EG 6', 'EG 7', 'EG 8', 'EG 9', 'EG 10', 'EG 11', 'EG 12'],
    years: [
      {
        label: 'Grundstufe',
        values: [2626.00, 2688.00, 2782.00, 2938.00, 3126.00, 3439.00, 3814.00, 4283.00, 4689.00, 5002.00, 5471.00, 5783.00]
      },
      {
        label: 'Zusatzstufe',
        values: [2657.00, 2720.00, 2845.00, 3032.00, 3282.00, 3595.00, 3970.00, 4439.00, 4845.00, 5158.00, 5627.00, 6096.00]
      }
    ]
  }
};

export const metall_elektro = [
  metall_elektro_baden_wuerttemberg,
  metall_elektro_bayern,
  metall_elektro_berlin,
  metall_elektro_hamburg,
  metall_elektro_hessen,
  metall_elektro_niedersachsen,
  metall_elektro_nrw,
  metall_elektro_osnabrueck,
  metall_elektro_pfalz,
  metall_elektro_rheinland_rheinhessen,
  metall_elektro_saarland,
  metall_elektro_sachsen,
  metall_elektro_sachsen_anhalt,
  metall_elektro_schleswig_holstein,
  metall_elektro_thueringen
];