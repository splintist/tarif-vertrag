import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function InProgressBanner() {
  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
          <p className="text-yellow-700 text-sm font-medium">
            Diese Website befindet sich noch im Aufbau. Einige Funktionen sind möglicherweise noch nicht verfügbar.
          </p>
        </div>
      </div>
    </div>
  );
}