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
    characterGroups: {
      "Main cast": ["nova","sora","lucien"],
      "Kealoha family": ["dani","noa","koa","lani","papa-k"],
      "Hampton Roads cohort": ["journee","kennedy","jax","bia","boogie","wren","tobi","mj-park","tariq","ayanna","tae","mariah","isaiah","brielle","caleb"],
      "League & mentors": ["batiste","voss","okonkwo-hale","ashby","castillo","duvivier","hale","okafor","rhys","callum","pryce","brissac","mercier","marchand","reid"],
      "Aether Foundation": ["laval","callahan"],
      "Lumen Meridian": ["elias-verane","faure","crale","mara","theo","marisol","hollis"],
      "Past": ["simone"]
    },
    arcs: {
      1: {
        overview: ["Arc 1 covers the first ten days: a Legendary crash-lands behind Nova's house, she misses her Starter Encounter, hides the truth through kickoff week, carries it across the Atlantic, and meets Sora at Heathrow. In London she gets a Litwick, meets Lucien, and watches the Darkest Day turn the sky red over Euston Road. The secret ends with a live stream, a League interview, a conditional registration, and a chip on the Beast Ball. Her mother flies in, Necrozma bows to her, and the print on the old band points to Kalos."],
        events: ["[[episode:EP01]]: Necrozma breaks out of Lumen Meridian's Beast Ball and crashes behind the Kealoha house.","[[episode:EP02]]: Every Pokémon in the Starter Reserve runs from Nova.","[[episode:EP06]]: [[pokemon:nova-litwick|Litwick]] chooses Nova at Highgate Cemetery.","[[episode:EP08]]: The Darkest Day; [[pokemon:necrozma|Necrozma]] pulls the Dynamax energy out of a Corviknight on a live stream.","[[episode:EP09]]: Necrozma is conditionally registered as Nova's official starter."]
      },
      2: {
        overview: ["Arc 2 moves the story to Paris, where the Beast Ball's band leads to a missing Aether engineer. The city brings the rest of the Hampton Roads cohort into the story, a chase across Montmartre, an encrypted drive, and a gala invitation from the man in Nova's dreams. After the gala the evidence is copied, the League tightens its hold, and a new mission points toward Sora's home mountain."],
        events: ["[[episode:EP12]]: Eevee chooses Sora.","[[episode:EP13]]: Litwick loses its first battle to Jax's Pawmi in forty-eight seconds.","[[episode:EP16]]: Faure throws the drive across the Montmartre rooftops.","[[episode:EP19]]: Lucien learns his father has tracked him for two years.","[[episode:EP21]]: The Grand Palais gala; the Prism Core, and \"Hello, Papa.\"","[[episode:EP22]]: Three copies of the evidence; the League approves a Kanto mission.","[[episode:EP23]]: Litwick learns Minimize and beats Pawmi.","[[episode:EP24]]: Folder 07 shows who overrode the pause before the Darkest Day.","[[episode:EP25]]: Kennedy Price arrives in Paris."],
        threads: ["Who \"M\" is and what is in the locked folder 06 archive.","What the daily check-ins and firmware v3.0 are really for.","Why the Director wants Nova at Mt. Takao (K-19-0812).","Who Callahan phoned in Manhattan.","Where the other six missing Beast Balls went.","Voss's contact, and her suspension."]
      }
    },
    footer: "Pokémon: Prism Wiki",
    // Sidebar widgets (shown on the home page and every episode page)
    trainer: { character: "nova", region: "Kalos (Paris, France)",
               rows: [["Program","Field Program · PTL"],["Group","Nova & Sora"],["Arc","City of Light"]] },
    party: ["necrozma","nova-litwick"]  // up to 6 Pokémon ids (from pokemon.js)
  },
  species: [], characters: [], pokemon: [], locations: [], episodes: [], articles: [], timeline: []
};

// Add deeper fields to an existing entry without editing the original file.
// WIKI.merge("characters","nova",{ sections:[...], relationships:[...] })
WIKI.merge = function(collection, id, extra){
  const o = WIKI[collection].find(x => x.id === id);
  if(!o){ console.warn("merge: no "+collection+"/"+id); return; }
  Object.assign(o, extra);
};
