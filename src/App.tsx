import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TarifvertragPage } from './pages/TarifvertragPage';
import { IndustryPage } from './pages/IndustryPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { useSearch } from './hooks/useSearch';
import { tarifvertraege } from './data';

function App() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(tarifvertraege);

  return (
    <HelmetProvider>
      <Router basename="/tarif-vertrag">
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          <div className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={<HomePage searchTerm={searchTerm} filteredItems={filteredItems} />} 
              />
              <Route 
                path="/branche/:industryId" 
                element={<IndustryPage searchTerm={searchTerm} filteredItems={filteredItems} />} 
              />
              <Route 
                path="/tarifvertrag/:id" 
                element={<TarifvertragPage searchTerm={searchTerm} filteredItems={filteredItems} />} 
              />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
            </Routes>
          </div>

          <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Über uns</h3>
                  <p className="text-gray-300">
                    Die umfassendste Datenbank für deutsche Tarifverträge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                  <ul className="space-y-2">
                    <li><Link to="/impressum" className="text-gray-300 hover:text-white">Impressum</Link></li>
                    <li><Link to="/datenschutz" className="text-gray-300 hover:text-white">Datenschutz</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                  <Link 
                    to="/kontakt" 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Zum Kontaktformular →
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;