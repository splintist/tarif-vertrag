import React, { useState } from 'react';
import { WageStructure } from '../types';

type PayPeriod = 'monthly' | 'yearly' | 'hourly';

interface WageTableProps {
  wages: WageStructure;
  workingHours: number;
  className?: string;
}

export function WageTable({ wages, workingHours, className = '' }: WageTableProps) {
  const [payPeriod, setPayPeriod] = useState<PayPeriod>('monthly');

  const calculateWage = (value: number | null): number | null => {
    if (value === null) return null;
    
    switch (payPeriod) {
      case 'yearly':
        return value * 12;
      case 'hourly':
        // Assuming 4.33 weeks per month
        const monthlyHours = workingHours * 4.33;
        return value / monthlyHours;
      default:
        return value;
    }
  };

  const formatWage = (value: number | null): string => {
    if (value === null) return '—';
    
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: payPeriod === 'hourly' ? 2 : 0,
      maximumFractionDigits: payPeriod === 'hourly' ? 2 : 0,
    });
    
    return formatter.format(value);
  };

  return (
    <div className={className}>
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            onClick={() => setPayPeriod('monthly')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              payPeriod === 'monthly' 
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Monatlich
          </button>
          <button
            onClick={() => setPayPeriod('yearly')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              payPeriod === 'yearly' 
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Jährlich
          </button>
          <button
            onClick={() => setPayPeriod('hourly')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              payPeriod === 'hourly' 
                ? 'bg-blue-100 text-blue-800' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Stündlich
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Berufs-<br />jahr
              </th>
              {wages.groups.map((group) => (
                <th key={group} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {group}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {wages.years.map((year, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {year.label}
                </td>
                {year.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {formatWage(calculateWage(value))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}