import React from 'react';
import { Tarifvertrag } from '../types';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { WageTable } from './WageTable';

interface TarifvertragDetailProps {
  tarifvertrag: Tarifvertrag;
}

export function TarifvertragDetail({ tarifvertrag }: TarifvertragDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{tarifvertrag.title}</h2>
      
      {/* Meta Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span>Gültig: {new Date(tarifvertrag.validFrom).toLocaleDateString('de-DE')} - {new Date(tarifvertrag.validUntil).toLocaleDateString('de-DE')}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <span>Region: {tarifvertrag.region}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>Arbeitszeit: {tarifvertrag.workingHours}h/Woche</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Beschreibung</h3>
        <p className="text-gray-700">{tarifvertrag.description}</p>
      </div>

      {/* Wage Groups Table */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Entgelttabelle</h3>
        <WageTable 
          wages={tarifvertrag.wages} 
          workingHours={tarifvertrag.workingHours}
        />
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2">Urlaubsanspruch</h3>
          <p className="text-gray-700">{tarifvertrag.holidays} Tage pro Jahr</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Downloads</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            PDF herunterladen
          </button>
        </div>
      </div>
    </div>
  );
}