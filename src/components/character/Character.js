import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
  return (
    <>
      <section>
        <h3>{name} </h3>
        <img src={photoUrl} />
        <p>{affiliation}</p>
      </section>
    </>
  );
};
Character.propTypes = {
  photoUrl: PropTypes.string,
  affiliation: PropTypes.string,
  name: PropTypes.string.isRequired,
  enemies: PropTypes.string,
  allies: PropTypes.string
};
