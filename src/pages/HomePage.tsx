import React from 'react';
import { Link } from 'react-router-dom';
import { IndustryCard } from '../components/IndustryCard';
import { TarifvertragDetail } from '../components/TarifvertragDetail';
import { industries, tarifvertraege } from '../data';
import { Helmet } from 'react-helmet-async';
import { Tarifvertrag } from '../types';
import { AdUnit } from '../components/AdUnit';

interface HomePageProps {
  searchTerm: string;
  filteredItems: typeof tarifvertraege;
}

export function HomePage({ searchTerm, filteredItems }: HomePageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://tarif-vertrag.org",
    "name": "Deutsche Tarifverträge Datenbank",
    "description": "Aktuelle deutsche Tarifverträge für alle Branchen. Finden Sie Gehälter, Arbeitszeiten und Urlaubsansprüche in unserer umfassenden Datenbank.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tarif-vertrag.org/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://tarif-vertrag.org"
      }
    ]
  };

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

  const sortedItems = [...filteredItems].sort((a, b) => {
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

  return (
    <>
      <Helmet>
        <title>Deutsche Tarifverträge Datenbank - Aktuelle Tarifverträge für alle Branchen</title>
        <meta name="description" content="Finden Sie aktuelle Tarifverträge für alle Branchen. Einfach durchsuchbar und immer auf dem neuesten Stand." />
        <link rel="canonical" href="https://tarif-vertrag.org" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
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

        {/* Top Ad Unit */}
        <AdUnit slot="1234567890" />

        {/* Search Results */}
        {searchTerm && (
          <section className="mb-12" aria-label="Suchergebnisse">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Suchergebnisse ({sortedItems.length})
            </h2>
            {sortedItems.map((tarifvertrag, index) => (
              <React.Fragment key={tarifvertrag.id}>
                <Link 
                  to={`/branche/${tarifvertrag.industry}/${tarifvertrag.id}`}
                  aria-label={`Details für ${tarifvertrag.title}`}
                >
                  <TarifvertragDetail tarifvertrag={tarifvertrag} />
                </Link>
                {/* Insert ad after every 3 items */}
                {(index + 1) % 3 === 0 && <AdUnit slot="9876543210" />}
              </React.Fragment>
            ))}
            {sortedItems.length === 0 && (
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
            {/* Bottom Ad Unit */}
            <AdUnit slot="5432109876" />
          </section>
        )}
      </main>
    </>
  );
}