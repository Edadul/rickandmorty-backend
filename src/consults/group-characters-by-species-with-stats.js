export const charactersBySpeciesWithStats = (characters) => {
  return characters.reduce((acumulador, character) => {
    const type = character.type || "Unknown";

    // Si no existe, inicializar
    if (!acumulador[type]) {
      acumulador[type] = {
        cantidad: 0,
        totalEpisodios: 0,
        vivos: 0,
        promedioEpisodios: 0,
      };
    }

    // Ahora actualizamos (no sobrescribimos)
    acumulador[type].cantidad += 1;
    acumulador[type].totalEpisodios += character.episodeOccurence;
    
    if (character.status === "Alive") {
      acumulador[type].vivos += 1;
    }

    acumulador[type].promedioEpisodios = 
      acumulador[type].totalEpisodios / acumulador[type].cantidad;

    return acumulador;
  }, {});
};
