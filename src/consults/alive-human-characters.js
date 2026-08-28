export const getAliveHumanCharacters = (character) => {
  return character.filter((c) => c.estado === "Alive" && c.especie === "Human");
};
