import React from 'react';
import PropTypes from 'prop-types';
import styles from '../characterList/CharacterList.css';
import { useCharacter } from '../../hooks/getSpecificCharacter';
const CharacterDetail = ({ match }) => {
  const character = useCharacter(match.params.id);
  return (
    <>
      <section>
        <div className={styles.center}>
          <h3>{character.name}</h3>
          <img src={character.photoUrl} />
          <p>Affiliation: {character.affiliation || 'No affiliation'}</p>
          <p>Allies: {character.allies || 'No Allies'}</p>
          <p>Weapon: {character.weapon || 'No Weapons'}</p>
          <p>Enemies: {character.enemies || 'No Enemies'}</p>
        </div>
      </section>
    </>
  );
};
CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetail;
