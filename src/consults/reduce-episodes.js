const _setEpisodesRange = (episodes) => {
  const episodesRange = ['1-5', '6-16', '16-30', '30+'];

  if (episodes <= 5) {
    return episodesRange[0];
  } else if (episodes > 5 && episodes <= 16) {
    return episodesRange[1];
  } else if (episodes > 16 && episodes <= 30) {
    return episodesRange[2];
  } else {
    return episodesRange[3];
  }
}

const reduceEpisodes = (data) => {
  const reducedEpisodes = data.reduce((acc, character) => {
    const episodesRange = _setEpisodesRange(character.episodeOccurence);
    if (!acc[episodesRange]) {
      acc[episodesRange] = 0;
    }
    acc[episodesRange]++
    return acc;
  }, [])

  return reducedEpisodes;
}

export default reduceEpisodes;