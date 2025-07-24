import React from 'react';

interface Personnage {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

const PersonnageCard: React.FC<{ personnage: Personnage }> = ({ personnage }) => {
    return (
        <div className="personnage-card">
            <img src={personnage.image} alt={personnage.name} />
            <h3>{personnage.name}</h3>
            <p>Espèce : {personnage.species}</p>
            <p>Statut : {personnage.status}</p>
        </div>
    );
};

export default PersonnageCard;
