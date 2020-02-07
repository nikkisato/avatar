import React from 'react';
import { useAvatarCharacters } from '../../hooks/AvatarHook';

const PagingComponent = () => {
  const { handleNextClick } = useAvatarCharacters();
  return <button onClick={handleNextClick}>Next</button>;
};

export default PagingComponent;
