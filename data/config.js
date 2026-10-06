// Site-wide settings. Change these any time.
window.WIKI = {
  config: {
    title: "Pokémon: Indigo Chronicles",
    short: "Indigo Wiki",
    tagline: "A Claude-Generated Anime Adventure",
    intro: "Welcome to the Indigo Chronicles Wiki, the guide to every chapter, character, Pokémon and species in the series. Everything here is placeholder until you send the real story.",
    episodeWord: "Chapter",            // "Episode" or "Chapter" – used everywhere in the UI
    seasonNames: { 1: "Season 1: The Journey Begins" },
    footer: "Pokémon: Indigo Chronicles Wiki",
    // Sidebar widgets (shown on the home page and every chapter page)
    trainer: { character: "protagonist", badges: 0, totalBadges: 8, region: "Kanto" },
    party: ["sparky"]                   // up to 6 Pokémon ids (from pokemon.js)
  },
  species: [], characters: [], pokemon: [], locations: [], episodes: []
};
