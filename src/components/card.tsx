import React from 'react';

interface Personnage {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

interface PersonnageCardProps {
    personnage: Personnage;
    tabIndex?: number;
}

const PersonnageCard: React.FC<PersonnageCardProps> = ({ personnage, tabIndex }) => (
    <div className="personnage-card" role="listitem" tabIndex={tabIndex}>
        <img src={personnage.image} alt={personnage.name} />
        <h3>{personnage.name}</h3>
        <p>Espèce : {personnage.species}</p>
        <p>Statut : {personnage.status}</p>
    </div>
);

export default PersonnageCard;
