import React from 'react';
import PropTypes from 'prop-types';
import styles from '../characterList/CharacterList.css';

const Character = ({ name, photoUrl }) => {
  return (
    <>
      <section>
        <div className={styles.center}>
          <h3>{name} </h3>
          <img
            src={
              photoUrl
            }
          />
        </div>
      </section>
    </>
  );
};
Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default Character;
