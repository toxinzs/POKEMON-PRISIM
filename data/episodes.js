// EPISODES. Add a new object to the end each time you release one.
// Fields: id ("EP01"), season (= arc number), num, title (English), jpTitle, romaji,
//   airDate (in-story date), summary (1-2 lines for lists),
//   story[] (the full text, one string per paragraph – optional), synopsis[] (recap, supports
//   [[character:id|label]], [[pokemon:id]], [[species:id]], [[location:id]], [[episode:id]]),
//   characters[], pokemon[], species[], locations[], trivia[], quotes[], image, added
WIKI.episodes.push(

  // ───────────── ARC 1 — STARFALL ─────────────

  { id:"EP01", season:1, num:1, title:"The Night the Star Fell", jpTitle:"星が落ちた夜", romaji:"Hoshi ga Ochita Yoru",
    airDate:"Feb 1, 2027",
    summary:"A Necrozma tears its way out of Ultra Space and crashes in the woods behind Nova's house the night before Encounter Day.",
    synopsis:[
      "In Ultra Space, a starving [[pokemon:necrozma|Necrozma]] breaks out of the Beast Ball it has been held in, burns the last of its light, and rips open a wormhole.",
      "In Denbigh, [[location:denbigh|Newport News]], it's a normal Monday night at the Kealoha house: nerves before Encounter Day, the Kealoha Crew group chat, and a good-luck voice memo from [[character:lani|Lani]]. Then the lights start to flicker, and the whole street goes dark.",
      "Following a falling light into the woods, [[character:nova|Nova]] finds a crater, a scorched blue-and-gold Beast Ball, and a huge, cracked black crystal Pokémon collapsing in the pine straw. When it retreats into the ball, she promises she won't open it or make it do anything. She keeps a glowing shard that broke off it and slides it into her hair.",
      "[[character:koa|Koa]]'s flashlight finds her in the dark as [[character:noa|Dad]]'s Dominion Energy truck pulls up out front."
    ],
    characters:["nova","lani","koa","noa","dani"], pokemon:["necrozma"], species:["necrozma"], locations:["ultra-space","denbigh"],
    trivia:["The series title card, POKÉMON: PRISM, appears in this episode.","Opens Arc 1, Starfall.","The shard Nova keeps becomes her signature hair clip."],
    quotes:["“I won't. I promise. I won't open it. I won't make you do nothing.” — Nova"],
    added:"2026-10-06" },

  { id:"EP02", season:1, num:2, title:"No One Came", jpTitle:"誰も来なかった", romaji:"Daremo Konakatta",
    airDate:"Feb 1–2, 2027",
    summary:"Nova lies her way through the night, and at Encounter Day every Pokémon in the reserve runs from her.",
    synopsis:[
      "[[character:nova|Nova]] talks her way past [[character:koa|Koa]] and her parents and sleeps two hours with a starving Legendary humming under her bed.",
      "At the Starter Reserve in [[location:newport-news-park|Newport News Park]], every single Pokémon takes one look at her and flees. She leaves with nothing and is listed as “no starter yet.” Reserve handler [[character:castillo|Dr. Luis Castillo]] has never seen anything like it, and writes it up as an anomaly.",
      "That night Nova draws the creature for the first time, a huge crystal shape with a girl holding a lantern beside it, and writes underneath: it's just tired. The ball's seam glows faintly, pushing light out instead of in. Far away, [[character:voss|Adrienne Voss]] studies a photo of a falling light over Newport News."
    ],
    characters:["nova","koa","dani","noa","castillo","voss"], pokemon:["necrozma"], species:["necrozma"], locations:["denbigh","newport-news-park"],
    trivia:["Castillo's anomaly note is the first thread that later leads the League to Nova."],
    quotes:["“it's just tired.” — Nova, in her sketchbook"],
    added:"2026-10-06" },

  { id:"EP03", season:1, num:3, title:"The Man Who Praised the Light", jpTitle:"光を褒めた男", romaji:"Hikari o Hometa Otoko",
    airDate:"Feb 3–6, 2027",
    summary:"Kickoff Day at CNU, a sponsor who notices Nova's hair clip, the flight to London, and the first meeting with Sora.",
    synopsis:[
      "Kickoff Day at [[location:cnu-annex|Christopher Newport University]]: gear issue, a League iPhone 17 Pro Nova didn't ask for, [[character:journee|Journee]]'s brand-new Pichu, and [[character:jax|Jax]]'s TikTok of Nova's empty-handed walk out of the reserve.",
      "Program sponsor [[character:elias-verane|Dr. Elias Verane]] of Lumen Meridian gives a warm speech, shakes Nova's hand, and stops to say how beautifully her hair clip catches the light.",
      "Nova flies out of Norfolk on the chaperoned group flight, gets a Legendary through Pokémon customs inside a ball the scanners read as empty and broken, and lands at [[location:heathrow|Heathrow]].",
      "There she meets her group partner [[character:sora|Sora Takeda]] of Tokyo, whose Rockruff [[pokemon:iwanko|Iwanko]] growls at her backpack. Sora pushes up his glasses: “So what's in the bag?”"
    ],
    characters:["nova","journee","jax","boogie","elias-verane","sora","dani","noa"], pokemon:["necrozma","iwanko","journee-pichu","waffle"], species:["necrozma","rockruff","pichu","growlithe"], locations:["cnu-annex","orf","heathrow"],
    trivia:["First appearance of Sora and Iwanko.","The pacing picks up here at the user's direction to reach the main story."],
    quotes:["“So what's in the bag?” — Sora"],
    added:"2026-10-06" },

  { id:"EP04", season:1, num:4, title:"Why Do They Run?", jpTitle:"なんで逃げるんだ？", romaji:"Nande Nigerun da?",
    airDate:"Feb 6, 2027",
    summary:"Nova lies to Sora's face, the League drops them at their Galar base, and a starving Necrozma stops waiting for a window.",
    synopsis:[
      "[[character:nova|Nova]] lies to [[character:sora|Sora]] and he lets her, for now. The League settles them at the [[location:argyle-street|League Galar Student House]] on Argyle Street in King's Cross.",
      "London is gray by 4:45 PM. Starving, [[pokemon:necrozma|Necrozma]] breaks out in Room 31 and drains the whole third floor's light: the lamp shatters, the ceiling cracks, and the door frame scorches.",
      "Sora sees it. When house manager [[character:pryce|Mrs. Pryce]] comes pounding on the door, he steps inside and shuts it behind them instead of leaving. Nova begs Necrozma to go back into the ball just until she's gone, and it does."
    ],
    characters:["nova","sora","pryce"], pokemon:["necrozma","iwanko"], species:["necrozma","rockruff"], locations:["heathrow","argyle-street"],
    trivia:["Sora is the first person to see Necrozma.","The cover story for the room damage becomes “an incident involving a Japanese adapter.”"],
    quotes:["“If I'm in here, she gon' think we the ones messing with the fuses. Which, I mean. We are.” — Sora"],
    added:"2026-10-06" },

  { id:"EP05", season:1, num:5, title:"A Secret for Just the Two of Us", jpTitle:"二人だけの秘密", romaji:"Futari Dake no Himitsu",
    airDate:"Feb 6–7, 2027",
    summary:"Mom's 10 PM FaceTime with a Legendary off-camera, and Necrozma's first real sunlight at the Barbican, just as somebody walks in.",
    synopsis:[
      "[[character:dani|Mom]]'s nightly FaceTime rings at 10 PM sharp, with [[pokemon:necrozma|Necrozma]] eight feet off-camera.",
      "[[character:sora|Sora]] sets an alarm for 5 AM. On Sunday morning, under the glass roof of the [[location:barbican|Barbican Conservatory]], Necrozma sees the sun for the first time in a week.",
      "Then a boy with an Absol walks in: [[character:lucien|Lucien]].",
      "Cutaway: in Virginia, [[character:elias-verane|Verane]] watches the signals, realizes it went to London, and orders the Barbican's CCTV pulled. He's been tracking his son's phone the whole time."
    ],
    characters:["nova","sora","dani","lucien","elias-verane"], pokemon:["necrozma","iwanko","absol"], species:["necrozma","rockruff","absol","porygon-z"], locations:["argyle-street","barbican","verane-residence"],
    trivia:["First appearance of Lucien and Absol.","The audience learns Verane tracks Lucien before Lucien does."],
    quotes:["“You see? He's helping me after all.” — Elias Verane, to a photograph"],
    added:"2026-10-06" },

  { id:"EP06", season:1, num:6, title:"First Mission! The Lights in the Cemetery", jpTitle:"初ミッション！ 墓地に灯る光", romaji:"Hatsu Misshon! Bochi ni Tomoru Hikari",
    airDate:"Feb 8–10, 2027",
    summary:"The first group mission takes Nova and Sora to Highgate Cemetery after dark, and a starving runt Litwick chooses Nova.",
    synopsis:[
      "Days of gray have [[pokemon:necrozma|Necrozma]] dimmer than ever. Then FieldHub drops Nova and Sora's first mandatory group mission: an after-dark Ghost-type survey at [[location:highgate|Highgate Cemetery]] with ecologist [[character:hale|Dr. Imogen Hale]] and her Dusclops.",
      "A Litwick colony of about fifty-two is drawn not to the researchers but to Nova, pulled toward the light-starved hole that is Necrozma. They swarm and drain. Hale goes down, and Sora fights them off with [[pokemon:iwanko|Iwanko]].",
      "Necrozma comes out on its own and the colony scatters, except for one tiny, dim runt. Nova cups it in her hands, and Necrozma, barely lit itself, pulses brighter for a second so the little flame catches. It is the first time Necrozma gives light instead of taking it.",
      "The [[pokemon:nova-litwick|Litwick]] taps Nova's Poké Ball itself. Sora's glasses logged it first, so he's furious: “That was my Litwick.” Hale wakes to a story about a flare from Waterlow Park, and her Dusclops won't stop staring at Nova's backpack."
    ],
    characters:["nova","sora","hale","jax"], pokemon:["necrozma","nova-litwick","iwanko","hale-dusclops"], species:["necrozma","litwick","rockruff","dusclops"], locations:["argyle-street","highgate"],
    trivia:["Nova's first catch and first registered Pokémon.","Hale's report becomes the second anomaly note with Nova's name on it."],
    quotes:["“That was my Litwick.” — Sora","“It's not starving anymore.” — Nova"],
    added:"2026-10-06" },

  { id:"EP07", season:1, num:7, title:"The Boy with the Name of Light", jpTitle:"光の名を持つ少年", romaji:"Hikari no Na o Motsu Shōnen",
    airDate:"Feb 11, 2027",
    summary:"Lucien finds Nova a roof with real sun, and asks the one question she isn't ready to answer.",
    synopsis:[
      "A text from an unknown number: found you a roof. 7am. bring your big lad. — L. With a clear sky for once, Nova goes without waking Sora.",
      "On a warehouse roof at [[location:shad-thames|Shad Thames]], [[pokemon:necrozma|Necrozma]] eats real sunlight while [[character:lucien|Lucien]] talks about Beast Balls like someone who's seen one built. He asks if she's seen the man who hurt it in her dreams, then: “Did he ever tell you his name?”",
      "Sora sprints across Tower Bridge, tracking her live location and swearing in two languages.",
      "Later, alone on a car park roof in Peckham, Lucien stares at a message on his phone, and [[pokemon:absol|Absol]] presses its horn against it like it's been waiting for him to notice."
    ],
    characters:["nova","sora","lucien"], pokemon:["necrozma","absol","iwanko"], species:["necrozma","absol"], locations:["shad-thames","peckham"],
    trivia:["Lucien's name comes from the Latin lux, “light.”"],
    quotes:["“Did he ever tell you his name?” — Lucien"],
    added:"2026-10-06" },

  { id:"EP08", season:1, num:8, title:"The Man in the Gray Coat", jpTitle:"灰色のコートの男", romaji:"Haiiro no Kōto no Otoko",
    airDate:"Feb 11, 2027",
    summary:"A Lumen Meridian man asks for Nova by name, then the sky over Galar turns red and Necrozma saves the Euston Road on a live stream.",
    synopsis:[
      "Back at Argyle Street, a friendly man in a charcoal overcoat, [[character:crale|Martin Crale]], is chatting with Mrs. Pryce. He's “from the sponsor, just following up,” and he smiles at Nova's hair clip.",
      "While Nova is finally telling [[character:batiste|Ms. Batiste]] the truth over the phone, the ground shakes, the sky goes red, and Pokémon all over London start Dynamaxing out of control: the Darkest Day.",
      "A Gigantamax Corviknight taxi thrashes over the [[location:euston-road|Euston Road]] with a man trapped in the carriage beneath it. Lucien's Corviknight catches the taxi. Sora throws himself over Nova as the giant bird dives.",
      "In front of a thousand phones and [[character:jax|Jax]]'s live stream, [[pokemon:necrozma|Necrozma]] pulls the Dynamax energy out of the Corviknight with its light, lowers it to the road, and vents the excess as a pillar that punches a hole in the red sky. Nova's palm is burned. That night, Adrienne Voss sits down across from her: “What did you find in the woods?”"
    ],
    characters:["nova","sora","lucien","batiste","crale","pryce","jax","okafor","voss"], pokemon:["necrozma","nova-litwick","absol","lucien-corviknight","iwanko"], species:["necrozma","corviknight","litwick"], locations:["argyle-street","euston-road","pancras-square"],
    trivia:["First on-screen use of Prismatic Laser, charged and then redirected.","Litwick learns Smog in the smoke of the Euston Road.","The cause of the Darkest Day is still unknown."],
    quotes:["“Y'ALL, LOOK! THAT'S NOVA KEALOHA IN THE ROAD! I'M LIVE!” — Jax","“Tell me, Miss Kealoha. What did you find in the woods?” — Adrienne Voss"],
    added:"2026-10-06" },

  { id:"EP09", season:1, num:9, title:"The Watched Star", jpTitle:"見張られた星", romaji:"Miharareta Hoshi",
    airDate:"Feb 11–12, 2027",
    summary:"Voss lays out what the League wants, Batiste flies in, Necrozma becomes Nova's official starter, and Verane watches the footage.",
    synopsis:[
      "In the League's [[location:pancras-square|Galar Division office]], [[character:voss|Voss]] walks Nova through everything she already knows: the aperture over Newport News, Castillo's note, the “empty” ball at Heathrow, the Barbican, Highgate. She identifies the Beast Ball, restricted Aether equipment, with a band someone else modified.",
      "[[character:batiste|Ms. Batiste]] lands at dawn and walks in like she owns the room, setting her terms with Voss. Nova asks the ball what it wants, and Necrozma answers on purpose for the first time: a picture of her lantern, and her. It wants to stay with her.",
      "Nova signs the conditional registration. Necrozma becomes her official, classified starter. The old band goes into evidence, and a URD tracking chip goes on the ball.",
      "Cutaway: at 3:41 AM in Williamsburg, [[character:elias-verane|Verane]] watches the Euston Road footage for the fortieth time. “It listens to her.” At Lumen Meridian, [[character:marisol|Marisol]] confirms a live mirror of the new chip's signal, “courtesy of source M.”"
    ],
    characters:["nova","sora","voss","batiste","okafor","rhys","elias-verane","marisol"], pokemon:["necrozma","nova-litwick","voss-metagross","batiste-staraptor"], species:["necrozma","metagross","staraptor"], locations:["pancras-square","verane-residence"],
    trivia:["Necrozma's first chosen communication: the lantern.","Necrozma climbs the trust ladder: it goes into the ball when asked."],
    quotes:["“It wants to stay with me.” — Nova","“It listens to her. We've been doing it wrong.” — Elias Verane"],
    added:"2026-10-06" },

  { id:"EP10", season:1, num:10, title:"The Day Mom Came", jpTitle:"母が来た日", romaji:"Haha ga Kita Hi",
    airDate:"Feb 13–14, 2027",
    summary:"Dani lands at Heathrow, Necrozma bows to her, the print on the old band leads to Kalos, and Nova chooses to keep going. Starfall ends.",
    synopsis:[
      "[[character:dani|Dani Kealoha]] comes straight from a shift in her scrubs. At Heathrow she checks Nova's burned hand before she hugs her, and thanks [[character:sora|Sora]] for throwing himself over her daughter.",
      "On the roof terrace, Dani looks [[pokemon:necrozma|Necrozma]] over like a patient: “Those are fractures.” She asks it to look after Nova like Nova looked after it, and Necrozma lowers its head all the way to hers.",
      "The lab pulls a partial print off the old band: [[character:faure|Dr. Mireille Faure]], Aether Europe, Lumiose, missing since February 3. [[character:voss|Voss]] is flying to Kalos. [[character:lucien|Lucien]] turns up at security with no phone. Voss unlocks his Absol's record, sees the surname Verane, and says nothing.",
      "Dani asks Nova what she wants. Nova chooses to go on. Dani's terms: Batiste goes the whole way, and a call every four hours. That night Nova turns off Papa K's Coleman lantern for the first time and sleeps in Necrozma's light. Across the street, Lucien watches the glow: “She turned off her lantern.”"
    ],
    characters:["nova","dani","sora","batiste","voss","lucien","okafor","rhys","callum"], pokemon:["necrozma","nova-litwick","iwanko","absol","voss-metagross"], species:["necrozma","absol"], locations:["heathrow","pancras-square","argyle-street"],
    trivia:["Final episode of Arc 1, Starfall.","Nova sleeps without her lantern for the first time since she was five."],
    quotes:["“That's my baby. That's my first baby.” — Dani","“I don't quit on nothing. You know I don't. You raised me.” — Nova","“Elle a éteint sa lampe.” (She turned off her lantern.) — Lucien"],
    added:"2026-10-06" },

  // ───────────── ARC 2 — CITY OF LIGHT ─────────────

  { id:"EP11", season:2, num:11, title:"Eurostar, to the City of Light", jpTitle:"ユーロスター、光の都へ", romaji:"Yūrosutā, Hikari no Miyako e",
    airDate:"Feb 14–16, 2027",
    summary:"Under the sea to Paris, a familiar face on a billboard, Necrozma comes when called, and Dani's goodbye.",
    synopsis:[
      "Cold open: in a maid's room in Montmartre, a frightened woman with a stack of hard drives watches the Euston Road footage over and over.",
      "The group takes the Eurostar from [[location:st-pancras|St Pancras]], through twenty minutes of total darkness under the Channel, to [[location:gare-du-nord|Gare du Nord]]. On a screen in the concourse: an ad for Lumen Meridian's Paris summit, and [[character:elias-verane|Verane]]'s smiling face. The ball goes ice cold. Sora: “That's him. Ain't it. The French fella.”",
      "They settle at the [[location:rue-des-rosiers|Kalos League guesthouse]] in the Marais. On the rooftop, Nova calls Necrozma into the dark, and for the first time it comes when she calls.",
      "[[character:dani|Dani]] flies home. She tells Sora to check on his Pokémon, and walks into security without looking back, then looks back."
    ],
    characters:["nova","sora","batiste","dani","voss","faure","elias-verane","brissac"], pokemon:["necrozma","nova-litwick","iwanko"], species:["necrozma"], locations:["montmartre","st-pancras","gare-du-nord","rue-des-rosiers"],
    trivia:["Opens Arc 2, City of Light.","Necrozma reaches trust-ladder step 2: it comes when called.","Sora's catch drought from Galar breaks in Paris."],
    quotes:["“If I look back, I'ma come back.” — Dani","“She looked back.” — Nova"],
    added:"2026-10-06" },

  { id:"EP12", season:2, num:12, title:"Who Will Eevee Choose?", jpTitle:"イーブイは誰を選ぶ？", romaji:"Ībui wa Dare o Erabu?",
    airDate:"Feb 17, 2027",
    summary:"Sora chases a wild Eevee for four hours, Nova just sits and draws, and Lucien finds a message from his Tante Mireille.",
    synopsis:[
      "In the [[location:jardin-luxembourg|Jardin du Luxembourg]], a wild Eevee that has outsmarted every trainer in Paris for a month runs [[character:sora|Sora]] ragged.",
      "[[character:nova|Nova]] sits on a bench with her sketchbook. Now that Necrozma is eating better, the Eevee is the first wild Pokémon that doesn't run from her, and it walks right up.",
      "Then it walks over and chooses Sora, the one who never quit. [[pokemon:sora-eevee|Eevee]] becomes his first main-team catch since Iwanko.",
      "Across the city, at 47 [[location:rue-de-passy|Rue de Passy]], a concierge recognizes [[character:lucien|Lucien]] as “the little lion” and gives him an envelope from his Tante Mireille: a used Métro ticket stamped Anvers and a postcard of Sacré-Cœur. On the back: Là où il fait nuit. Where it's dark."
    ],
    characters:["nova","sora","lucien"], pokemon:["sora-eevee","iwanko","nova-litwick","necrozma"], species:["eevee"], locations:["jardin-luxembourg","rue-de-passy"],
    trivia:["Sora had six catches going in."],
    quotes:["“Pour mon petit lion.” — Faure's envelope"],
    added:"2026-10-06" },

  { id:"EP13", season:2, num:13, title:"First Battle! Litwick vs. Pawmi", jpTitle:"初バトル！ ヒトモシ対パモ", romaji:"Hatsu Batoru! Hitomoshi tai Pamo",
    airDate:"Feb 18, 2027",
    summary:"Nova's first sanctioned battle, on Jax's livestream under the Eiffel Tower, ends in forty-eight seconds.",
    synopsis:[
      "On the [[location:champ-de-mars|Champ de Mars]] under the Eiffel Tower, with two hundred people watching and [[character:jax|Jax]] streaming, [[pokemon:nova-litwick|Litwick]] fights its first real battle against [[pokemon:jax-pawmi|Pawmi]].",
      "Nova battles it straight, the way the course taught her. Pawmi is fast and electric and dodges everything. It's over in forty-eight seconds.",
      "The clip goes everywhere. That night, Jax scrubs through the footage he didn't post, Nova crawling through the mud to pick up her smoking Litwick, and pins a comment over the laughing ones: she got that litwick 8 days ago. rematch whenever she wants."
    ],
    characters:["nova","sora","jax","bia"], pokemon:["nova-litwick","jax-pawmi","bia-fuecoco"], species:["litwick","pawmi","fuecoco"], locations:["champ-de-mars"],
    trivia:["Nova's first sanctioned battle, and first loss.","The TikTok hit 1.3 million views."],
    quotes:["“I'm sorry. I'm sorry. I'm so sorry.” — Nova","“yall act like you won your first one. rematch whenever she wants.” — Jax"],
    added:"2026-10-06" },

  { id:"EP14", season:2, num:14, title:"The Applin in the Backpack!", jpTitle:"リュックの中のカジッチュ！", romaji:"Ryukku no Naka no Kajicchu!",
    airDate:"Feb 19, 2027",
    summary:"Batiste starts training Litwick to fight smart, and Boogie shows up with a backpack that won't stop moving.",
    synopsis:[
      "In the foggy guesthouse courtyard, [[character:batiste|Ms. Batiste]] drills Nova and [[pokemon:nova-litwick|Litwick]] in a new way to fight: hide in the Smog, stay small, wait.",
      "[[character:boogie|Boogie]] turns up at the falafel line on the Rue des Rosiers with [[pokemon:waffle|Waffle]], a bag of macarons, and a backpack that won't stop moving. Inside is a tiny [[pokemon:boogie-applin|Applin]] nobody remembers catching, which Waffle keeps trying to eat. He's the first real friendly face from home Nova's seen in seventeen days.",
      "That night Batiste sends them out: “Bring the candle. Montmartre's dark.” Nova and Sora head for the Métro, Batiste follows at a distance, and her Staraptor wheels north toward Sacré-Cœur."
    ],
    characters:["nova","sora","batiste","boogie"], pokemon:["nova-litwick","waffle","boogie-applin","batiste-staraptor","sora-eevee","iwanko"], species:["applin","growlithe","staraptor","litwick"], locations:["rue-des-rosiers"],
    trivia:["First appearance of Boogie's Applin."],
    quotes:["“She's kinda scary.” “She's real scary.” “I like her.” “Me too.” — Sora and Nova"],
    added:"2026-10-06" },

  { id:"EP15", season:2, num:15, title:"The Darkness of Montmartre", jpTitle:"モンマルトルの暗闇", romaji:"Monmarutoru no Kurayami",
    airDate:"Feb 19, 2027",
    summary:"222 steps to Sacré-Cœur, a tiny room under a roof, and the video of a man's hand on the glass.",
    synopsis:[
      "Line 2 to Anvers, then 222 steps up to Sacré-Cœur, where [[character:lucien|Lucien]] is waiting with a cheap Nokia. Where it's dark leads into the back streets behind the basilica, to a maid's room at 7 Rue Gabrielle.",
      "[[character:faure|Dr. Mireille Faure]] has been hiding there two weeks with a hard drive over her heart. She finally says it: Lucien's father's people. Lumen Meridian.",
      "She plays a containment video. A man's hand rests on the ball. Lucien recognizes the watch, the Grand Seiko his mother saved a year to buy, and slides down the wall.",
      "Faure explains she built the black band, and built it to let a little light through so the Pokémon wouldn't go mad in the dark. Then [[pokemon:absol|Absol]] turns to the door. The stairwell light clicks on. Three sets of footsteps start climbing."
    ],
    characters:["nova","sora","lucien","faure"], pokemon:["necrozma","nova-litwick","absol","iwanko","sora-eevee"], species:["absol"], locations:["montmartre"],
    trivia:["Faure's band explains why the ball warmed near light all through Starfall."],
    quotes:["“That's a Grand Seiko. My mum bought him that.” — Lucien","“Mon lion.” — Faure"],
    added:"2026-10-06" },

  { id:"EP16", season:2, num:16, title:"Escape Over the Rooftops!", jpTitle:"屋根の上の逃走！", romaji:"Yane no Ue no Tōsō!",
    airDate:"Feb 19–20, 2027",
    summary:"Crale at the door, a chase across the frosted roofs of Montmartre, a hard drive thrown across the dark, and an invitation.",
    synopsis:[
      "[[character:crale|Martin Crale]] knocks politely: Elias isn't angry. They go out the round window onto the frosted zinc rooftops of [[location:montmartre|Montmartre]].",
      "[[character:batiste|Batiste]]'s Staraptor dives out of the night and fights Lumen's Honchkrow over the dome of Sacré-Cœur. [[pokemon:lucien-corviknight|Lucien's Corviknight]] can only carry two, so he flies Faure out, and she throws the drive across the gap to Nova: “It trusts you! Don't give it to anyone!” Crale watches it land in Nova's hands and smiles: “Even better.”",
      "Next morning, Lucien texts from the Nokia that Faure is safe and Absol's leg is hurt but will heal. Then, on all three phones at once, an invitation from Lumen Meridian Europe to Nova by name, cc'ing Sora and Batiste, with a personal note from E.V. about her remarkable hair clip.",
      "Sora says they're not going. Batiste asks Nova what she thinks."
    ],
    characters:["nova","sora","lucien","faure","batiste","crale"], pokemon:["necrozma","nova-litwick","absol","lucien-corviknight","batiste-staraptor","lumen-honchkrow","iwanko","sora-eevee"], species:["corviknight","staraptor","honchkrow"], locations:["montmartre","rue-des-rosiers"],
    trivia:["Absol is injured in the escape.","Staraptor takes a cut along one wing from the Honchkrow fight."],
    quotes:["“YOU! It trusts YOU! DON'T GIVE IT TO ANYONE!” — Faure","“...Even better.” — Martin Crale"],
    added:"2026-10-06" },

  { id:"EP17", season:2, num:17, title:"The White Rooms of the Aether Foundation", jpTitle:"エーテル財団の白い部屋", romaji:"Ētēru Zaidan no Shiroi Heya",
    airDate:"Feb 20–22, 2027",
    summary:"An encrypted drive, scrubbed labs at Aether Europe, the real legend of Ultra Megalopolis, and an archive file from August 2019.",
    synopsis:[
      "Cold open: the drive is encrypted. The password hint, in French, is “where the lion ate the bread.”",
      "[[character:voss|Voss]] takes Nova into the [[location:la-defense|Aether Europe tower]] at La Défense for the joint investigation. Director [[character:laval|Dr. Henri Laval]]'s Gardevoir feels Necrozma's pain. [[character:callahan|Dr. Callahan]] is too helpful, the inventory is spotless, and Faure's lab has been wiped and freshly painted.",
      "Nova finally hears the true legend of Ultra Megalopolis from someone who isn't a dream, and it matches the dreams exactly. Sora's cracked glasses catch an archive file on a lab screen, K-19-0812, an Ultra energy signature from a mountain in Hachiōji in August 2019.",
      "After they leave, Callahan calls someone. Nova favored her left foot all morning. The Takeda boy asked who led the 2019 field team. And her niece Wren, she suspects, is on their side."
    ],
    characters:["nova","sora","voss","batiste","laval","callahan"], pokemon:["necrozma","laval-gardevoir","voss-metagross"], species:["necrozma","gardevoir"], locations:["rue-des-rosiers","la-defense"],
    trivia:["First hard link between Necrozma's story and Sora's Mt. Takao night."],
    quotes:["“I think she's on their side.” — Dr. Callahan, about Wren"],
    added:"2026-10-06" },

  { id:"EP18", season:2, num:18, title:"A Little Night Sky", jpTitle:"小さな夜空", romaji:"Chiisana Yozora",
    airDate:"Feb 23, 2027",
    summary:"Sora tells the whole story of Mt. Takao for the first time, they find Lucien, and the drive opens.",
    synopsis:[
      "At dawn on the guesthouse roof, under the first clear sky in four days, [[character:sora|Sora]] tells Nova everything about Mt. Takao: the cedars, the Perseids, the light that led him home. It's the first time he's told anyone.",
      "They solve the password and find [[character:lucien|Lucien]] and [[character:faure|Faure]] on the barge [[location:clair-de-lune|Clair de Lune]] at the Bassin de la Villette.",
      "The drive opens: Capture, Containment video, Yield logs, Band spec, Facility plans, LEAGUE_CONTACT_M, GALAR_PILOT, and 08_SUIVI_L.V. Suivi means tracking. L.V. is Lucien Verane, modified February 1.",
      "Faure begs him to wait. Lucien double-clicks."
    ],
    characters:["nova","sora","lucien","faure"], pokemon:["necrozma","absol","iwanko","sora-eevee"], species:["necrozma","cosmog"], locations:["rue-des-rosiers","clair-de-lune"],
    trivia:["Cosmog, the light Sora saw in 2019, is listed for its connection to his story; it has not appeared on screen."],
    quotes:["“Mon lion. Attends. Pas celui-là.” (My lion. Wait. Not that one.) — Faure"],
    added:"2026-10-06" },

  { id:"EP19", season:2, num:19, title:"I Thought I'd Run Away", jpTitle:"逃げたつもりだった", romaji:"Nigeta Tsumori Datta",
    airDate:"Feb 23, 2027",
    summary:"Two years of GPS logs, a pin on every place Lucien hid, and his father's note. This time he doesn't run.",
    synopsis:[
      "The tracking folder holds two years of GPS logs and a map with a pin on every place [[character:lucien|Lucien]] thought he was hiding: the Barbican, Shad Thames, Montmartre, this barge. And a note in his father's hand.",
      "His father didn't lose him. He let him go, and followed. Lucien finally knows. This time he doesn't run.",
      "Outside on the canal, Lumen operative [[character:mara|Mara]] and her Honchkrow watch the barge. [[character:elias-verane|Verane]] tells her the Absol signal is a recording, Faure's work, and to let them go. “He's not running from me anymore. He's running with her. And she is coming to me on Friday.”"
    ],
    characters:["lucien","nova","sora","faure","mara","elias-verane"], pokemon:["absol","lumen-honchkrow","lucien-corviknight"], species:["absol","honchkrow"], locations:["clair-de-lune"],
    trivia:["Lucien learns his father has been tracking him since before February."],
    quotes:["“He's not running from me anymore. He's running with her.” — Elias Verane"],
    added:"2026-10-06" },

  { id:"EP20", season:2, num:20, title:"The Invitation", jpTitle:"招待状", romaji:"Shōtaijō",
    airDate:"Feb 24, 2027",
    summary:"A 2 AM argument over the drive, a night at the Mega Evolution Exhibition, a vision of what Necrozma used to be, and Nova's answer.",
    synopsis:[
      "At 2 AM in a rented flat on the [[location:rue-de-lancry|Rue de Lancry]], Faure refuses to let anyone open M or GALAR_PILOT until there are three copies in three places. Lucien warns that the gala isn't a trap: his father won't grab Nova, he'll talk to her, and he's very good at talking.",
      "[[character:batiste|Batiste]] calls it: tomorrow, everyone has fun. Four tickets to the sold-out Kalos League Mega Exhibition at [[location:accor-arena|Accor Arena]], with [[character:boogie|Boogie]], crêpes, and Jax one section over.",
      "In the main event, [[character:marchand|Élodie Marchand]], “La Lanterne,” beats a Mega Gyarados with a Chandelure using smog, a dimmed flame, Will-O-Wisp, Minimize and Hex, then Mega Evolves it. [[pokemon:nova-litwick|Litwick]] rises into the air, flame roaring, and the Chandelure nods to it. In Nova's pocket, Necrozma shows her what it used to be: Ultra Necrozma, wings like the sun over a city of light. “I'ma give it back to you.”",
      "Sora realizes none of his Pokémon can Mega Evolve; Lucien hints at Alola's crystals. Walking home along the Seine, Nova says she's going to the gala, and asks Sora to come. She taps RSVP. The reply is instant, already written: I'm so glad. — E.V. Necrozma drinks the Eiffel Tower's sparkle on the quay. Two days until Friday."
    ],
    characters:["nova","sora","lucien","batiste","faure","boogie","jax","bia","marchand","reid"], pokemon:["necrozma","nova-litwick","sora-eevee","iwanko","absol","waffle","boogie-applin","jax-pawmi","bia-fuecoco","marchand-chandelure","reid-gyarados"], species:["necrozma","litwick","chandelure","gyarados","eevee","applin","pawmi","fuecoco","growlithe"], locations:["rue-de-lancry","accor-arena","quai-tournelle"],
    trivia:["First Mega Evolution seen in person by the main cast.","Necrozma shows Nova its true form on purpose.","Litwick watched the exact playbook it will use later: Smog, a dimmed flame, Minimize, Hex."],
    quotes:["“That's us.” — Nova, watching La Lanterne","“None of my Pokémon can Mega Evolve. Ever.” — Sora","“I'ma give it back to you. All of it.” — Nova, to Necrozma"],
    added:"2026-10-06" },

  { id:"EP21", season:2, num:21, title:"Who Does the Light Belong To?", jpTitle:"光は誰のもの", romaji:"Hikari wa Dare no Mono",
    airDate:"Feb 26, 2027",
    summary:"The Grand Palais gala. Verane greets Nova by name, the Prism Core pulls every scrap of light out of the room, and Lucien says, “Hello, Papa.”",
    synopsis:[
      "At the [[location:grand-palais|Grand Palais]], Lumen Meridian Europe's “Light Belongs to Everyone” gala. [[character:nova|Nova]] wears a black Sézane dress, [[character:sora|Sora]] wears Madame Brissac's late husband's navy suit, [[character:batiste|Batiste]] wears green velvet, and [[character:voss|Voss]] wears a navy gown with her Metagross bracelet and a Key Stone. [[character:elias-verane|Dr. Verane]] greets Nova with “Novalee. There you are.” and names Batiste (Guadeloupe, 2019) and Sora (Takeda Auto Works). [[character:okonkwo-hale|Director Okonkwo-Hale]] toasts him.",
      "Then the Prism Core pulls every bit of light out of the room. The Beast Ball's node turns red and tears out of Nova's pocket, and [[pokemon:necrozma|Necrozma]] bursts out with Prism Armor. Nova says “Dr. Elias Verane” out loud, and Necrozma's memory answers: There she is. In the memory, from Necrozma's side of Verane's lab, a voice says, “Yield's up eleven percent. Good. Again.”",
      "[[character:mara|Mara]] (Honchkrow, [[pokemon:mara-pyroar|Pyroar]]), [[character:theo|Theo]] ([[pokemon:theo-houndoom|Houndoom]], [[pokemon:theo-liepard|Liepard]]) and [[character:crale|Crale]] attack. [[pokemon:nova-litwick|Litwick]] absorbs Pyroar's Flamethrower, and Batiste names what it did: Flash Fire. [[pokemon:wren-dreepy|Dreepy]]'s Astonish, [[pokemon:jax-pawmi|Pawmi]]'s Thunder Shock and [[pokemon:sora-eevee|Eevee]]'s new Bite all help, and Voss's Mega Metagross cracks the Prism Core with Meteor Mash. Voss holds a door for six minutes and is arrested without resisting. She chose Nova.",
      "[[character:lucien|Lucien]] drops from the glass roof, with [[pokemon:lucien-zoroark|Zoroark]] filling the room with hundreds of Novas. “Hello, Papa.” Afterward, in a pavilion, Nova and Lucien share a hug: “You said his name.” “And you said ‘hello, Papa.’” Nova also gives [[character:dani|Dani]] her first honest “When I can, Mama.”",
      "In the tag, a shaken Verane says:“…He let her out… And she's fourteen… I finally saw the key.”",
      "Afterward, in the back of a black Peugeot 508 on the Quai d'Orsay, [[character:okonkwo-hale|the Director]] tells [[character:voss|Voss]] he hired her ten years and four months ago, takes the Key Stone from her silver cuff (“Metagross stays registered to you”) and warns her that Nova will soon need someone she trusts: “Make sure it isn't you, Adrienne. You'll only hurt her.” Voss tells him the Prism Core was a lure, and that someone opened a mirror on the Beast Ball's feed at 20:59:29 under credential DIR.01."
    ],
    characters:["nova","sora","lucien","batiste","voss","elias-verane","okonkwo-hale","mara","theo","crale","wren","jax","dani"],
    pokemon:["necrozma","nova-litwick","sora-eevee","lucien-zoroark","voss-metagross","wren-dreepy","jax-pawmi","lumen-honchkrow","mara-pyroar","theo-houndoom","theo-liepard"],
    species:["necrozma","litwick","metagross","zoroark-hisui","pyroar","houndoom","liepard","eevee","pawmi","dreepy","honchkrow"],
    locations:["grand-palais"],
    trivia:["Necrozma's ability, Prism Armor, is revealed on the page.","Litwick's ability, Flash Fire, is revealed.","Eevee learns Bite.","Nova gets a memory of Verane's lab from Necrozma's side.","Okonkwo-Hale is not the same person as Dr. Imogen Hale."],
    quotes:["“Novalee. There you are.” — Elias Verane","“Yield's up eleven percent. Good. Again.” — from Necrozma's memory","“Hello, Papa.” — Lucien","“When I can, Mama.” — Nova","“…I finally saw the key.” — Elias Verane"],
    added:"2026-10-06" },

  // ───────────── EPISODES 22–25 ─────────────

  { id:"EP22", season:2, num:22, title:"Three Copies", jpTitle:"三つのコピー", romaji:"Mittsu no Kopī",
    airDate:"Feb 26–27, 2027",
    summary:"A lighthouse on a pole in Denbigh, three copies of Faure's evidence, a locked archive nobody can break, and a ten o'clock meeting that ends with an approved trip to Kanto.",
    synopsis:[
      "Friday night, after the gala. Nova, Sora, Wren, Lucien and Batiste ride east across Paris to [[character:brissac|Madame Brissac]]'s, where Nova tells her parents on FaceTime who the sponsor really is: Dr. Verane of Lumen Meridian. [[character:noa|Noa]] recognizes Lumen's GridSense boxes, the ones his utility subcontract installed on Denbigh circuits, and realizes the box on the pole behind their house vanished the night it blew. In Nova's room [[pokemon:necrozma|Necrozma]], fed on every lamp, pushes the shard back into her hand.",
      "At [[location:rue-de-lancry|Flat 5G]], [[character:faure|Faure]] mounts the 412 GB encrypted volume (password: MIETTE, the name of her [[pokemon:miette|Fletchinder]]). A GridSense document shows pole 4471-C was anchor B-07, a beacon keyed to Necrozma's cradle, “a lighthouse,” prepared by R. Hollis and approved by E.V. [[character:callahan|Callahan]] is turned away at the guesthouse and phones a Manhattan number, and [[character:wren|Wren]] texts Nova that she's coming to the meeting. The first copy fails verification at 11:52 PM with an I/O error that Faure says a flash drive shouldn't have: “I have seen drives fail. I have not seen one change its mind.”",
      "Faure confesses to Necrozma about the two-millimeter window she built into its band. By 2:53 AM there are three drives: 1 — Paris — R.B., 2 — Hachiōji — K.T., 3 — Virginia — K.K. Folder 06, LEAGUE_CONTACT_M, holds an AES-256 archive sealed with a key held by E.V. and M. only. [[character:lucien|Lucien]] says out loud that he could walk up to his father and ask; Nova asks him to knock on her door first.",
      "Saturday, 10 AM, the Salle des Tapisseries on [[location:rue-de-varenne|Rue de Varenne]]. The Director names himself interim liaison. Callahan claims the Beast Ball for Aether, and lawyer [[character:duvivier|Duvivier]] says that would void Condition Two and lapse the registration. [[character:ashby|Ashby]] cites Article 11 of the Student Field Program Charter, and [[character:dani|Dani]] makes the lawyer admit a review panel takes “weeks.” Then [[character:laval|Dr. Laval]], called at 7 AM by Wren, walks in, proves Callahan wrote the claim herself at 00:51, withdraws it, loans the ball to Nova, and puts Callahan on leave.",
      "The Director then pushes through an amendment approving Nova's trip to Kanto for mission MSN-KT-0311, with firmware telemetry and a daily video check-in. Dani's four handwritten conditions go into the margin. Sora had already pressed Accept on the mission without telling Nova; she signs with a star over the i. In the tag, [[character:voss|Voss]], suspended in a Bercy hotel room, reads the executed amendment and an old notebook entry: Takao, August 12, 2019, field lead T.O-H. “No. Not Takao.”"
    ],
    characters:["nova","sora","lucien","batiste","wren","faure","brissac","dani","noa","ashby","okonkwo-hale","voss","callahan","laval","duvivier","hollis","elias-verane"],
    pokemon:["necrozma","nova-litwick","wren-dreepy","aurore","miette","voss-metagross","ashby-slowbro","laval-gardevoir","sora-eevee","iwanko"],
    species:["necrozma","meowstic","fletchinder","slowbro","arcanine","gardevoir","metagross"],
    locations:["rue-des-rosiers","rue-de-lancry","rue-de-varenne","pullman-bercy","denbigh"],
    trivia:["First time Nova tells her parents the sponsor's name.","GridSense is introduced: Lumen beacons keyed to the Beast Ball's cradle, with Denbigh chosen for “low population density.”","Madame Brissac's first name is Solène; her late husband is Henri.","Nothing in the episode explains why Faure's drive “changed its mind” at block 271,844,352.","Kanto mission MSN-KT-0311 is first posted here: Takao Ranger Station, Hachiōji, starting March 20, 2027 (¥60,000 plus a Ranger certificate)."],
    quotes:["“It ain't pick nothing. He aimed it. At a pole.” — Nova","“I have seen drives fail. I have not seen one change its mind.” — Faure","“I understand. That's why I did it.” — Wren","“That man just got everything he wanted, and he lost twice.” — Batiste","“You don't get to go up that mountain without the first person you told.” — Nova, to Sora"],
    added:"2026-10-08" },

  { id:"EP23", season:2, num:23, title:"Get Small, Litwick!", jpTitle:"小さくなれ、ヒトモシ！", romaji:"Chiisaku Nare, Hitomoshi!",
    airDate:"Feb 27 – Mar 1, 2027",
    summary:"A candle, a firmware update, a stolen Zoroark, and a rematch on the gravel where Litwick lost in forty-eight seconds.",
    synopsis:[
      "Litwick stares at an IKEA pillar candle for two hours, trying to do what La Lanterne's Chandelure did at Bercy. At the first 9 AM video check-in, Nova names Sora as present, as her mother's rule requires, and the Director thanks her for telling him. He also announces that firmware v3.0 will install on the Beast Ball after midnight.",
      "Sunday afternoon at Buttes-Chaumont, [[pokemon:iwanko|Iwanko]] sniffs a dimmed [[pokemon:nova-litwick|Litwick]] out through Smog and wins the training bout. [[character:lucien|Lucien]] explains the trick: “You don't hide the whole Pokémon. You make it smaller than where they're looking.” Pressed about his third Pokémon, he finally shows them [[pokemon:lucien-zoroark|a Hisuian Zoroark]] he freed from his father's annex at Lac d'Annecy last November. [[character:jax|Jax]] posts a rematch challenge on TikTok.",
      "At 12:47 AM the firmware installs, the ball's node strobes white for twelve seconds, and its pulse jumps from one a second to two. On Monday at 6:13 PM on the gravel of the [[location:champ-de-mars|Champ de Mars]], Litwick finally learns Minimize. Jax's Pawmi uses Charge to light its smog shadow, but a pea-sized Litwick still wins. “Good battle, Kealoha.” “Good battle, Reyes.”",
      "In the tag, in Hidenwood, Virginia, [[character:papa-k|Papa K]] signs for a DHL package from Paris and locks the third drive in his gun safe beside a velvet ring box."
    ],
    characters:["nova","sora","lucien","jax","bia","boogie","batiste","okonkwo-hale","papa-k","kennedy"],
    pokemon:["necrozma","nova-litwick","iwanko","lucien-zoroark","jax-pawmi","waffle","boogie-applin","bia-fuecoco","absol","sora-eevee"],
    species:["litwick","rockruff","zoroark-hisui","pawmi","necrozma"],
    locations:["rue-des-rosiers","buttes-chaumont","champ-de-mars","hidenwood","annecy-annex"],
    trivia:["Litwick learns Minimize, its fourth move after Ember, Astonish and Smog.","The firmware v3.0 update changes the Beast Ball's node pulse from one to two per second.","Lucien's Zoroark is unregistered and unnamed by his choice.","Kennedy Price is mentioned for the first time as heading to Paris from Madrid."],
    quotes:["“You don't hide the whole Pokémon. You make it smaller than where they're looking.” — Lucien","“LITWICK! GET SMALL!” — Nova","“I prepped for the dim trick. I prepped hard. I ain't prep for that. Good battle, Kealoha.” — Jax","“Small things survive.” — Batiste","“Not scared of the dark anymore, huh.” — Papa K"],
    added:"2026-10-08" },

  { id:"EP24", season:2, num:24, title:"Happy Birthday, Sora", jpTitle:"誕生日おめでとう、ソラ", romaji:"Tanjōbi Omedetō, Sora",
    airDate:"Mar 2–4, 2027",
    summary:"A stolen cake, a failed catch, a box from Hachiōji with a photograph in it, and a spreadsheet that proves who ignored the warning.",
    synopsis:[
      "Sora's phone fills with LINE birthday messages at midnight Tokyo time, including a bare “16.” from his dad. At the 9 AM check-in the Director wishes him a happy birthday, which unsettles both kids; he knew from the registration file. [[character:brissac|Madame Brissac]] bakes a hubcap-sized kouign-amann, and a wild [[pokemon:morpeko|Morpeko]] steals it. Sora chases it through the Marais and onto a Line 1 platform at Saint-Paul, where it turns Hangry and escapes. His Poké Ball wiggles three times, then bursts. [[character:mercier|Brigadier Mercier]] gives him a written warning and a fifty-euro fine: “There are no gray areas on the Paris Métro, monsieur. Only RATP.”",
      "Back at the house, a box from Hachiōji: an omamori from Yakuōin, the keys to a red Honda Super Cub his father rebuilt, a note saying he can take the moped test now that he's sixteen, and a 2019 print of Takao at night. A Perseid streak cuts across the sky; low over the ridge is a violet-blue smudge. Sora's glasses match it to his log entry #0001 and to Aether's K-19-0812, six minutes before the aperture. “It was there from the start.”",
      "At the party, [[pokemon:nova-litwick|Litwick]] shrinks to a one-inch candle on the cake and won't be blown out. Gifts: a PSG scarf from Boogie, a camera strap and a documentary coupon from Jax and Bia, a dried Flabébé flower from Wren, a Michelin map with “NO” written across central Paris from Lucien, Batiste's old Ranger Union patch “for Takao,” and Nova's drawing of eight-year-old Sora on the mountain, a violet footprint trail leading home: “I believe you. — N.”",
      "On the roof, [[pokemon:necrozma|Necrozma]] points one arm east, toward Japan. Lucien's Nokia buzzes: Faure has opened folder 07. After midnight, the Galar Pilot log from February 11 shows a Lumen operator recommending a pause when Asset 04 appeared over Euston, and “E.V.” writing, “Continue. Record everything.” Three hundred people ended up in hospital. The last line: “Asset 04 drew Dynamax energy at Euston. It can take it. Revisit.”"
    ],
    characters:["nova","sora","lucien","batiste","wren","faure","brissac","jax","bia","boogie","okonkwo-hale","mercier","hollis","elias-verane"],
    pokemon:["nova-litwick","iwanko","sora-eevee","morpeko","necrozma","mercier-mightyena","jax-pawmi","waffle","boogie-applin","bia-fuecoco","absol","wren-dreepy","gwilym"],
    species:["morpeko","mightyena","litwick","flabebe","necrozma","snorlax"],
    locations:["rue-des-rosiers","saint-paul-metro","rue-de-lancry","mt-takao"],
    trivia:["Sora turns sixteen on March 3, 2027.","His catch count remains seven after the Morpeko gets away.","The glow in the Takao photograph is six minutes earlier than the Aether aperture time; the glasses tag it “Cosmog?” as an unverified guess.","Sora counts “twenty days” to Takao from March 3; it is seventeen.","The Galar Pilot log is the first record that the Darkest Day followed an overridden pause."],
    quotes:["“‘Not listed’ don't mean ‘no.’ It means ‘not listed.’ That's a legal gray area.” — Sora","“It was already there. Before I got lost. It was right there on the ridge, and my pops took a picture of the meteor, and it was in the corner, and nobody ever looked.” — Sora","“I just figured if it was trying to get you home, it'd make it easy.” — Nova","“You were not the fire, Nova. You were the wind he wanted to measure.” — Faure","“He's not trying to give it back its light. He never was. He wants to see how much it can hold.” — Lucien"],
    added:"2026-10-08" },

  { id:"EP25", season:2, num:25, title:"The Rival Arrives!", jpTitle:"ライバル、来たる！", romaji:"Raibaru, Kitaru!",
    airDate:"Mar 4, 2027",
    summary:"Kennedy Price takes a personal day in Paris, the whole cohort shows up on one video call, and Journee's three-week-old voice memo finally gets played.",
    synopsis:[
      "[[character:kennedy|Kennedy Price]] lands at Orly from Madrid with [[character:tobi|Tobi Adeyemi]], her Riolu on her shoulder, and a screenshot of Jax's comment on her phone: “sit down ken.” Meanwhile Nova gets through Day 5 of the 9 AM check-in with her face perfectly still, though she's had four hours of sleep and has been reading “Continue. Record everything.” on a loop.",
      "At 2 PM Calvin Ashby hosts the cohort's monthly town hall on Teams: [[character:journee|Journee]] in Edinburgh, [[character:tariq|Tariq]] in Cairo, [[character:ayanna|Ayanna]] in Rio, [[character:tae|Tae]] in Sydney, [[character:mariah|Mariah]] in Manila, [[character:isaiah|Isaiah]] in Reykjavík, [[character:brielle|Brielle]] in Cape Town and [[character:caleb|Caleb]] in Vancouver. He reads out the police warning without naming Sora, calls Kennedy's February the best in program history, and asks why her location says Paris. Kennedy says she has “some business.” Café Charlot is a four-minute walk from Maison Brissac.",
      "Kennedy knocks. In the front hall she tells Nova she doesn't care about the rock or the rain; she cares whether Nova can battle. Riolu is a Fighting type and Litwick a Ghost, which Kennedy says is what makes it fair. She wants a sanctioned battle on Saturday at 10 AM. Nova agrees. Kennedy leaves with a message for Batiste about her old feedback sheet: “Fast is not the same as finished.”",
      "At night Nova opens Journee's February 13 voice memo at last. Journee's stairwell message ends: “You finally got something that's yours.” Nova writes back, and Journee answers within seconds with twenty-three hearts and one order: beat Kennedy Price."
    ],
    characters:["nova","sora","wren","kennedy","tobi","journee","mj-park","ashby","jax","bia","boogie","okonkwo-hale","brissac","tariq","ayanna","tae","mariah","isaiah","brielle","caleb"],
    pokemon:["nova-litwick","kennedy-riolu","tobi-charcadet","journee-pichu","wren-dreepy","ashby-slowbro","sora-eevee","tariq-sandile","ayanna-pikipek","tae-wooper","mariah-wingull","isaiah-snom","brielle-skwovet","caleb-pidgey","necrozma"],
    species:["riolu","charcadet","pichu","slowbro","litwick","sandile","pikipek","wooper","wingull","snom","skwovet","pidgey"],
    locations:["orly","rue-des-rosiers","cafe-charlot"],
    trivia:["First episode to show the wider Hampton Roads cohort across the world on one call (34 participants).","Kennedy Price: nine sanctioned wins, six missions in February, a 98.6 on Batiste's written assessment.","Journee's voice memo had been waiting unplayed since February 13.","Kennedy's partner and Journee's partner are both introduced by name here."],
    quotes:["“Run it.” — Kennedy","“'Cause that's what makes it fair.” — Kennedy","“I wanted to say ‘revisit’ to his face so bad.” — Nova","“You finally got something that's yours.” — Journee, in her voice memo"],
    added:"2026-10-08" }
);
