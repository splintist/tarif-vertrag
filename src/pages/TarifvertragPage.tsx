import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TarifvertragDetail } from '../components/TarifvertragDetail';
import { tarifvertraege, industries } from '../data';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ValidityToggle } from '../components/ValidityToggle';
import { ValidityFilter } from '../types';
import { AdUnit } from '../components/AdUnit';

interface TarifvertragPageProps {
  searchTerm: string;
  filteredItems: typeof tarifvertraege;
}

export function TarifvertragPage({ searchTerm, filteredItems }: TarifvertragPageProps) {
  const { id, industryId } = useParams<{ id: string; industryId: string }>();
  const [validityFilter, setValidityFilter] = useState<ValidityFilter>('current');
  const navigate = useNavigate();
  
  const currentTarifvertrag = tarifvertraege.find(t => t.id === id && t.industry === industryId);
  const industry = currentTarifvertrag ? industries.find(i => i.id === currentTarifvertrag.industry) : null;

  const breadcrumbData = currentTarifvertrag && industry ? {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": currentTarifvertrag.title,
        "item": `https://tarif-vertrag.org/branche/${industry.id}/${currentTarifvertrag.id}`
      }
    ]
  } : null;

  const structuredData = currentTarifvertrag ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": currentTarifvertrag.title,
    "description": currentTarifvertrag.description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "validFrom": currentTarifvertrag.validFrom,
      "validThrough": currentTarifvertrag.validUntil,
      "price": "0",
      "priceCurrency": "EUR"
    }
  } : null;
  
  if (searchTerm) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 mt-4">
            Suchergebnisse für "{searchTerm}"
          </h1>
        </div>

        <AdUnit slot="1357924680" />

        <div className="space-y-8">
          {filteredItems.map((tarifvertrag, index) => (
            <React.Fragment key={tarifvertrag.id}>
              <Link 
                to={`/branche/${tarifvertrag.industry}/${tarifvertrag.id}`}
                className="block"
              >
                <TarifvertragDetail tarifvertrag={tarifvertrag} />
              </Link>
              {/* Insert ad after every 3 items */}
              {(index + 1) % 3 === 0 && <AdUnit slot="2468013579" />}
            </React.Fragment>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-gray-600 text-center py-8">
              Keine Ergebnisse für "{searchTerm}" gefunden.
            </p>
          )}
        </div>
      </main>
    );
  }

  if (!currentTarifvertrag || !industry) {
    return (
      <>
        <Helmet>
          <title>Tarifvertrag nicht gefunden - Deutsche Tarifverträge Datenbank</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Tarifvertrag nicht gefunden
            </h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </>
    );
  }

  const allVersions = tarifvertraege.filter(t => 
    t.title.startsWith(currentTarifvertrag.title.split(' 20')[0]) && t.industry === industryId
  );

  const displayedVersions = allVersions.filter(t => {
    const now = new Date();
    const validFrom = new Date(t.validFrom);
    const validUntil = new Date(t.validUntil);

    switch (validityFilter) {
      case 'current':
        return !t.isHistorical && !t.isFuture && t.id === currentTarifvertrag.id;
      case 'historical':
        return t.isHistorical || (now > validUntil && !t.isFuture);
      case 'future':
        return t.isFuture || now < validFrom;
      default:
        return true;
    }
  });

  return (
    <>
      <Helmet>
        <title>{currentTarifvertrag.title} - Deutsche Tarifverträge Datenbank</title>
        <meta 
          name="description" 
          content={`${currentTarifvertrag.title} - Gehalt, Arbeitszeit und Urlaubsanspruch. Gültig von ${new Date(currentTarifvertrag.validFrom).toLocaleDateString('de-DE')} bis ${new Date(currentTarifvertrag.validUntil).toLocaleDateString('de-DE')}`} 
        />
        <link rel="canonical" href={`https://tarif-vertrag.org/branche/${industry.id}/${currentTarifvertrag.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to={`/branche/${currentTarifvertrag.industry}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
            aria-label="Zurück zur Branchenübersicht"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Branchenübersicht
          </Link>

          {allVersions.length > 1 && (
            <ValidityToggle value={validityFilter} onChange={setValidityFilter} />
          )}
        </div>

        {/* Top Ad Unit */}
        <AdUnit slot="3692581470" />

        <div className="space-y-12">
          {displayedVersions.length > 0 ? (
            displayedVersions.map((version, index) => (
              <React.Fragment key={version.id}>
                <article>
                  <TarifvertragDetail tarifvertrag={version} />
                </article>
                {/* Insert ad after every version except the last one */}
                {index < displayedVersions.length - 1 && <AdUnit slot="4803692581" />}
              </React.Fragment>
            ))
          ) : (
            validityFilter === 'current' && (
              <article>
                <TarifvertragDetail tarifvertrag={currentTarifvertrag} />
              </article>
            )
          )}

          {displayedVersions.length === 0 && validityFilter !== 'current' && (
            <p className="text-gray-600 text-center py-8">
              {validityFilter === 'historical' 
                ? 'Keine historischen Versionen verfügbar.'
                : validityFilter === 'future'
                  ? 'Keine zukünftigen Versionen verfügbar.'
                  : 'Keine Versionen verfügbar.'}
            </p>
          )}
        </div>

        {/* Bottom Ad Unit */}
        <AdUnit slot="5914803692" />
      </main>
    </>
  );
}