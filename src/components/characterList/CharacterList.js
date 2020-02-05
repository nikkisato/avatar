import React from 'react';
import Character from '../character/Character';
import PropTypes from 'prop-types';
import { useAvatarCharacter } from '../../hooks/AvatarHook';

const CharacterList = () => {
  const { character } = useAvatarCharacter();
  const CharacterElements = character.map(character => (
    <li key={character.id}>
      <Character />
    </li>
  ));
  return <ul>{CharacterElements}</ul>;
};

CharacterList.prototype = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
