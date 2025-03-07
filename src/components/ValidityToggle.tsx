import React from 'react';
import { ValidityFilter } from '../types';

interface ValidityToggleProps {
  value: ValidityFilter;
  onChange: (value: ValidityFilter) => void;
}

export function ValidityToggle({ value, onChange }: ValidityToggleProps) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
      <button
        onClick={() => onChange('current')}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          value === 'current'
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Aktuelle Verträge
      </button>
      <button
        onClick={() => onChange('historical')}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          value === 'historical'
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Historische Verträge
      </button>
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          value === 'all'
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Alle Verträge
      </button>
    </div>
  );
}