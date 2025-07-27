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
    search?: string;
}

const PersonnageListe: React.FC<PersonnageListeProps> = ({ filtreStatus, search = '' }) => {
    const [personnages, setPersonnages] = useState<Personnage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const recupererPersonnages = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchCharacters();
                setPersonnages(data);
            } catch (e) {
                setError('Erreur lors du chargement des personnages.');
            } finally {
                setLoading(false);
            }
        };

        recupererPersonnages();
    }, []);

    const personnagesFiltres = personnages.filter((personnage) => {
        const matchesStatus = !filtreStatus || personnage.status === filtreStatus;
        const matchesSearch = !search || personnage.name.toLowerCase().includes(search.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    if (loading) {
        return <div aria-live="polite">Chargement...</div>;
    }

    if (error) {
        return <div role="alert" style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div className="personnage-liste" role="list" aria-label="Liste des personnages">
            {personnagesFiltres.length > 0 ? (
                personnagesFiltres.map((personnage) => (
                    <PersonnageCard key={personnage.id} personnage={personnage} tabIndex={0} />
                ))
            ) : (
                <div>Aucun personnage trouvé.</div>
            )}
        </div>
    );
};

export default PersonnageListe;
