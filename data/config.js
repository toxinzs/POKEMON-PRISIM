// Site-wide settings. Change these any time.
window.WIKI = {
  config: {
    title: "Pokémon: Prism",
    short: "Prism Wiki",
    tagline: "A star fell. She caught it.",
    intro: "Welcome to the Prism Wiki, the guide to every episode, arc, character, Pokémon and place in POKÉMON: PRISM. Set in the real modern world, where Pokémon have always existed alongside people, it follows Novalee “Nova” Kealoha, a fourteen-year-old from Newport News, Virginia, who finds a wounded, starving Necrozma in the woods behind her house the night before she was supposed to catch her first Pokémon.",
    episodeWord: "Episode",            // "Episode" or "Chapter" – used everywhere in the UI
    seasonWord: "Arc",                 // what each group of episodes is called
    seasonNames: {
      1: "Arc 1 — Starfall",
      2: "Arc 2 — City of Light"
    },
    seasonDesc: {
      1: "Newport News and London. A Necrozma tears its way out of Ultra Space and crashes in Nova's neighborhood the night before Encounter Day. She hides it through kickoff week, carries it to Galar, meets her partner Sora at Heathrow, and keeps the secret until London's Darkest Day forces it into the open. Episodes 1–10.",
      2: "Paris. The Beast Ball's old band is traced to a missing Aether engineer, and the trail leads to Kalos. Proof, a gala invitation, and the man in the dreams, all in the city that calls itself the City of Light. Episodes 11–present."
    },
    footer: "Pokémon: Prism Wiki",
    // Sidebar widgets (shown on the home page and every episode page)
    trainer: { character: "nova", region: "Kalos (Paris, France)",
               rows: [["Program","Field Program · PTL"],["Group","Nova & Sora"],["Arc","City of Light"]] },
    party: ["necrozma","nova-litwick"]  // up to 6 Pokémon ids (from pokemon.js)
  },
  species: [], characters: [], pokemon: [], locations: [], episodes: []
};
