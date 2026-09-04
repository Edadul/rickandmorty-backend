const checkIfAllHaveImage = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array');
  }

  return data.every(character => character.image && character.image.trim() !== '');
}

const checkIfAllAppearInAtLeastOneEpisode = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array');
  }

  return data.every(character => character.episodeOccurence > 0);
}

const checkEvery = (data) => {
  const allHaveImage = checkIfAllHaveImage(data);
  const allAppearInAtLeastOneEpisode = checkIfAllAppearInAtLeastOneEpisode(data);

  return {
    allHaveImage,
    allAppearInAtLeastOneEpisode
  };
}

export default checkEvery;