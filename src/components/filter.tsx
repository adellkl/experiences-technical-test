import React from 'react';

interface FilterProps {
    onFilterChange: (status: string) => void;
    onSearchChange: (search: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, onSearchChange }) => {
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label htmlFor="status-filter">Filtrer par statut :</label>
                <select
                    id="status-filter"
                    onChange={handleStatusChange}
                    aria-label="Filtrer les personnages par statut"
                >
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="search-group">
                <label htmlFor="search-input">Rechercher par nom :</label>
                <input
                    id="search-input"
                    type="text"
                    placeholder="Rechercher..."
                    onChange={handleSearchChange}
                    aria-label="Rechercher des personnages par nom"
                />
            </div>
        </div>
    );
};

export default Filter;
