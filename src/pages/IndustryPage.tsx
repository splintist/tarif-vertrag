import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { industries, tarifvertraege } from '../data/mockData';
import { TarifvertragDetail } from '../components/TarifvertragDetail';
import { ValidityToggle } from '../components/ValidityToggle';
import { ValidityFilter } from '../types';

interface IndustryPageProps {
  searchTerm: string;
  filteredItems: typeof tarifvertraege;
}

export function IndustryPage({ searchTerm, filteredItems }: IndustryPageProps) {
  const { industryId } = useParams<{ industryId: string }>();
  const [validityFilter, setValidityFilter] = useState<ValidityFilter>('current');
  
  const industry = industries.find(i => i.id === industryId);
  
  // Filter items by both industry and search term
  const displayedItems = (searchTerm ? filteredItems : tarifvertraege)
    .filter(t => t.industry === industryId)
    .filter(t => {
      switch (validityFilter) {
        case 'current':
          return !t.isHistorical;
        case 'historical':
          return t.isHistorical;
        default:
          return true;
      }
    });

  if (!industry) {
    return (
      <>
        <Helmet>
          <title>Branche nicht gefunden - Deutsche Tarifverträge Database</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Branche nicht gefunden
            </h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{industry.name} Tarifverträge - Deutsche Tarifverträge Database</title>
        <meta name="description" content={`Aktuelle Tarifverträge für die Branche ${industry.name}. ${industry.description}`} />
        <link rel="canonical" href={`https://tarifvertrag-db.de/branche/${industry.id}`} />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          aria-label="Zurück zur Übersicht"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zur Übersicht
        </Link>

        <div className="mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden mb-6">
            <img
              src={industry.imageUrl}
              alt={industry.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                {industry.name}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">{industry.description}</p>
        </div>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {searchTerm 
                ? `Suchergebnisse für "${searchTerm}" in ${industry.name}`
                : `Tarifverträge für ${industry.name}`}
            </h2>
            <ValidityToggle value={validityFilter} onChange={setValidityFilter} />
          </div>
          
          <div className="space-y-8">
            {displayedItems.map((tarifvertrag) => (
              <Link 
                key={tarifvertrag.id}
                to={`/tarifvertrag/${tarifvertrag.id}`}
                className="block"
              >
                <TarifvertragDetail tarifvertrag={tarifvertrag} />
              </Link>
            ))}
            {displayedItems.length === 0 && (
              <p className="text-gray-600 text-center py-8">
                {searchTerm 
                  ? `Keine Ergebnisse für "${searchTerm}" in dieser Branche gefunden.`
                  : validityFilter === 'current' 
                    ? 'Aktuell sind keine gültigen Tarifverträge für diese Branche verfügbar.'
                    : validityFilter === 'historical'
                      ? 'Keine historischen Tarifverträge für diese Branche verfügbar.'
                      : 'Keine Tarifverträge für diese Branche verfügbar.'}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}