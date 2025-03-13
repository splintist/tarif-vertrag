import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HelpCircle, Mail, AlertCircle, Database, RefreshCw, Users } from 'lucide-react';

export function FAQPage() {
  const faqs = [
    {
      icon: <Database className="h-6 w-6" />,
      question: 'Wie aktuell sind die Tarifverträge?',
      answer: 'Diese Datenbank wird von einer Person in ihrer Freizeit gepflegt und aktualisiert. Wir bemühen uns, alle Änderungen zeitnah einzupflegen, können aber keine Gewähr für die Vollständigkeit übernehmen.'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      question: 'Wie oft werden die Daten aktualisiert?',
      answer: 'Updates erfolgen in der Regel innerhalb weniger Tage nach Bekanntgabe neuer Tarifabschlüsse. Bei Verzögerungen oder fehlenden Informationen können Sie uns gerne kontaktieren.'
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      question: 'Was tun, wenn ich einen Fehler finde?',
      answer: 'Wenn Sie einen Fehler entdecken oder Verbesserungsvorschläge haben, nutzen Sie bitte unser Kontaktformular. Wir sind dankbar für jeden Hinweis.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      question: 'Wer betreibt diese Seite?',
      answer: 'Diese Seite wird von einer Privatperson betrieben, die sich für Arbeitsrecht und Tarifverträge interessiert. Es handelt sich um ein nicht-kommerzielles Projekt.'
    }
  ];

  const breadcrumbData = {
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
        "name": "FAQ",
        "item": "https://tarif-vertrag.org/faq"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Deutsche Tarifverträge Datenbank</title>
        <meta name="description" content="Häufig gestellte Fragen zur Deutschen Tarifverträge Datenbank. Erfahren Sie mehr über unsere Datenbank und wie Sie dazu beitragen können." />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Häufig gestellte Fragen</h1>
          <p className="mt-4 text-lg text-gray-600">
            Erfahren Sie mehr über unsere Datenbank und wie Sie dazu beitragen können
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600">
                  {faq.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <Mail className="h-8 w-8 mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Haben Sie weitere Fragen?
          </h2>
          <p className="text-gray-600 mb-6">
            Wir sind immer daran interessiert, unsere Datenbank zu verbessern und 
            aktuelle Informationen bereitzustellen. Kontaktieren Sie uns gerne!
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Zum Kontaktformular
          </Link>
        </div>
      </main>
    </>
  );
}