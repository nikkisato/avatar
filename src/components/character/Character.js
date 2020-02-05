import React from 'react';
import PropTypes from 'prop-types';
import { useAvatarCharacter } from '../../hooks/AvatarHook';

const Character = () => {
  const { character } = useAvatarCharacter();
  return (
    <>
      <section>
        <h3>{character.name} </h3>
        <img src={character.photoUrl} />
        <p>{character.affiliation}</p>
        <p>{character.allies}</p>
        <p>{character.enemies}</p>
      </section>
    </>
  );
};
Character.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  enemies: PropTypes.array.isRequired,
  allies: PropTypes.array.isRequired
};

export default Character;
