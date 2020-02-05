import React from 'react';
import Character from '../character/Character';
import PropTypes from 'prop-types';
import { useAvatarCharacters } from '../../hooks/AvatarHook';
import styles from '../characterList/CharacterList.css'

const CharacterList = () => {
  const { characters } = useAvatarCharacters();
  const CharacterElements = characters.map(character => (
    <li key={character._id}>
      <Character name={character.name} photoUrl={character.photoUrl} />
    </li>
  ));
  return (
    <div className={styles.flex}>
      <ul>{CharacterElements}</ul>
    </div>
  );
};

CharacterList.prototype = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
