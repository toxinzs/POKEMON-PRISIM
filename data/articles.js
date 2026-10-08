// ARTICLES: lore and reference pages (organizations, technology, rules, mysteries).
// Fields: id, title, category, summary, lead[] (intro paragraphs), info[[label,value]], sections[{h,p[],list[]}],
//         related["type:id"], firstAppearance (episode id), image, added
WIKI.articles.push(

  { id:"lumen-meridian", title:"Lumen Meridian", category:"Organizations",
    summary:"The clean-energy company that captured Necrozma and sponsors the Student Field Program.",
    info:[["Founded","2023 (per its public bio)"],["Founder","[[character:elias-verane|Dr. Elias Verane]]"],["Headquarters","Williamsburg, Virginia (Verane residence nearby); European office in Paris"],["Known sites","HR-01 (Hampton Roads); Galar Pilot, site GB-07; spectral sciences annex at Lac d'Annecy"],["Public role","Official sponsor, League Student Field Program"],["First seen","[[episode:EP03]]"]],
    lead:["Lumen Meridian presents itself as a grid-modernization and clean-energy company founded by former Aether Foundation scientists, with contracts in four U.S. states and the slogan “Light Belongs to Everyone.” Behind that, it holds secret access to Ultra Space and captured [[pokemon:necrozma|Necrozma]] in a Beast Ball."],
    sections:[
      {h:"Public face", p:["Verane is praised as a clean-energy visionary. The company sponsored the League's Student Field Program, which is why its founder gave the speech at kickoff ([[episode:EP03]]), and it hosted the “Light Belongs to Everyone” gala at the [[location:grand-palais|Grand Palais]] ([[episode:EP21]])."]},
      {h:"What it is shown doing", list:["Capturing Necrozma in Ultra Space and draining its light to raise “yield” ([[episode:EP01]], [[episode:EP21]]).","Installing [[article:gridsense|GridSense]] sensor arrays on utility circuits near its Hampton Roads facility, including the pole behind the Kealoha house ([[episode:EP22]]).","Running the Galar Pilot, a Power Spot extraction trial, whose overridden pause preceded the Darkest Day ([[episode:EP24]]).","Tracking [[character:lucien|Lucien]] for two years ([[episode:EP19]]).","Sending field operatives ([[character:mara|Mara]], [[character:theo|Theo]], [[character:crale|Crale]]) after Nova, Faure and the drive."]},
      {h:"Open questions", list:["Who “M” is, and what the locked folder 06 archive contains.","How Lumen got its Ultra Space access.","Whether the Prism Core and the Beast Ball line were built for more than containment."]}
    ],
    related:["character:elias-verane","character:faure","character:hollis","article:gridsense","article:beast-ball"],
    firstAppearance:"EP03", added:"2026-10-08" },

  { id:"beast-ball", title:"Beast Ball BB-04", category:"Technology",
    summary:"The ball that held Necrozma, now black-banded, chipped and on loan from Aether.",
    info:[["Model","Beast Ball, BB series (Kalos facility, 2025 batch)"],["Unit","BB-04"],["Holds","[[pokemon:necrozma|Necrozma]]"],["Node","7F-22"],["Firmware","v3.0 (installed Mar 1, 2027)"],["Registered to","Novalee Kealoha (PTL HR-2027-0119), on loan from Aether"],["First seen","[[episode:EP01]]"]],
    lead:["The Beast Ball is the only place Necrozma can hide, and Necrozma hates it. League scanners read it as empty or broken, which is how it got through customs at Heathrow."],
    sections:[
      {h:"The band", p:["[[character:faure|Dr. Faure]] built the black band that contains Necrozma. She built it with a two-millimeter seam in the shielding on the left side, so a little light could reach it ([[episode:EP22]]). A League URD chip was later fitted to it at Pancras Square ([[episode:EP09]]); the old band's print led to Kalos ([[episode:EP10]])."]},
      {h:"The node", p:["The band's node glows green when Necrozma is calm and amber when it is hungry, and goes red when something pulls light from the room ([[episode:EP21]]). Since firmware v3.0 it pulses twice a second instead of once ([[episode:EP23]])."]},
      {h:"Ownership", p:["Aether claimed BB-04 as its property at the February 27 review. [[character:laval|Dr. Laval]] withdrew the claim after showing [[character:callahan|Callahan]] drafted it herself, and loaned the ball to Nova for the length of her registration ([[episode:EP22]]). Seven BB-series balls from the 2025 Kalos batch are missing; six remain unaccounted for."]}
    ],
    related:["pokemon:necrozma","character:faure","article:lumen-meridian","article:gridsense"],
    firstAppearance:"EP01", added:"2026-10-08" },

  { id:"gridsense", title:"GridSense", category:"Technology",
    summary:"Lumen's gray utility boxes: ordinary-looking sensors that were also a beacon for Necrozma.",
    info:[["Operator","Lumen Meridian, Grid Integration"],["Array","B (Denbigh, Newport News, VA)"],["Anchor","B-07, pole 4471-C, behind the Kealoha house"],["Prepared by","[[character:hollis|Rachel Hollis]]"],["Approved by","E.V."],["First seen","[[episode:EP22]]"]],
    lead:["GridSense looks like a gray lunchbox on a utility pole. Installed under a subcontract that [[character:noa|Noa Kealoha]] worked on, it measured the grid. Its anchor nodes also emitted a low-amplitude harmonic keyed to Necrozma's cradle signature, so that if the Asset escaped, its return vector would bias toward the strongest anchor."],
    sections:[
      {h:"Denbigh", p:["Array B was chosen “for low population density and proximity to HR-01.” Residential exposure was assessed as acceptable. When Necrozma broke out on February 1, it fell toward the Kealoha house, and the anchor on the pole behind it went offline at 21:39 ([[episode:EP22]]). Noa found the box gone from its bracket that night."]},
      {h:"Elsewhere", p:["A GridSense box zip-tied to a lamppost on Rue du Château-d'Eau in Paris showed a green LED the night the drive was copied. The GridSense signature of Necrozma, “Asset 04,” is what flagged London on February 11 ([[episode:EP24]])."]}
    ],
    related:["article:lumen-meridian","article:beast-ball","character:noa","character:hollis"],
    firstAppearance:"EP22", added:"2026-10-08" }
);
