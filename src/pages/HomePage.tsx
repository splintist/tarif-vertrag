import React from 'react';
import { Link } from 'react-router-dom';
import { IndustryCard } from '../components/IndustryCard';
import { TarifvertragDetail } from '../components/TarifvertragDetail';
import { industries, tarifvertraege } from '../data';
import { Helmet } from 'react-helmet-async';

interface HomePageProps {
  searchTerm: string;
  filteredItems: typeof tarifvertraege;
}

export function HomePage({ searchTerm, filteredItems }: HomePageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://tarif-vertrag.org",
    "name": "Deutsche Tarifverträge Database",
    "description": "Aktuelle deutsche Tarifverträge für alle Branchen. Finden Sie Gehälter, Arbeitszeiten und Urlaubsansprüche in unserer umfassenden Datenbank.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tarif-vertrag.org/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        <title>Deutsche Tarifverträge Database - Aktuelle Tarifverträge für alle Branchen</title>
        <meta name="description" content="Finden Sie aktuelle Tarifverträge für alle Branchen. Einfach durchsuchbar und immer auf dem neuesten Stand." />
        <link rel="canonical" href="https://tarif-vertrag.org" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deutsche Tarifverträge auf einen Blick
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finden Sie aktuelle Tarifverträge für alle Branchen. Einfach durchsuchbar und immer auf dem neuesten Stand.
          </p>
        </div>

        {/* Search Results */}
        {searchTerm && (
          <section className="mb-12" aria-label="Suchergebnisse">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Suchergebnisse ({filteredItems.length})
            </h2>
            {filteredItems.map((tarifvertrag) => (
              <div key={tarifvertrag.id} className="mb-8">
                <Link 
                  to={`/tarifvertrag/${tarifvertrag.id}`}
                  aria-label={`Details für ${tarifvertrag.title}`}
                >
                  <TarifvertragDetail tarifvertrag={tarifvertrag} />
                </Link>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <p className="text-gray-600 text-center py-8">
                Keine Ergebnisse gefunden für "{searchTerm}"
              </p>
            )}
          </section>
        )}

        {/* Default View (when no search) */}
        {!searchTerm && (
          <section aria-label="Branchen">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Branchen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry.id}>
                  <IndustryCard industry={industry} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}