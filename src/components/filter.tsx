import React from 'react';

interface FilterProps {
    onFilterChange: (status: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    return (
        <div className="filter">
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
};

export default Filter;
