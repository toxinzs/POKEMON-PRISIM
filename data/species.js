// SPECIES = the Pokédex. Real species only need id, name and dex (art loads automatically).
// Fan-made species: set fanmade:true and give an `image` path (put files in /images).
// Fields: id, name, dex, types[], category, height, weight, abilities[], desc,
//         evolvesFrom, evolvesTo[], fanmade, image, firstAppearance (episode id), added
WIKI.species.push(
  { id:"pikachu", name:"Pikachu", dex:25, types:["Electric"], category:"Mouse Pokémon",
    height:"0.4 m", weight:"6.0 kg", abilities:["Static","Lightning Rod"],
    desc:"Placeholder entry. Replace with how Pikachu works in your story.",
    evolvesTo:["raichu"], firstAppearance:"S01E01", added:"2026-10-06" },
  { id:"raichu", name:"Raichu", dex:26, types:["Electric"], category:"Mouse Pokémon",
    height:"0.8 m", weight:"30.0 kg", abilities:["Static"], desc:"Placeholder entry.",
    evolvesFrom:"pikachu", added:"2026-10-06" },
  { id:"pidgey", name:"Pidgey", dex:16, types:["Normal","Flying"], category:"Tiny Bird Pokémon",
    height:"0.3 m", weight:"1.8 kg", abilities:["Keen Eye","Tangled Feet"],
    desc:"Its cries are heard at dawn over the hills in Chapter 1.", firstAppearance:"S01E01", added:"2026-10-06" }
);
