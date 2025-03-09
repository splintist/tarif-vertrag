import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  const handleLogoClick = () => {
    onSearchChange('');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
              onClick={handleLogoClick}
            >
              tarif-vertrag.org
            </Link>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/faq" className="text-gray-700 hover:text-gray-900">FAQ</Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-gray-900">Kontakt</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}