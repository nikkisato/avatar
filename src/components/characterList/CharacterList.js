import React from 'react';
import Character from '../character/Character';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const CharacterElements = characters.map(character => (
    <li key={character}>
      <Character />
    </li>
  ));
  return <ul>{CharacterElements}</ul>;
};

CharacterList.prototype = {
  characters: PropTypes.array.isRequired
};
