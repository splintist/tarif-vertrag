import React from 'react';
import { Link } from 'react-router-dom';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Link 
      to={`/branche/${industry.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={industry.imageUrl}
          alt={`${industry.name} Branche`}
          className="w-full h-48 object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
        <p className="mt-2 text-gray-600">{industry.description}</p>
      </div>
    </Link>
  );
}