import { useState, useEffect } from 'react';
import { getCharacters } from '../services/avatarApi';

export const useAvatarCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    return getCharacters().then(characters => {
      setCharacters(characters);
    });
  };

  const handleClick = () => {
    getCharacters();
  };

  return { handleClick, characters };
};
