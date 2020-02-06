import React from 'react';
import PropTypes from 'prop-types';
import styles from '../characterList/CharacterList.css';
const Character = ({ name, photoUrl, allies, enemies, handleClick, weapon }) => {
  return (
    <>
      <section onClick={handleClick}>
        <div className={styles.center}>
          <h3>{name} </h3>
          <img
            src={
              photoUrl ||
              'https://ctl.s6img.com/society6/img/XG0OlNwi-sp-8Dsh8pYRR1HJtGY/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/58b052f474184211b7fcb694e0888c2a/~~/google-chrome-broken-image-prints.jpg'
            }
          />
          <p>{allies}</p>
          <p>{weapon}</p>
          <p>{enemies}</p>
       
        </div>
      </section>
    </>
  );
};
Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  enemies: PropTypes.string,
  weapon: PropTypes.string,
  allies: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Character;
