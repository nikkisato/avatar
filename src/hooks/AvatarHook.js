import { useState, useEffect } from 'react';
import { getCharacters, getPaging } from '../services/avatarApi';

export const useAvatarCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPaging(10, page).then(results => {
      setCharacters(results);
    });
  }, [page]);

  const fetchCharacters = () => {
    return getCharacters().then(characters => {
      setCharacters(characters);
    });
  };

  const handleClick = () => {
    getCharacters();
  };

  const handleNextClick = () => {
    setPage(page + 1);
    console.log(page);
  };
  
  const handlePrevClick = () => {
    setPage(page - 1);
    console.log(page);
  };
  return { handleClick, characters, handleNextClick, handlePrevClick };
};
