export const getCharacters = () => {
  return fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  ).then(res =>
    res.json().then(characters =>
      characters.map(
        ({ allies, enemies, photoUrl, name, affiliation, _id, weapon }) => ({
          allies,
          enemies,
          photoUrl,
          name,
          affiliation,
          _id,
          weapon
        })
      )
    )
  );
};

export const getCharacter = id => {
  return fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  ).then(res => res.json());
};
