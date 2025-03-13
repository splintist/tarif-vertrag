import React, { useState } from 'react';
import { Tarifvertrag } from '../types';
import { Calendar, Clock, MapPin, Gift, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { WageTable } from './WageTable';
import { tarifvertraege } from '../data';

interface TarifvertragDetailProps {
  tarifvertrag: Tarifvertrag;
}

export function TarifvertragDetail({ tarifvertrag }: TarifvertragDetailProps) {
  const [showEntgeltgruppen, setShowEntgeltgruppen] = useState(false);
  const [showEntgeltstufen, setShowEntgeltstufen] = useState(false);
  const [showChanges, setShowChanges] = useState(false);

  const getValidityStatus = (): { status: 'current' | 'future' | 'historical' | 'nachwirkend'; label: string; className: string } => {
    const now = new Date();
    const validFrom = new Date(tarifvertrag.validFrom);
    const validUntil = new Date(tarifvertrag.validUntil);

    // Helper function to find if this is the newest agreement
    const isNewestAgreement = (): boolean => {
      const baseTitle = tarifvertrag.title.split(' 20')[0];
      const relatedAgreements = tarifvertraege
        .filter(t => t.title.startsWith(baseTitle))
        .filter(t => new Date(t.validFrom) <= now); // Only consider agreements that have started

      const maxValidFrom = Math.max(
        ...relatedAgreements.map(t => new Date(t.validFrom).getTime())
      );
      
      return new Date(tarifvertrag.validFrom).getTime() === maxValidFrom;
    };

    // Future agreement
    if (now < validFrom) {
      return {
        status: 'future',
        label: 'Zukünftiger Vertrag',
        className: 'bg-green-100 text-green-800'
      };
    }
    
    // Currently valid
    if (now >= validFrom && now <= validUntil) {
      return {
        status: 'current',
        label: 'Aktuell gültig',
        className: 'bg-blue-100 text-blue-800'
      };
    }
    
    // Check if it's the newest expired agreement (nachwirkend)
    if (now > validUntil && isNewestAgreement()) {
      return {
        status: 'nachwirkend',
        label: 'Nachwirkend gültig',
        className: 'bg-yellow-100 text-yellow-800'
      };
    }
    
    // Historical
    return {
      status: 'historical',
      label: 'Historischer Vertrag',
      className: 'bg-gray-100 text-gray-800'
    };
  };

  const formatChristmasBonus = () => {
    if (!tarifvertrag.christmasBonus) return null;

    if (typeof tarifvertrag.christmasBonus.percentage === 'number') {
      return `${tarifvertrag.christmasBonus.percentage}%`;
    }

    return Object.entries(tarifvertrag.christmasBonus.percentage)
      .map(([group, percentage]) => `${group}: ${percentage}%`)
      .join(', ');
  };

  const validityStatus = getValidityStatus();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{tarifvertrag.title}</h2>
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${validityStatus.className}`}>
          {validityStatus.label}
        </span>
      </div>
      
      {/* Meta Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
          <span>Arbeitszeit: {tarifvertrag.workingHours} Stunden/Woche</span>
        </div>
        {tarifvertrag.christmasBonus && (
          <div className="flex items-center text-gray-600">
            <Gift className="h-5 w-5 mr-2" />
            <div>
              <span>Jahressonderzahlung: {formatChristmasBonus()}</span>
              {tarifvertrag.christmasBonus.details && (
                <p className="text-sm text-gray-500 mt-1">{tarifvertrag.christmasBonus.details}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Changes Section for Future Contracts */}
      {validityStatus.status === 'future' && tarifvertrag.changes && (
        <div className="mb-8">
          <button
            onClick={() => setShowChanges(!showChanges)}
            className="w-full flex items-center justify-between bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-lg font-semibold text-green-800">Wichtige Änderungen</span>
            </div>
            {showChanges ? (
              <ChevronUp className="h-5 w-5 text-green-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-green-600" />
            )}
          </button>
          {showChanges && (
            <div className="mt-4 space-y-4">
              {tarifvertrag.changes.map((change, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      change.type === 'increase' ? 'bg-green-100 text-green-800' :
                      change.type === 'decrease' ? 'bg-red-100 text-red-800' :
                      change.type === 'new' ? 'bg-blue-100 text-blue-800' :
                      change.type === 'removed' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {change.type === 'increase' ? 'Erhöhung' :
                       change.type === 'decrease' ? 'Reduzierung' :
                       change.type === 'new' ? 'Neu' :
                       change.type === 'removed' ? 'Entfernt' :
                       'Änderung'}
                    </span>
                  </div>
                  <p className="text-green-900">{change.description}</p>
                  {change.details && (
                    <p className="text-green-700 text-sm mt-2">{change.details}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

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
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-2">Weitere Informationen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">
              <strong>Urlaubsanspruch:</strong> {tarifvertrag.holidays} Tage pro Jahr
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Wochenarbeitszeit:</strong> {tarifvertrag.workingHours} Stunden
            </p>
          </div>
        </div>
      </div>

      {/* Collapsible Entgeltgruppen Information */}
      <div className="mb-4">
        <button
          onClick={() => setShowEntgeltgruppen(!showEntgeltgruppen)}
          className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="text-lg font-semibold">Erläuterungen zu Entgeltgruppen</span>
          {showEntgeltgruppen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showEntgeltgruppen && (
          <div className="mt-4 grid gap-4">
            {tarifvertrag.entgeltgruppenInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Entgeltgruppen {info.group}</h4>
                <p className="text-gray-700 mb-2">{info.description}</p>
                <div className="text-sm text-gray-600">
                  <strong>Beispiele:</strong> {info.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Collapsible Entgeltstufen Information */}
      <div>
        <button
          onClick={() => setShowEntgeltstufen(!showEntgeltstufen)}
          className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="text-lg font-semibold">Erläuterungen zu Entgeltstufen</span>
          {showEntgeltstufen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showEntgeltstufen && (
          <div className="mt-4 grid gap-4">
            {tarifvertrag.entgeltstufenInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{info.stufe}</h4>
                <p className="text-gray-700 mb-2">{info.description}</p>
                <div className="text-sm text-gray-600">
                  <strong>Dauer:</strong> {info.duration}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}