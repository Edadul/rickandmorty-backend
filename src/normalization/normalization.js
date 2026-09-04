const normalizeData = async (data) => {
  return data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin.name,
      currentLocation: character.location.name,
      episodeOccurence: character.episode.length,
      image: character.image,
    }
  })
}

export default normalizeData
