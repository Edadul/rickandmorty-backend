export const findFirstAlienFemaleCharacter = (characters) => {
    return characters.find((character) => (character.species === "Alien" && character.gender === "Female") ?? "No alien female character found");
}
