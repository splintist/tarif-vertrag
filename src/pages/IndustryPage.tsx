import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { industries, tarifvertraege } from '../data';
import { TarifvertragDetail } from '../components/TarifvertragDetail';
import { ValidityToggle } from '../components/ValidityToggle';
import { ValidityFilter, Tarifvertrag } from '../types';

interface IndustryPageProps {
  searchTerm: string;
  filteredItems: typeof tarifvertraege;
}

export function IndustryPage({ searchTerm, filteredItems }: IndustryPageProps) {
  const { industryId } = useParams<{ industryId: string }>();
  const [validityFilter, setValidityFilter] = useState<ValidityFilter>('current');
  
  const industry = industries.find(i => i.id === industryId);

  const breadcrumbData = industry ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://tarif-vertrag.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": industry.name,
        "item": `https://tarif-vertrag.org/branche/${industry.id}`
      }
    ]
  } : null;

  const getValidityStatus = (tarifvertrag: Tarifvertrag): 'current' | 'future' | 'historical' | 'nachwirkend' => {
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

    if (now < validFrom) return 'future';
    if (now >= validFrom && now <= validUntil) return 'current';
    if (now > validUntil && isNewestAgreement()) return 'nachwirkend';
    return 'historical';
  };
  
  const displayedItems = (searchTerm ? filteredItems : tarifvertraege)
    .filter(t => t.industry === industryId)
    .filter(t => {
      const status = getValidityStatus(t);

      switch (validityFilter) {
        case 'current':
          return status === 'current' || status === 'nachwirkend';
        case 'historical':
          return status === 'historical';
        case 'future':
          return status === 'future';
        default:
          return true;
      }
    })
    .sort((a, b) => {
      const aStatus = getValidityStatus(a);
      const bStatus = getValidityStatus(b);

      // Define order of status types
      const statusOrder = {
        current: 0,
        nachwirkend: 1,
        future: 2,
        historical: 3
      };

      // First sort by status
      if (statusOrder[aStatus] !== statusOrder[bStatus]) {
        return statusOrder[aStatus] - statusOrder[bStatus];
      }

      // Within same status, sort by validFrom date (newest first)
      return new Date(b.validFrom).getTime() - new Date(a.validFrom).getTime();
    });

  if (!industry) {
    return (
      <>
        <Helmet>
          <title>Branche nicht gefunden - Deutsche Tarifverträge Datenbank</title>
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
        <title>{industry.name} Tarifverträge - Deutsche Tarifverträge Datenbank</title>
        <meta name="description" content={`Aktuelle Tarifverträge für die Branche ${industry.name}. ${industry.description}`} />
        <link rel="canonical" href={`https://tarif-vertrag.org/branche/${industry.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
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
                to={`/branche/${industry.id}/${tarifvertrag.id}`}
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
                      : validityFilter === 'future'
                        ? 'Keine zukünftigen Tarifverträge für diese Branche verfügbar.'
                        : 'Keine Tarifverträge für diese Branche verfügbar.'}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}