import React, { useState } from 'react';
import PersonnageListe from './components/list';
import Filter from './components/filter';
import './App.css';

export function App() {
  const [filtreStatus, setFiltreStatus] = useState('');
  const [search, setSearch] = useState('');

  const handleFilterChange = (status: string) => {
    setFiltreStatus(status);
  };

  const handleSearchChange = (searchValue: string) => {
    setSearch(searchValue);
  };

  return (
    <div className="app-container">
      <h1>Test technique Mobsuccess</h1>
      <Filter onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <PersonnageListe filtreStatus={filtreStatus} search={search} />
    </div>
  );
}
