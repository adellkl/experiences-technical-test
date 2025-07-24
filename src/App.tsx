import React, { useState } from 'react';
import PersonnageListe from './components/list';
import Filter from './components/filter';
import './App.css';

export function App() {
  const [filtreStatus, setFiltreStatus] = useState('');

  const handleFilterChange = (status: string) => {
    setFiltreStatus(status);
  };

  return (
    <div className="app-container">
      <h1>Test technique Mobsuccess</h1>
      <Filter onFilterChange={handleFilterChange} />
      <PersonnageListe filtreStatus={filtreStatus} />
    </div>
  );
}
