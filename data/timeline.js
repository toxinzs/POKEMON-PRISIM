// TIMELINE. One row per dated event, in order. Rows with the same `era` are grouped together.
// Fields: era, date, text (supports [[type:id|label]] links), ep (episode id, optional), upcoming (true if announced but not yet on the page)
WIKI.timeline.push(

  // ── BACKSTORY ──
  { era:"Before the story", date:"Long ago", text:"Necrozma loses its light to the people of Ultra Megalopolis." },
  { era:"Before the story", date:"~2017", text:"[[character:elias-verane|Elias Verane]] and [[character:simone|Simone]] split; Lucien grows up with his mother in London." },
  { era:"Before the story", date:"Aug 12, 2019", text:"Eight-year-old [[character:sora|Sora]] is lost on [[location:mt-takao|Mt. Takao]] during the Perseids. His father photographs a meteor at 22:41 JST with a soft violet-blue glow low over the ridge. At 22:47 JST a Class 1 aperture opens; the field lead is later listed as T.O-H.", ep:"EP18" },
  { era:"Before the story", date:"~2025", text:"Simone dies; Lucien is sent to live with his father. Several BB-series Beast Balls go missing from a Kalos facility." , ep:"EP22" },
  { era:"Before the story", date:"Sep 14, 2026", text:"Lumen Meridian's GridSense Array B (Denbigh, Newport News) receiving-lattice document, rev. 3.", ep:"EP22" },
  { era:"Before the story", date:"Nov 2026", text:"[[character:lucien|Lucien]] frees a Hisuian Zoroark from his father's annex at Lac d'Annecy.", ep:"EP23" },

  // ── ARC 1 ──
  { era:"Arc 1 — Starfall", date:"Mon, Feb 1, 2027 · 9:39 PM", text:"[[pokemon:necrozma|Necrozma]] breaks out and crashes behind the Kealoha house in Denbigh. The GridSense anchor on pole 4471-C goes offline.", ep:"EP01" },
  { era:"Arc 1 — Starfall", date:"Tue, Feb 2", text:"Encounter Day: every Pokémon in the Starter Reserve runs from Nova. At 06:14 someone locks the M liaison archive.", ep:"EP02" },
  { era:"Arc 1 — Starfall", date:"Feb 3–4", text:"Kickoff Day at CNU. [[character:elias-verane|Verane]] gives the sponsor speech and compliments Nova's hair clip.", ep:"EP03" },
  { era:"Arc 1 — Starfall", date:"Fri, Feb 5 – Sat, Feb 6", text:"Norfolk to Heathrow. Nova meets [[character:sora|Sora]]; the League places them at Argyle Street.", ep:"EP03" },
  { era:"Arc 1 — Starfall", date:"Feb 7", text:"Necrozma's first real sunlight at the Barbican; Nova meets [[character:lucien|Lucien]].", ep:"EP05" },
  { era:"Arc 1 — Starfall", date:"Feb 8–10", text:"First mission at Highgate Cemetery; [[pokemon:nova-litwick|Litwick]] chooses Nova.", ep:"EP06" },
  { era:"Arc 1 — Starfall", date:"Thu, Feb 11, 2027", text:"Lumen's Galar Pilot draws on a Power Spot at 09:04 GMT. At 09:12 a pause is recommended and overridden. At 09:17 containment fails and the Darkest Day begins; Necrozma pulls the Dynamax energy out of a Corviknight on the Euston Road on a live stream.", ep:"EP08" },
  { era:"Arc 1 — Starfall", date:"Feb 12", text:"[[character:voss|Voss]] briefs Nova; [[character:batiste|Batiste]] flies in; Necrozma is conditionally registered.", ep:"EP09" },
  { era:"Arc 1 — Starfall", date:"Feb 13–14", text:"[[character:dani|Dani]] arrives at Heathrow; Necrozma bows to her. Journee sends Nova twenty-two hearts and a voice memo.", ep:"EP10" },

  // ── ARC 2 ──
  { era:"Arc 2 — City of Light", date:"Feb 14–16", text:"Eurostar to Paris.", ep:"EP11" },
  { era:"Arc 2 — City of Light", date:"Feb 17", text:"Sora chases a wild Eevee for four hours; it chooses him.", ep:"EP12" },
  { era:"Arc 2 — City of Light", date:"Feb 18", text:"Litwick loses to Jax's Pawmi in forty-eight seconds under the Eiffel Tower.", ep:"EP13" },
  { era:"Arc 2 — City of Light", date:"Feb 19–20", text:"Montmartre: the rooftop chase and the drive.", ep:"EP15" },
  { era:"Arc 2 — City of Light", date:"Feb 20–22", text:"The Aether Europe tower; archive file K-19-0812.", ep:"EP17" },
  { era:"Arc 2 — City of Light", date:"Feb 23", text:"Sora tells the whole Takao story; the group finds Lucien and Faure on the barge; the drive opens.", ep:"EP18" },
  { era:"Arc 2 — City of Light", date:"Feb 24", text:"Kalos League Mega Exhibition at Accor Arena.", ep:"EP20" },
  { era:"Arc 2 — City of Light", date:"Fri, Feb 26", text:"The Grand Palais gala. 20:59:29: someone opens a mirror on the Beast Ball's feed under credential DIR.01. The Prism Core pulls the light out of the room.", ep:"EP21" },
  { era:"Arc 2 — City of Light", date:"Fri, Feb 26 – Sat, Feb 27 (night)", text:"Nova tells her parents the truth. At Flat 5G, Faure copies the evidence three times. At 11:52 PM the first copy fails verification.", ep:"EP22" },
  { era:"Arc 2 — City of Light", date:"Sat, Feb 27 · 10 AM", text:"Review of Nova's conditional registration at the [[location:rue-de-varenne|Kalos League office]]; Aether's claim on the Beast Ball is withdrawn; the Kanto trip is approved with Dani's four conditions.", ep:"EP22" },
  { era:"Arc 2 — City of Light", date:"Sun, Feb 28", text:"First daily 9 AM check-in with the Director; Sora declared as present. Training bout at Buttes-Chaumont; Lucien shows his Zoroark.", ep:"EP23" },
  { era:"Arc 2 — City of Light", date:"Mon, Mar 1", text:"12:47 AM: firmware v3.0 installs on the Beast Ball. 6:13 PM: Litwick learns Minimize and beats Pawmi on the Champ de Mars. Papa K signs for the third drive.", ep:"EP23" },
  { era:"Arc 2 — City of Light", date:"Wed, Mar 3", text:"[[character:sora|Sora]]'s 16th birthday: the Morpeko, the Métro warning, the box from Hachiōji, the party. After midnight Faure opens folder 07.", ep:"EP24" },
  { era:"Arc 2 — City of Light", date:"Thu, Mar 4", text:"Kennedy lands at Orly; the cohort town hall; Nova plays Journee's voice memo.", ep:"EP25" },
  { era:"Arc 2 — City of Light", date:"Sat, Mar 6 · 10 AM", text:"Nova vs. Kennedy at a sanctioned court.", ep:"EP25", upcoming:true },

  // ── AHEAD ──
  { era:"Announced", date:"No earlier than Mon, Mar 15", text:"Earliest date the amendment lets Nova leave Kalos for Kanto.", ep:"EP22", upcoming:true },
  { era:"Announced", date:"Sat, Mar 20, 2027", text:"Mission MSN-KT-0311, the Kanto Spring Field Survey, begins at Takao Ranger Station in Hachiōji (about five weeks).", ep:"EP22", upcoming:true }
);
