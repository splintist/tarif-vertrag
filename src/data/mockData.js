export const industries = [
  {
    id: 'oeffentlicher-dienst',
    name: 'Öffentlicher Dienst',
    description: 'Tarifverträge für Beschäftigte im öffentlichen Dienst',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'metall-elektro',
    name: 'Metall- und Elektroindustrie',
    description: 'Tarifverträge für die Metall- und Elektroindustrie',
    imageUrl: 'https://images.unsplash.com/photo-1565785975811-67f19979ba42?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chemie',
    name: 'Chemische Industrie',
    description: 'Tarifverträge für die chemische und pharmazeutische Industrie',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'verkehr-logistik',
    name: 'Transport und Logistik',
    description: 'Tarifverträge für Transport, Bahn und Logistik',
    imageUrl: 'https://images.unsplash.com/photo-1530850374161-146f843ba788?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bau',
    name: 'Baugewerbe',
    description: 'Tarifverträge für das Bauhauptgewerbe und verwandte Bereiche',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dienstleistungen',
    name: 'Dienstleistungen',
    description: 'Tarifverträge für verschiedene Dienstleistungsbranchen',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'finanzwesen',
    name: 'Finanzwesen',
    description: 'Tarifverträge für Banken und Versicherungen',
    imageUrl: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'medien',
    name: 'Medien und Kommunikation',
    description: 'Tarifverträge für Medien, Druck und Telekommunikation',
    imageUrl: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&q=80&w=800'
  }
];

export const tarifvertraege = [
  {
    id: 'tvoed-2024',
    title: 'Tarifvertrag für den öffentlichen Dienst (TVöD)',
    industry: 'oeffentlicher-dienst',
    region: 'Bundesweit',
    validFrom: '2024-01-01',
    validUntil: '2025-12-31',
    wages: {
      groups: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
      years: [
        {
          label: 'Stufe 1',
          values: [2500, 2700, 2850, 3000, 3200, 3400, 3600, 3800, 4000]
        },
        {
          label: 'Stufe 2',
          values: [2600, 2800, 2950, 3100, 3300, 3500, 3700, 3900, 4100]
        },
        {
          label: 'Stufe 3',
          values: [2700, 2900, 3050, 3200, 3400, 3600, 3800, 4000, 4200]
        },
        {
          label: 'Stufe 4',
          values: [2800, 3000, 3150, 3300, 3500, 3700, 3900, 4100, 4300]
        },
        {
          label: 'Stufe 5',
          values: [2900, 3100, 3250, 3400, 3600, 3800, 4000, 4200, 4400]
        },
        {
          label: 'Stufe 6',
          values: [3000, 3200, 3350, 3500, 3700, 3900, 4100, 4300, 4500]
        }
      ]
    },
    workingHours: 39,
    holidays: 30,
    description: 'Regelt die Arbeitsbedingungen für Beschäftigte des Bundes und der Kommunen'
  },
  {
    id: 'tvoed-2022',
    title: 'Tarifvertrag für den öffentlichen Dienst (TVöD) 2022',
    industry: 'oeffentlicher-dienst',
    region: 'Bundesweit',
    validFrom: '2022-01-01',
    validUntil: '2023-12-31',
    isHistorical: true,
    wages: {
      groups: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
      years: [
        {
          label: 'Stufe 1',
          values: [2300, 2500, 2650, 2800, 3000, 3200, 3400, 3600, 3800]
        },
        {
          label: 'Stufe 2',
          values: [2400, 2600, 2750, 2900, 3100, 3300, 3500, 3700, 3900]
        },
        {
          label: 'Stufe 3',
          values: [2500, 2700, 2850, 3000, 3200, 3400, 3600, 3800, 4000]
        },
        {
          label: 'Stufe 4',
          values: [2600, 2800, 2950, 3100, 3300, 3500, 3700, 3900, 4100]
        },
        {
          label: 'Stufe 5',
          values: [2700, 2900, 3050, 3200, 3400, 3600, 3800, 4000, 4200]
        },
        {
          label: 'Stufe 6',
          values: [2800, 3000, 3150, 3300, 3500, 3700, 3900, 4100, 4300]
        }
      ]
    },
    workingHours: 39,
    holidays: 30,
    description: 'Historischer Tarifvertrag für Beschäftigte des Bundes und der Kommunen aus dem Jahr 2022'
  },
  {
    id: 'tv-l-2024',
    title: 'Tarifvertrag für den öffentlichen Dienst der Länder (TV-L)',
    industry: 'oeffentlicher-dienst',
    region: 'Bundesweit',
    validFrom: '2024-01-01',
    validUntil: '2025-12-31',
    wages: {
      groups: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
      years: [
        {
          label: 'Stufe 1',
          values: [2450, 2650, 2800, 2950, 3150, 3350, 3550, 3750, 3950]
        },
        {
          label: 'Stufe 2',
          values: [2550, 2750, 2900, 3050, 3250, 3450, 3650, 3850, 4050]
        },
        {
          label: 'Stufe 3',
          values: [2650, 2850, 3000, 3150, 3350, 3550, 3750, 3950, 4150]
        },
        {
          label: 'Stufe 4',
          values: [2750, 2950, 3100, 3250, 3450, 3650, 3850, 4050, 4250]
        },
        {
          label: 'Stufe 5',
          values: [2850, 3050, 3200, 3350, 3550, 3750, 3950, 4150, 4350]
        },
        {
          label: 'Stufe 6',
          values: [2950, 3150, 3300, 3450, 3650, 3850, 4050, 4250, 4450]
        }
      ]
    },
    workingHours: 40,
    holidays: 30,
    description: 'Gilt für Angestellte der Bundesländer'
  },
  {
    id: 'igm-2024',
    title: 'Manteltarifvertrag der Metall- und Elektroindustrie',
    industry: 'metall-elektro',
    region: 'Baden-Württemberg',
    validFrom: '2024-01-01',
    validUntil: '2025-12-31',
    wages: {
      groups: ['EG1', 'EG2', 'EG3', 'EG4', 'EG5', 'EG6', 'EG7', 'EG8', 'EG9'],
      years: [
        {
          label: 'Grundentgelt',
          values: [2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400]
        },
        {
          label: 'Nach 2 Jahren',
          values: [2900, 3100, 3300, 3500, 3700, 3900, 4100, 4300, 4500]
        },
        {
          label: 'Nach 4 Jahren',
          values: [3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600]
        },
        {
          label: 'Nach 6 Jahren',
          values: [3100, 3300, 3500, 3700, 3900, 4100, 4300, 4500, 4700]
        },
        {
          label: 'Nach 8 Jahren',
          values: [3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800]
        }
      ]
    },
    workingHours: 35,
    holidays: 30,
    description: 'Einer der größten Flächentarifverträge in Deutschland'
  }
];