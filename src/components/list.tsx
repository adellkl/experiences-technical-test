import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import PersonnageCard from './card';

interface Personnage {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

interface PersonnageListeProps {
    filtreStatus: string;
}

const PersonnageListe: React.FC<PersonnageListeProps> = ({ filtreStatus }) => {
    const [personnages, setPersonnages] = useState<Personnage[]>([]);

    useEffect(() => {
        const recupererPersonnages = async () => {
            const data = await fetchCharacters();
            setPersonnages(data);
        };

        recupererPersonnages();
    }, []);

    const personnagesFiltres = filtreStatus
        ? personnages.filter((personnage) => personnage.status === filtreStatus)
        : personnages;

    return (
        <div className="personnage-liste">
            {personnagesFiltres.map((personnage) => (
                <PersonnageCard key={personnage.id} personnage={personnage} />
            ))}
        </div>
    );
};

export default PersonnageListe;
