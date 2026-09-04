export const getAliveHumanCharactersWith20PlusEpisodes = (characters) => {
    return characters.filter((character) => character.episodeOccurence >= 20);
}
