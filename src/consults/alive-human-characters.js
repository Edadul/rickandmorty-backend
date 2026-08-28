export const getAliveHumanCharacters = (character) => {
  return character.filter((c) => c.status === "Alive" && c.species === "Human");
};
