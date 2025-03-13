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
  christmasBonus?: {
    years: string;
    percentage: number | { [key: string]: number };
    details?: string;
  };
  entgeltgruppenInfo: EntgeltgruppenInfo[];
  entgeltstufenInfo: EntgeltstufenInfo[];
  changes?: TarifvertragChange[];
}

export interface TarifvertragChange {
  type: 'increase' | 'decrease' | 'new' | 'removed' | 'modified';
  description: string;
  details?: string;
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

export interface EntgeltgruppenInfo {
  group: string;
  description: string;
  examples: string[];
}

export interface EntgeltstufenInfo {
  stufe: string;
  duration: string;
  description: string;
}

export type ValidityFilter = 'current' | 'historical' | 'future' | 'all';