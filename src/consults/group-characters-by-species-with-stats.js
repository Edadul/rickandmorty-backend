const aliveHumanCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "Parasite",
    gender: "Male",
    origin: "Earth (C-137)",
    currentLocation: "Citadel of Ricks",
    episodeOccurence: 51,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "alien",
    gender: "Male",
    origin: "unknown",
    currentLocation: "Citadel of Ricks",
    episodeOccurence: 51,
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
];

export const charactersBySpeciesWithStats = (characters) => {
  return characters.reduce((acumulador, character) => {
    const type = character.type || "Unknown";


    acumulador[type] = { cantidad: (acumulador[type]?.cantidad || 0) + 1, promedioEpisodios: 0, vivos: acumulador };

    return acumulador;
  }, {});
};

const groupedCharacters = charactersBySpeciesWithStats(aliveHumanCharacters);

console.log(groupedCharacters);
