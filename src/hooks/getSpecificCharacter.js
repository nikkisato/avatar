import { useState, useEffect } from 'react';
import { getCharacter } from '../services/avatarApi';

export const useCharacter = id => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(id).then(setCharacter);
  });
  return character;
};
