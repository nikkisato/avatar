import { useState, useEffect } from 'react';
import { getCharacters } from '../services/avatarApi';

export const useAvatarCharacter = () => {
  const [character, setCharacterHook] = useState([]);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = () => {
    event.preventDefault();
    getCharacters().then(character => {
      setCharacterHook(character);
    });
  };

  const handleClick = () => {
    getCharacters();
  };

  return { handleClick, character };
};
