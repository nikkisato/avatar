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

export const getPaging = (perPage, pageNumber) => {
  return fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${pageNumber}`
  ).then(res => res.json());
};

export const getCharacter = id => {
  return fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  ).then(res => res.json());
};
