
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results;
  } catch (error) {
    console.error('Erreur lors de la récupération des personnages', error);
    return [];
  }
};
