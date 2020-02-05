import React from 'react';
import CharacterList from '../components/characterList/CharacterList';

const AvatarFn = () => {
  const { something } = useAvatar();

  return (
    <>
      <CharacterList />
    </>
  );
};
