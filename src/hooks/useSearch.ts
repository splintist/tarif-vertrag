import { useState, useMemo } from 'react';
import { Tarifvertrag } from '../types';

export function useSearch(items: Tarifvertrag[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    const searchLower = searchTerm.toLowerCase();
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.industry.toLowerCase().includes(searchLower) ||
        item.region.toLowerCase().includes(searchLower)
      );
    });
  }, [items, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
}