import React from 'react';
import { Helmet } from 'react-helmet-async';

export function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum - tarif-vertrag.org</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-xl font-semibold mb-4">Inhalte gemäß § 5 DDG</h2>
          
          <h3 className="text-lg font-semibold mb-2">Einzelunternehmer</h3>
          <p className="mb-4">
            c/o IP-Management #4637<br />
            Ludwig-Erhard-Str. 18<br />
            20459 Hamburg
          </p>

          <h3 className="text-lg font-semibold mb-2">Kontaktdaten</h3>
          <p className="mb-4">
            E-Mail: tarif-vertrag@mailbox.org<br />
            Telefon: 015225606778
          </p>

          <h2 className="text-xl font-semibold mb-4">Haftungsausschluss</h2>
          <p className="mb-4">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. 
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können 
            wir jedoch keine Gewähr übernehmen.
          </p>
        </div>
      </main>
    </>
  );
}