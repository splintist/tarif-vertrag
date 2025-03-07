export interface Tarifvertrag {
  id: string;
  title: string;
  industry: string;
  region: string;
  validFrom: string;
  validUntil: string;
  wages: WageStructure;
  workingHours: number;
  holidays: number;
  description: string;
  union?: string;
  specialBenefits?: string[];
  nightShiftBonus?: number;
  overtimeBonus?: number;
  christmasBonus?: number;
  vacationBonus?: number;
  isHistorical?: boolean;
}

export interface WageStructure {
  groups: string[];
  years: {
    label: string;
    values: (number | null)[];
  }[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export type ValidityFilter = 'current' | 'historical' | 'all';