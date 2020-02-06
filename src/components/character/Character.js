import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../characterList/CharacterList.css';

const Character = ({ name, photoUrl, _id }) => {
  return (
    <>
      <section>
        <Link to={`/character/${_id}`}>
          <div className={styles.center}>
            <h3>{name} </h3>
            <img
              src={
                photoUrl ||
                'https://ctl.s6img.com/society6/img/XG0OlNwi-sp-8Dsh8pYRR1HJtGY/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/58b052f474184211b7fcb694e0888c2a/~~/google-chrome-broken-image-prints.jpg'
              }
            />
          </div>
        </Link>
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
