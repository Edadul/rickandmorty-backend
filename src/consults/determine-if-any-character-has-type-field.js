export const determineHasTypeField = (characters) => {
    /* Check if any character has a type field */
    return characters.some((character) => character.type !== ' ');
}