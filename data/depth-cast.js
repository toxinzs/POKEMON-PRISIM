// PHASE 2: deep profiles for the main cast. Uses WIKI.merge(collection, id, {...}) to add sections,
// relationships, timelines, battles and move histories to entries that already exist.

// ───────────────────────── NOVA ─────────────────────────
WIKI.merge("characters","nova",{
  aka:"“Star” (to her dad)", birthday:"October 11, 2012",
  affiliation:"League Student Field Program (PTL HR-2027-0119); Menchville High School",
  family:"[[character:dani|Dani]] (mother), [[character:noa|Noa]] (father), [[character:koa|Koa]] (brother), [[character:lani|Lani]] (sister), [[character:papa-k|Papa K]] (grandfather)",
  sections:[
    {h:"Appearance", p:[
      "Five-foot-two, with a half-up, half-down hairstyle: a curly top ponytail with honey-amber streaks, held by the shard of [[pokemon:necrozma|Necrozma]]. Her palette is black, purple and cyan.",
      "Her field jacket is black with hand-painted purple prisms, cyan seams, and a tiny Coleman lantern on the left cuff. She runs in Nike Dunk Lows (“Next Nature,” Pale Ivory and University Blue), even to galas, wears her mother's gray Riverside Health beanie, and carries a black JanSport Big Student backpack (her old one tore at Highgate), a Moleskine Art sketchbook with a Menchville Monarchs sticker on the cover, and an iPhone 17 Pro in Deep Blue with a Rotom Core, plus two Anker power banks. Her right palm is bandaged from the burn she took on the Euston Road. At the gala she wore a black Sézane dress."]},
    {h:"Personality", p:[
      "Nova talks through silences, makes hope for everyone, and helps to a fault. She's polite (“yes, ma'am”), curious, creative, and stubborn when told no. Her flaw is that hope can slide into denial, especially when the bad news is about her. She used to say yes before hearing the whole question; over the course of Arc 2 she learns to stop: she knocks on Sora's door instead of sneaking out, and takes three days to reply to the gala RSVP.",
      "She draws so that people have proof they were there: “Mama vs. Bunnelby” for her mother, the barge, and the night sky she drew for Sora, signed “I believe you. — N.” ([[episode:EP24]])."]},
    {h:"Fear of the dark", p:[
      "Nova slept beside her grandfather's dented green Coleman lantern every night for nine years. After [[episode:EP10]] she turned it off for the first time and slept in Necrozma's glow instead; the lantern went home to Papa K. Her fear has changed shape: not scared of the dark, but scared for something in the dark."]},
    {h:"Background", p:[
      "Born in Newport News, Virginia, and raised in Denbigh. She is a ninth grader at Menchville High School, took the Pokémon course at the League Training Annex at CNU under [[character:batiste|Ms. Batiste]] (a 79 on the written assessment; [[character:kennedy|Kennedy]] got a 98.6), and missed her Starter Encounter because a Legendary fell behind her house the night before ([[episode:EP01]], [[episode:EP02]]). She hid Necrozma through kickoff week, carried it to London in an empty-looking ball, and was outed on the Euston Road ([[episode:EP08]])."]},
    {h:"Battle style", p:[
      "A trickster in the making. Under Batiste (“small things survive”) and with Élodie Marchand's Chandelure as an example, she fights with Litwick through Smog, dimmed light, and surprise ([[episode:EP14]], [[episode:EP23]]). Necrozma has never taken a battle command."]}
  ],
  relationships:[
    {id:"sora", rel:"Partner; closest friend", note:"The first person to see Necrozma and to decide to keep the secret with her. A slow-burn feeling neither says aloud."},
    {id:"lucien", rel:"Friend", note:"The son of the man who made Necrozma's cage. “If you ever think about it at four in the morning, you knock on my door first.”"},
    {id:"batiste", rel:"Mentor and guardian signatory", note:"Teaches her to fight small and smart; signs for her with the League."},
    {id:"dani", rel:"Mother", note:"Every-four-hours call rule. Nova promised, “When I can, Mama,” and kept it."},
    {id:"noa", rel:"Father", note:"Corny jokes; the lineworker who realized the pole behind their house was a Lumen beacon."},
    {id:"papa-k", rel:"Grandfather", note:"Told her about “the Blinding One.” Holds a copy of the evidence."},
    {id:"journee", rel:"Best friend", note:"Her voice memo, finally played on March 4: “You finally got something that's yours.”"},
    {id:"kennedy", rel:"Rival", note:"Challenges her to a sanctioned battle: “Run it.”"},
    {id:"jax", rel:"Rival turned friend", note:"Beat Litwick in forty-eight seconds, lost the rematch, shook her hand."},
    {id:"wren", rel:"Friend", note:"Chose Nova over her aunt."},
    {id:"elias-verane", rel:"Antagonist", note:"The man in her dreams. “Dr. Elias Verane. I know what you did.”"},
    {id:"okonkwo-hale", rel:"Interim liaison", note:"Daily 9 AM check-ins, both cameras on. She has decided to tell him the truth about everything except what matters."},
    {id:"faure", rel:"Ally", note:"Gave her the drive on a Montmartre rooftop."},
    {id:"voss", rel:"Former liaison", note:"Chose Nova at the gala; suspended."}
  ],
  timeline:[
    {date:"Feb 1", text:"Finds Necrozma's shard and the Beast Ball in the woods behind her house.", ep:"EP01"},
    {date:"Feb 2", text:"Misses her starter slot: every Pokémon runs from her.", ep:"EP02"},
    {date:"Feb 6", text:"Meets Sora at Heathrow and lies to him about her backpack.", ep:"EP03"},
    {date:"Feb 10", text:"Catches Litwick at Highgate Cemetery.", ep:"EP06"},
    {date:"Feb 11", text:"Stands in front of Necrozma on the Euston Road during the Darkest Day.", ep:"EP08"},
    {date:"Feb 12", text:"Signs Necrozma's conditional registration with Batiste as witness.", ep:"EP09"},
    {date:"Feb 15", text:"Calls Necrozma on a rooftop in Paris; it comes.", ep:"EP11"},
    {date:"Feb 18", text:"Loses her first battle to Jax's Pawmi in forty-eight seconds.", ep:"EP13"},
    {date:"Feb 19–20", text:"Catches Faure's drive on a Montmartre rooftop.", ep:"EP16"},
    {date:"Feb 24", text:"Sees Mega Evolution for the first time; Necrozma shows her what it used to be; RSVPs to the gala.", ep:"EP20"},
    {date:"Feb 26", text:"Says Verane's name out loud at the gala.", ep:"EP21"},
    {date:"Feb 27", text:"Tells her parents the truth about the sponsor; signs the Kanto amendment.", ep:"EP22"},
    {date:"Mar 1", text:"Wins her first tactical battle, against Jax, with Minimize.", ep:"EP23"},
    {date:"Mar 3", text:"Draws Sora the night he got lost; signs it “I believe you.”", ep:"EP24"},
    {date:"Mar 4", text:"Plays Journee's voice memo; accepts Kennedy's challenge.", ep:"EP25"}
  ],
  quotes:["“Dr. Elias Verane. I know what you did.” — Nova, at the gala","“He aimed it. At a pole. And my house was just... next to the pole.” — Nova","“I wanted to say ‘revisit’ to his face so bad.” — Nova","“You don't get to go up that mountain without the first person you told.” — Nova, to Sora"],
  trivia:["Her family's group chat is “Kealoha Crew 🌺.”","She signs her name “Novalee K. Kealoha,” with a star over the i.","She is the only person Necrozma has ever chosen to show its true past."]
});

// ───────────────────────── SORA ─────────────────────────
WIKI.merge("characters","sora",{
  birthday:"March 3, 2011", affiliation:"Kanto program, Hachiōji; Field Program group with Nova",
  family:"Kenji Takeda (father), Monique Takeda (mother)",
  sections:[
    {h:"Appearance", p:[
      "Five-foot-ten, lean, with a runner's build, deep brown skin, short two-strand twists on top and a low taper. He wears Ray-Ban Meta Wayfarer Gen 2 glasses in Matte Black with Transitions lenses, running Rotom-derived software that logs everything he sees; the right lens is cracked. His Nike Tech Fleece has a duct-taped shoulder, he runs in Pegasus 41s, and his black Nike beanie is the one Eevee stole and gave back. His iPhone 16 Pro (Desert Titanium) wears a Takeda Auto Works case with a Suica penguin and a rubber Rockruff charm. Since March 3 he also wears a blue omamori from Yakuōin on his wrist and Batiste's Ranger Union patch on his jacket."]},
    {h:"Personality", p:[
      "Cocky and funny on the surface, guarded underneath. Sora is fully bilingual and code-switches mid-sentence between Japanese and Black American English. He catches everything he can and treats any area that isn't marked off as a gray area: “‘Not listed’ don't mean ‘no.’ It means ‘not listed.’” He is protective: he threw himself over Nova on the Euston Road ([[episode:EP08]]). His feelings for her are unspoken and obvious."]},
    {h:"Mt. Takao", p:[
      "At eight years old he was lost on Mt. Takao during the Perseids in August 2019 and led home by a small glowing light that nobody believed in. He told the whole story for the first time to Nova on a guesthouse roof ([[episode:EP18]]); she said, “I believe you.” Aether's archive file K-19-0812 recorded an Ultra energy aperture on that mountain at 22:47 JST, and the photo his father mailed on his sixteenth birthday shows a soft violet glow low over the ridge six minutes earlier ([[episode:EP17]], [[episode:EP24]])."]},
    {h:"Team and catches", p:[
      "His party is [[pokemon:iwanko|Iwanko]] and [[pokemon:sora-eevee|Eevee]]. Extra catches go to League sanctuaries, where he checks the live feeds nightly: a Fletchling, Spewpa, Bunnelby, Flabébé and Skiddo (the one he rode in Galar). His catch count is seven. The Morpeko that stole his birthday cake escaped his Poké Ball in [[episode:EP24]]. None of his Pokémon can Mega Evolve, which he checked after the Mega Exhibition."]}
  ],
  relationships:[
    {id:"nova", rel:"Partner", note:"The first person he ever told about Takao. She drew it for him."},
    {id:"lucien", rel:"Friend (after distrust)", note:"“Then sit down. That's how.” — Sora, on the barge."},
    {name:"Kenji Takeda", rel:"Father", note:"Owns Takeda Auto Works in Hachiōji. Rebuilt a red 1978 Super Cub for Sora's sixteenth birthday and mailed him an omamori and an old photograph."},
    {name:"Monique Takeda", rel:"Mother", note:"From Atlanta; came to Japan on the JET Program and teaches at an international school."},
    {id:"batiste", rel:"Mentor", note:"Gave him her old Ranger Union patch “for Takao.”"},
    {id:"elias-verane", rel:"Adversary", note:"Greeted him at the gala by naming Takeda Auto Works."}
  ],
  timeline:[
    {date:"Aug 12, 2019", text:"Lost on Mt. Takao at eight; led home by a glowing light.", ep:"EP18"},
    {date:"Feb 6", text:"Meets Nova at Heathrow Terminal 3.", ep:"EP03"},
    {date:"Feb 6", text:"Sees Necrozma burst out in Room 31 and keeps the secret with her.", ep:"EP04"},
    {date:"Feb 16", text:"Breaks his catch drought in the Bois de Vincennes (+5).", ep:"EP11"},
    {date:"Feb 17", text:"Eevee chooses him after four hours.", ep:"EP12"},
    {date:"Feb 23", text:"Tells Nova the whole Takao story.", ep:"EP18"},
    {date:"Feb 26", text:"Wears Madame Brissac's late husband's navy suit to the gala.", ep:"EP21"},
    {date:"Feb 27", text:"Accepts the Kanto mission before telling Nova.", ep:"EP22"},
    {date:"Mar 3", text:"Turns sixteen; loses the Morpeko; receives the Super Cub keys and the Takao photo.", ep:"EP24"}
  ],
  quotes:["“‘Not listed’ don't mean ‘no.’ It means ‘not listed.’ That's a legal gray area.” — Sora","“It was already there. Before I got lost.” — Sora, about the photograph","“Then sit down. That's how.” — Sora, to Lucien"],
  trivia:["He took the Pokémon course through the Kanto program, not with the Hampton Roads cohort.","His glasses logged the Takao photograph against his own 2019 entry, #0001, at a 0.88 match.","Necrozma looks at him “like it knows something.”"]
});

// ───────────────────────── LUCIEN ─────────────────────────
WIKI.merge("characters","lucien",{
  aka:"“Luc”; “mon lion” (to Faure)", birthday:"November 7, 2010", affiliation:"None (no PTL)",
  family:"[[character:elias-verane|Elias Verane]] (father), [[character:simone|Simone]] (mother, deceased)",
  sections:[
    {h:"Appearance", p:[
      "Curly hair and freckles, in a torn Stone Island jacket (which he took off for the first time at Sora's birthday), Corteiz cargos or a cracked-logo Corteiz tee, and Salomon XT-6s. His mother's ring hangs on a silver chain at his throat. He now carries a Nokia 105 burner; he threw his iPhone 15 Pro into the Thames off Southwark Bridge."]},
    {h:"Personality", p:[
      "Calm, charming, secretive and quietly kind. He answers questions with questions and knows a suspicious amount about Beast Balls. He speaks South London English, perfect Parisian French with Faure, and French when he's emotional. He tends to turn up on rooftops, right before trouble."]},
    {h:"Background", p:[
      "Raised by his mother in Peckham until she died in about 2025, then sent to live with the father he barely knew: Dr. Elias Verane. He remembers the one time his father taught him to ride a bike in Battersea Park, running behind him holding the seat and letting go without telling him. At fourteen he found his father's “ciel” map in the Sceaux house. At fifteen his father took him for a week to the spectral sciences annex above Lac d'Annecy, where he found a Hisuian Zoroark in a mirrored room and, last November, let her out ([[episode:EP23]]).",
      "He thought he ran away. The SUIVI folder showed he'd been tracked for two years through his Poké Balls' registry pings, and that his father had written, in March 2025, that a son running from his father is always running toward something ([[episode:EP19]]). He broke down, and did not run. “I don't want to run toward anything anymore. I want to walk.”"]},
    {h:"Team", p:[
      "[[pokemon:absol|Absol]] (injured in the Montmartre escape and healing), [[pokemon:lucien-corviknight|Corviknight]], and an unnamed, unregistered [[pokemon:lucien-zoroark|Hisuian Zoroark]]. Faure spoofed both his registered balls into a loop on the barge, and Verane let them go."]}
  ],
  relationships:[
    {id:"elias-verane", rel:"Father", note:"Warm, persuasive, and the man who tracked him. “Hello, Papa.”"},
    {id:"simone", rel:"Mother", note:"Died in about 2025. Her ring is on his chain."},
    {id:"faure", rel:"“Tante Mireille”", note:"A family friend, not his aunt. “Mon lion.”"},
    {id:"nova", rel:"Friend", note:"Keeps his promise to knock on her door instead of sneaking out."},
    {id:"sora", rel:"Friend", note:"Gave Sora a Michelin map with “NO” written across central Paris and a drawing of a Morpeko with a cake."},
    {id:"batiste", rel:"Ally", note:"Takes her Uber-not-Métro rules."},
    {id:"voss", rel:"Knew his surname", note:"Kept it secret."}
  ],
  timeline:[
    {date:"Feb 7", text:"Appears at the Barbican with Absol and meets Nova.", ep:"EP05"},
    {date:"Feb 11", text:"Finds Nova a roof for real sunlight; leaves during the Darkest Day.", ep:"EP07"},
    {date:"Feb 19", text:"Flies Faure out over Montmartre on Corviknight.", ep:"EP16"},
    {date:"Feb 23", text:"Opens the SUIVI folder and learns he was tracked. Doesn't run.", ep:"EP19"},
    {date:"Feb 26", text:"Drops from the Grand Palais roof with his Zoroark. “Hello, Papa.”", ep:"EP21"},
    {date:"Feb 27", text:"Says out loud that he could walk up to his father and ask.", ep:"EP22"},
    {date:"Feb 28", text:"Shows his friends the Zoroark.", ep:"EP23"},
    {date:"Mar 3", text:"Reads the Galar Pilot log with Nova and Sora.", ep:"EP24"}
  ],
  quotes:["“It's how my father sees.” — Lucien, about GridSense","“You don't hide the whole Pokémon. You make it smaller than where they're looking.” — Lucien","“He's not trying to give it back its light. He never was. He wants to see how much it can hold.” — Lucien"],
  trivia:["He named Faure's Fletchinder “Miette” (crumb) when he was six.","He travels with Nova and Sora by choice, but isn't an official group member."]
});

// ───────────────────────── BATISTE ─────────────────────────
WIKI.merge("characters","batiste",{
  affiliation:"Former Pokémon Ranger (Gulf Region); Hampton Roads program instructor; Nova's guardian signatory",
  sections:[
    {h:"Background", p:[
      "Forty-four, from New Orleans, a former Ranger with a limp she has never explained. She trained for three years in Brooklyn, taught “172 students” at CNU, and has no kids. Her 2019 report on a “thing in Guadeloupe” is one Verane has read, and she keeps a retired Ranger friend at Bercy who found them tickets."]},
    {h:"Role in the story", p:[
      "She flew to London on February 12 after Nova finally told her the truth, witnessed the conditional registration, and now travels with Nova as her on-the-road guardian and mentor, at Dani's request. She teaches Nova's small-things-survive style, rented the Rue de Lancry flat in cash for Faure, and signs for Nova at the League. Her knee is a recurring problem; she spends nights with a bag of frozen vegetables on it."]},
    {h:"Pokémon", p:["Her Staraptor, its wing cut over Sacré-Cœur by a Honchkrow, is her old Ranger partner."]}
  ],
  relationships:[
    {id:"nova", rel:"Student; ward", note:"“Brave isn't the same as safe.”"},
    {id:"sora", rel:"Student", note:"Gave him her old Ranger Union patch for Takao."},
    {id:"lucien", rel:"Ally", note:"Sets the rules for his trips to Faure: Uber, no Métro."},
    {id:"faure", rel:"Ally", note:"Houses her in the flat she rented."},
    {id:"dani", rel:"Co-guardian", note:"Dani's conditions are written into the amendment she signed."},
    {id:"voss", rel:"Wary colleague", note:"Both work around Nova's case from opposite sides of the League; Voss is now suspended."}
  ],
  timeline:[
    {date:"Feb 12", text:"Flies to London; witnesses the registration.", ep:"EP09"},
    {date:"Feb 18", text:"Gives Nova her first lesson: dim the flame.", ep:"EP13"},
    {date:"Feb 19–20", text:"Her Staraptor fights a Honchkrow over Montmartre.", ep:"EP16"},
    {date:"Feb 26", text:"Wears green velvet to the gala; names Litwick's Flash Fire.", ep:"EP21"},
    {date:"Feb 27", text:"Signs the Kanto amendment as guardian.", ep:"EP22"},
    {date:"Mar 3", text:"Gives Sora her Ranger Union patch.", ep:"EP24"}
  ],
  quotes:["“Small things survive.” — Batiste","“That man just got everything he wanted, and he lost twice.” — Batiste","“Ordinary's the best clearance there is.” — Batiste"]
});

// ───────────────────────── VOSS ─────────────────────────
WIKI.merge("characters","voss",{
  affiliation:"League Ultra Research Division (suspended)",
  sections:[
    {h:"Background", p:[
      "From the League's little-known Ultra Research Division, which has only eleven people with clearance; Voss trusts nine of them. The Director, Thomas Okonkwo-Hale, hired her ten years and four months ago from a Columbia postdoc on aperture harmonics. She wore her silver cuff, with its Key Stone, every day for eight years. Her Metagross, kept in a Timer Ball, can Mega Evolve."]},
    {h:"What she did", p:[
      "She spent weeks looking for Nova, kept Necrozma classified, kept Lucien's surname secret, and told Nova, “Especially not the sponsors.” At the gala she called the Prism Core a lure, Mega Evolved her Metagross against the League's order, cracked the Core with Meteor Mash, and held a door for six minutes before being taken into custody. In the back of a Peugeot the Director took the Key Stone and suspended her. In her hotel room she found the executed Kanto amendment and a line in her old Moleskine about Takao in 2019."]}
  ],
  relationships:[
    {id:"nova", rel:"Former charge", note:"Chose Nova over her mentor."},
    {id:"okonkwo-hale", rel:"Mentor; superior", note:"“You'll only hurt her.”"},
    {id:"lucien", rel:"Knew his surname", note:"Said nothing."},
    {id:"batiste", rel:"Wary ally", note:"Shares Nova's case with Batiste while Voss is out of the picture."}
  ],
  timeline:[
    {date:"Feb 2", text:"The URD flags the Encounter Day anomaly.", ep:"EP02"},
    {date:"Feb 12", text:"Briefs Nova; fits the URD chip.", ep:"EP09"},
    {date:"Feb 22", text:"Takes Nova into Aether Europe for the joint investigation.", ep:"EP17"},
    {date:"Feb 26", text:"Mega Evolves Metagross at the gala; is taken into custody.", ep:"EP21"},
    {date:"Feb 26", text:"The Director takes her Key Stone and suspends her.", ep:"EP21"},
    {date:"Feb 27", text:"Reads the Kanto amendment and her 2019 Takao notes: “No. Not Takao.”", ep:"EP22"}
  ],
  quotes:["“Especially not the sponsors.” — Voss","“No. Not Takao.” — Voss, reading her notebook"]
});

// ───────────────────────── VERANE ─────────────────────────
WIKI.merge("characters","elias-verane",{
  aka:"“E.V.”", affiliation:"Lumen Meridian (founder and CEO); formerly Aether Foundation",
  family:"[[character:lucien|Lucien]] (son); [[character:simone|Simone]] (former partner, deceased)",
  sections:[
    {h:"Public face", p:[
      "Warm, charismatic, tired and genuinely inspiring, which is the danger. A Grand Seiko watch (a gift from Simone), a velvet jacket at the gala, a Porygon-Z projecting data on his study walls. He gave the sponsor speech at kickoff and complimented Nova's hair clip, and says people's names before they say them: he named Batiste's Guadeloupe report and Sora's father's shop at the gala."]},
    {h:"What the story shows him doing", list:[
      "Ordering Necrozma's capture and “yield” harvest: “Yield's up eleven percent. Good. Again.”",
      "Overriding a pause warning on February 11, then noting, “Asset 04 drew Dynamax energy at Euston. It can take it. Revisit.”",
      "Approving a GridSense beacon on the pole behind the Kealoha house.",
      "Tracking Lucien for two years, and writing in March 2025 that a son running from his father is always running toward something.",
      "Letting Nova come to him: the gala invitation, the pre-written “I'm so glad,” the Prism Core as a lure."]}
  ],
  relationships:[
    {id:"lucien", rel:"Son", note:"Tracked him for two years. “He's running with her.”"},
    {id:"nova", rel:"Target", note:"“There she is.” “I finally saw the key.”"},
    {id:"faure", rel:"Former colleague", note:"She built the band; she ran."},
    {id:"okonkwo-hale", rel:"Toasted by", note:"The Director raised a glass to him at the gala."},
    {id:"simone", rel:"Former partner", note:"They split in about 2017."}
  ],
  timeline:[
    {date:"Feb 1", text:"Necrozma escapes Lumen's containment.", ep:"EP01"},
    {date:"Feb 3", text:"Greets Nova at kickoff; compliments her clip.", ep:"EP03"},
    {date:"Feb 11", text:"Watches the Euston footage; decides to let her come to him.", ep:"EP09"},
    {date:"Feb 23", text:"Knows Lucien's balls are spoofed and lets them go.", ep:"EP19"},
    {date:"Feb 26", text:"Hosts the gala; the Prism Core pulls the light out of the room.", ep:"EP21"}
  ],
  quotes:["“Novalee. There you are.” — Verane","“He's not running from me anymore. He's running with her.” — Verane","“Continue. Record everything.” — E.V., February 11 log"]
});

// ───────────────────────── FAURE ─────────────────────────
WIKI.merge("characters","faure",{
  aka:"“Tante Mireille” (to Lucien)", affiliation:"Formerly Aether and Lumen Meridian (HR-01 containment)",
  sections:[
    {h:"Appearance and manner", p:[
      "Late fifties, a blunt chin-length gray bob, two pairs of glasses stacked on her face, an oatmeal Uniqlo cardigan with holes in the elbows, flannel pajama bottoms and sheepskin slippers at home, a pen behind her ear. Blunt, exact, and brave in a way she doesn't talk about."]},
    {h:"What she did", p:[
      "She was the containment engineer who built the black band around the Beast Ball. She watched Necrozma on Camera 3 for fourteen months. She built the band with a two-millimeter seam in its shielding so a little light could get in. She fled on February 3 with a drive of everything Lumen did, hid in a Montmartre maid's room and on a barge, and threw the drive to Nova on a rooftop: “Don't give it to anyone.” Her rule: three copies in three places before anyone opens the locked folders."]}
  ],
  relationships:[
    {id:"lucien", rel:"“Mon lion”", note:"A family friend who looked after him."},
    {id:"nova", rel:"Ally", note:"“You were not the fire, Nova. You were the wind he wanted to measure.”"},
    {id:"batiste", rel:"Protector", note:"Pays her rent in cash."},
    {id:"elias-verane", rel:"Former colleague", note:"Built the containment band for Lumen Meridian's Necrozma project before turning on it."},
    {id:"hollis", rel:"Former neighbor", note:"Hollis sat two desks from her for a year."}
  ],
  timeline:[
    {date:"Feb 3", text:"Flees HR-01 with the drive.", ep:"EP11"},
    {date:"Feb 19", text:"Found in a Montmartre maid's room.", ep:"EP15"},
    {date:"Feb 19–20", text:"Throws Nova the drive across the rooftops.", ep:"EP16"},
    {date:"Feb 23", text:"Spoofs Lucien's Poké Balls on the barge.", ep:"EP19"},
    {date:"Feb 27", text:"Makes three copies; confesses her 2 mm window to Necrozma.", ep:"EP22"},
    {date:"Mar 3–4", text:"Opens folder 07.", ep:"EP24"}
  ],
  quotes:["“I have seen drives fail. I have not seen one change its mind.” — Faure","“You were not the fire, Nova. You were the wind he wanted to measure.” — Faure"]
});

// ───────────────────────── NECROZMA ─────────────────────────
WIKI.merge("pokemon","necrozma",{
  sections:[
    {h:"Overview", p:[
      "Necrozma is #0800, Psychic type, the “Prism Pokémon”: seven-foot-ten and about 507 pounds. Long ago it was a being of pure light over Ultra Megalopolis, until the people there took its light. Since then it has been starving and in pain. Lumen Meridian caught it in Ultra Space in a Beast Ball and drained it as “Asset 04.” It is always “it”; Necrozma is genderless."]},
    {h:"Communication", p:[
      "It does not speak. Its glow is its mood and its prisms lock like hackles. Sounds: a low hum, *hmmm*, when content; a click, *tk*, for small acknowledgements; *krrrk* when in pain or agitated. Its feelings reach Nova as “bleed,” and its memories and dreams arrive as visions. In [[episode:EP20]] it chose to show her what it used to be: Ultra Necrozma, wings like a sun over a city of light."]},
    {h:"Abilities shown", list:[
      "Drains light from lamps, phones, streetlights, a whole floor, the Eiffel Tower's sparkle, and, at the gala, a Lumen display.",
      "Refracts light into rainbows when full.",
      "Charged a Prismatic Laser; has never fired it at anyone.",
      "A Psychic cushion that lowered Arthur the Corviknight safely to the ground.",
      "Pulled Dynamax energy out of a Gigantamax Corviknight, then vented the overload as a light pillar that opened a hole in the red sky ([[episode:EP08]]).",
      "Prism Armor, revealed at the gala ([[episode:EP21]])."]},
    {h:"Trust with Nova", list:[
      "It goes into the ball when asked: first for Mrs. Pryce's knock ([[episode:EP04]]), and reliably since.",
      "It comes out when called: the first time on the Rue des Rosiers roof ([[episode:EP11]]).",
      "It responds to her in a crisis ([[episode:EP08]]) and stays in the ball when she asks it to, even under strong pull ([[episode:EP13]], [[episode:EP16]]).",
      "It chooses to show her things: the lantern, “stay with you” ([[episode:EP09]]); Ultra Necrozma ([[episode:EP20]]); Verane in his lab ([[episode:EP21]]).",
      "Battle commands have never been given."]},
    {h:"Quirks", p:[
      "Drains phone batteries, follows sunlight, hates camera flashes, glitches Rotom-derived electronics, and reacts to the smell of Lucien (lab) and Lumen's people. It was embarrassed and proud about accepting light from Litwick. It bowed its head to Dani. It looked at Boogie's macaron. It looks at Sora “like it knows something,” and on March 3 pointed one arm east, toward Japan ([[episode:EP24]])."]}
  ],
  timeline:[
    {date:"Feb 1", text:"Breaks out of Lumen's containment and crashes behind the Kealoha house; a shard breaks off.", ep:"EP01"},
    {date:"Feb 7", text:"Sees real sunlight for the first time in a week at the Barbican.", ep:"EP05"},
    {date:"Feb 10", text:"Gives light to a starving Litwick.", ep:"EP06"},
    {date:"Feb 11", text:"Pulls the Dynamax energy out of a Corviknight on the Euston Road.", ep:"EP08"},
    {date:"Feb 12", text:"Conditionally registered; lets Nova keep the shard.", ep:"EP09"},
    {date:"Feb 13", text:"Bows its head to Dani.", ep:"EP10"},
    {date:"Feb 24", text:"Shows Nova what it used to be.", ep:"EP20"},
    {date:"Feb 26", text:"Bursts from the ball at the gala; remembers Verane's lab.", ep:"EP21"},
    {date:"Feb 27", text:"Pushes the shard back into Nova's hand; lowers its head to Faure's.", ep:"EP22"}
  ]
});

// ───────────────────────── LITWICK ─────────────────────────
WIKI.merge("pokemon","nova-litwick",{
  sections:[
    {h:"Overview", p:[
      "The smallest, crookedest runt of the Highgate Cemetery colony. When the others swarmed, it drifted to Nova's hair clip, and Necrozma pulsed its own glow so the little flame could catch. It tapped Nova's Poké Ball on its own. Like all of Nova's Pokémon, it has no nickname."]},
    {h:"Fighting style", p:[
      "Litwick loses head-on, so it wins by size, shadow and surprise: Smog, a dimmed flame, Astonish from behind. It learns from every loss. After Batiste's courtyard lesson in [[episode:EP13]] it began to hide in its own smoke, and watching La Lanterne's Chandelure shrink, hide and Hex a Mega Gyarados at the Mega Exhibition set the plan for Minimize."]},
    {h:"Abilities", p:["Flash Fire, shown at the gala when it absorbed Mara's Pyroar's Flamethrower ([[episode:EP21]]). Its other tricks, dimming its flame and shrinking, are things it can do rather than moves."]}
  ],
  moveHistory:[
    {move:"Ember", ep:"EP06", note:"Known when Nova caught it."},
    {move:"Astonish", ep:"EP06", note:"Known when Nova caught it."},
    {move:"Smog", ep:"EP08", note:"Learned in the smoke on the Euston Road."},
    {move:"Minimize", ep:"EP23", note:"Learned on March 1 after two hours of staring at a pillar candle."}
  ],
  battles:[
    {ep:"EP13", opponent:"[[pokemon:jax-pawmi|Jax's Pawmi]]", result:"Loss", note:"Forty-eight seconds, on the Champ de Mars, on a livestream."},
    {ep:"EP21", opponent:"[[pokemon:mara-pyroar|Mara's Pyroar]]", result:"Held", note:"Absorbed its Flamethrower: Flash Fire."},
    {ep:"EP23", opponent:"[[pokemon:iwanko|Iwanko]]", result:"Loss (training)", note:"Iwanko sniffed it out through Smog."},
    {ep:"EP23", opponent:"[[pokemon:jax-pawmi|Jax's Pawmi]]", result:"Win", note:"Minimize. “Litwick! Get small!”"}
  ],
  timeline:[
    {date:"Feb 10", text:"Chooses Nova at Highgate.", ep:"EP06"},
    {date:"Feb 11", text:"Learns Smog in the Euston Road smoke.", ep:"EP08"},
    {date:"Feb 24", text:"Watches the Mega Exhibition.", ep:"EP20"},
    {date:"Mar 1", text:"Learns Minimize and wins its first tactical battle.", ep:"EP23"},
    {date:"Mar 3", text:"Shrinks to a one-inch candle on Sora's birthday cake.", ep:"EP24"}
  ],
  quotes:["“LITWICK! GET SMALL!” — Nova"]
});

// ───────────────────────── IWANKO ─────────────────────────
WIKI.merge("pokemon","iwanko",{
  nature:"Impulsive",
  sections:[
    {h:"Overview", p:[
      "Sora's starter and the only Pokémon among the leads with a nickname: Iwanko is simply the Japanese name for Rockruff. It has Own Tempo, so it cannot be confused, and it is the kind of ability a Rockruff needs to eventually reach Dusk Form. It is fast, loyal and impulsive, kicks up dirt, and reads Sora's body language."]}
  ],
  moveHistory:[
    {move:"Tackle", ep:"EP03", note:""},
    {move:"Rock Throw", ep:"EP03", note:""},
    {move:"Sand Attack", ep:"EP11", note:"Learned in the Bois de Vincennes."}
  ],
  battles:[{ep:"EP23", opponent:"[[pokemon:nova-litwick|Nova's Litwick]]", result:"Win (training)", note:"Sniffed it out through Smog."}]
});

// ───────────────────────── EEVEE ─────────────────────────
WIKI.merge("pokemon","sora-eevee",{
  moves:["Quick Attack","Sand Attack","Baby-Doll Eyes","Covet","Bite"],
  sections:[
    {h:"Overview", p:[
      "A female Eevee the press called Le Fantôme, who outsmarted every trainer in Paris for a month. It walked right up to Nova, then chose Sora after he chased it for four hours in the Jardin du Luxembourg and never quit ([[episode:EP12]]). It stole his beanie with Covet and gave it back. It wears a small purple Kalos League scarf. In this world an Eevee decides for itself what it becomes."]}
  ]
});
