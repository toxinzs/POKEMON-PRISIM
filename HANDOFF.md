# HANDOFF — Pokémon: Prism Wiki (for Claude Code)

You have no prior context. Read this whole file, then `CLAUDE.md`, then continue at **Phase 4**.

## 1. Who / what
- User: **Mason** (Hampton, VA). Runs the long original fiction series **POKÉMON: PRISM** (real modern Earth where Pokémon always existed; not isekai).
- Episodes are written in a SEPARATE chat (the "writing chat"). This repo is the **fan wiki**. **Never write episodes or story scenes** here.
- Wiki = static site, GitHub Pages, deploys on push to `main`. Repo `toxinzs/POKEMON-PRISIM` (old lowercase URL redirects). Local clone used so far: `/home/claude/pokemon-prisim`.

## 2. How to talk to Mason
- Brief, straight-to-the-point answers. Casual, types fast with typos; read for intent. "yes"/"continue" = carry on with the last offered step.
- Don't narrate thinking or memory use. Be efficient. He hates long chats that compact → work one phase at a time, check in.
- Anything meant for the writing chat must be **plain text he can paste**, never files.
- Story rules (only when writing notes for the writing chat): full scenes in real time; AAVE default for Black characters; real brand/model specifics; automatic visual mockups; no moralizing/neat wrap-ups/meta-commentary; scenes end "Next up — [concrete tease]"; mature tone.
- Do not use the Agent tool unless asked. Update `docs/source/arc-3-guide.md` / pacing map (and the Project copies) **only with Mason's approval**. The Solgaleo endgame (pacing map) is **never** given to the writing chat.

## 3. Wiki architecture (no build step)
- Files: `index.html`, `css/style.css`, `js/app.js` (hash router; episode `plot` ~line 127, `notes` ~128), `data/*.js` calling `WIKI.<collection>.push({...})`.
- Collections: characters, pokemon, species, locations, episodes, articles, timeline; plus config (arcs, `characterGroups` = object of group name → array of character ids; every character must be in a group).
- Link syntax in ANY text: `[[type:id|label]]`, types: character, pokemon, species, location, episode, article. Target must exist (verify.js checks).
- Optional rich fields: `sections:[{h,p[],list[]}]`, `relationships:[{id|name,rel,note}]`, `timeline:[{date,text,ep}]`, `moveHistory`, `battles:[{ep,opponent,result,note}]`, `quotes`, `trivia`. Character infobox extras: aka, birthday, affiliation, family. Pokémon extras: nature, ball. Episodes: `plot:[{h,p[]}]`, `notes[]`, auto "Debuts" list from `firstAppearance`.
- `WIKI.merge(collection, id, extra)` (data/config.js line 49) = Object.assign onto an existing entry. **Each depth phase gets its own data file** (originals untouched). A new file needs a `<script src="data/NAME.js">` tag in `index.html` after the previous depth file and before `js/app.js`.
- Current depth files (in script order): depth-cast.js (Phase 2), depth-arc1.js (Phase 3, Eps 1–10, ends with marker `// @@NEXT@@`).
- Episode block pattern:
```js
// ───────────────────────── EPISODE N ─────────────────────────
WIKI.merge("episodes","EP11",{
  plot:[ {h:"Section heading", p:["paragraph with [[character:nova|Nova]] links", "..."]}, ... ],
  notes:[ "continuity note ..." ]
});
```
- Counts as of commit 222f863: 48 characters, 39 pokemon, 44 species, 37 locations, 25 episodes, 3 articles, 32 timeline rows.

### Existing ids
- **Characters:** nova, sora, lucien, dani, noa, koa, lani, papa-k, journee, kennedy, jax, bia, boogie, wren, batiste, voss, ashby, castillo, okafor, rhys, callum, pryce, hale (Dr. Imogen Hale), brissac, laval, callahan, marchand, reid, elias-verane, okonkwo-hale, faure, crale, mara, theo, marisol, duvivier, hollis, simone, mercier, tobi, mj-park, tariq, ayanna, tae, mariah, isaiah, brielle, caleb
- **Pokémon:** necrozma, nova-litwick, iwanko, sora-eevee, absol, lucien-corviknight, journee-pichu, kennedy-riolu, jax-pawmi, bia-fuecoco, waffle, boogie-applin, wren-dreepy, batiste-staraptor, voss-metagross, hale-dusclops, laval-gardevoir, verane-porygon-z, lumen-honchkrow, marchand-chandelure, reid-gyarados, lucien-zoroark, mara-pyroar, theo-houndoom, theo-liepard, aurore, miette, ashby-slowbro, mercier-mightyena, tobi-charcadet, tariq-sandile, ayanna-pikipek, tae-wooper, mariah-wingull, isaiah-snom, brielle-skwovet, caleb-pidgey, gwilym, morpeko
- **Articles:** lumen-meridian, beast-ball, gridsense. **No `aether` article yet** → use plain text "Aether Foundation" until Phase 5 creates it (then switch links).
- Species/location/episode ids: read `data/species.js`, `data/locations.js`, `data/episodes.js` (episode ids are `EP01`…`EP25`).

## 4. Verify before EVERY push
```
for f in data/*.js; do node --check $f; done
node tools/verify.js                      # dup ids, missing link targets, ungrouped characters → prints OK {counts}
NODE_PATH=$(npm root -g) node tools/render-test.js EP11 EP12 ...   # Playwright; flags raw "[[" text, <1500 chars, JS errors
```
`render-test.js` defaults to EP01–EP10 and uses chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` with `--no-sandbox` (Playwright is global; do NOT run `playwright install`). Adjust the path if the environment differs.

## 5. Git rules
- Commit only when asked/at phase end; push to `main` (Pages deploys). End every commit message with:
```
Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: <the current session URL>
```
(Phase 3 used `https://claude.ai/code/session_01UHCGS2CS7w1Rco5U9fjhuD`; use the new session's link if different.) PR bodies end with `🤖 Generated with [Claude Code](https://claude.com/claude-code)` + the session URL.

## 6. Phase plan
1. Site features — **DONE**
2. Main cast deep pages — **DONE** (19b9923, `data/depth-cast.js`)
3. Eps 1–10 plot recaps — **DONE** (222f863, `data/depth-arc1.js`, plus `tools/`)
4. **Eps 11–20 recaps — NEXT.** Create `data/depth-arc2a.js` (+ script tag). Same block pattern; ~6–12 sections per ep plus `notes[]`.
5. Deeper Eps 21–25 recaps + lore articles: Lumen Meridian (expand), Aether, League & URD, field program, Beast Ball, GridSense, PTL & rules, Documents (the drive, folders 06/07, K-19-0812).
6. Supporting cast, species, locations — same depth treatment.

Work one phase at a time; tell Mason when each is done; offer the next. Phase 3 was written at a very high level of detail (per-scene sections, exact dialogue beats, brands, times, money) — match that.

## 7. Sources of truth (all copied into `docs/source/`)
| File | What |
|---|---|
| `continuity-guide-v2.md` | Master Continuity Guide v2 — canon through ~Ep 21 (cast, rules, drive folders, timeline, Part 12 episode log with JP titles, Part 13 Arc 3). **Primary source.** |
| `continuity-guide-v1.md` | v1 guide. Full program rules (Part 2), Necrozma/Beast Ball rules, original character bios, Part 9 format sample, Part 10 Z-A style reference, Part 8.15 title/arc format. v2 supersedes except where v2 says "as v1". |
| `arc-3-guide.md` | Arc 3 Kanto direction (project doc `claude/arc-3-guide.md`). NOT yet updated with Ep 24–25 facts. |
| `pacing-map.md` | Long-range pacing (project doc `claude/pacing-map.md`), incl. Solgaleo endgame (never shown to writing chat). |
| `handoff-planning-room-original.txt` | The original handoff guide Mason pasted (cast through Ep 25, Ep 22–25 summaries, unresolved threads, Arc 2 end / Arc 3 plan). |

Project (claude.ai Project **"REAL WORLD POKEMON"**) holds the same docs: "POKÉMON PRISIM. 2 (refer to this for updated " (v2), "POKEMON PRISM 1.", `claude/arc-3-guide.md`, `claude/pacing-map.md`. If your session has the Projects tool, `project_read` them; otherwise use the copies here.

## 8. Reading the writing chat (for detailed recaps)
Needs the `mcp__claude_ai__read_conversation` tool (claude.ai connector). If unavailable, you only have the guides + `data/episodes.js` synopses; tell Mason and ask him to paste episode text or enable the connector.
- **Eps 1–21 chat:** conversation_id `8a58820d-1a29-43f5-b634-fe4c11e38011` ("Pokémon reserve day scene", 88 turns). Call `read_conversation(conversation_id, page_token="tN", max_turns=1)`.
  - Odd turns = assistant episode scripts; even turns = Mason prompts.
  - **t33 and t65 are discarded drafts (NOT canon).**
  - Turn map known: Ep 6 = t19, t21, t23; Ep 7 = t25, t27; Ep 8 = t29, t31, t35, t37, t39, t41; Ep 9 = t43, t45; Ep 10 = t47, t49 (Arc 1 ends); **Ep 11 starts ≈ t51**. Map Eps 11–21 yourself as you go (Ep 21 ends near the chat's end).
- The id `8f0b1f58-bbcb-4c1b-a3da-33873ed5b472` ("POKÉMON PRISM", 32 turns) covers only **Eps 21–25** (use in Phase 5).
- `conversation_search` returns only snippets and lags — use read_conversation.
- Method that worked: read one turn per call, write that episode's recap block to the data file immediately (avoids context bloat). Verify facts against the guide's episode log (earlier subagents made small errors, e.g. pack Fletchinder is Faure's **Miette**; Brissac's first name is **Solène**).

## 9. Episode list (JP titles; full detail in guide v2 Part 12)
Arc 1 "Starfall": 1 星が落ちた夜 · 2 誰も来なかった · 3 光を褒めた男 · 4 なんで逃げるんだ？ · 5 二人だけの秘密 · 6 初ミッション！ 墓地に灯る光 · 7 光の名を持つ少年 · 8 灰色のコートの男 · 9 見張られた星 · 10 母が来た日
Arc 2 "City of Light": 11 ユーロスター、光の都へ · 12 イーブイは誰を選ぶ？ · 13 初バトル！ ヒトモシ対パモ · 14 リュックの中のカジッチュ！ · 15 モンマルトルの暗闇 · 16 屋根の上の逃走！ · 17 エーテル財団の白い部屋 · 18 小さな夜空 · 19 逃げたつもりだった · 20 招待状 · 21 光は誰のもの · 22 "Three Copies" · 23 "Get Small, Litwick!" · 24 "Happy Birthday, Sora" · 25 "The Rival Arrives!" (Ep 26 tease: 波導を読め！ *Hadō o Yome!* "Read the Aura!"). Eps 22–25 exist in `data/episodes.js` only as short synopses (check their stored JP titles there).

## 10. Canon rules to respect in recaps
- Necrozma is **genderless — always "it"**, even in dialogue. No speech; glow = mood; sounds *hmmm* / *tk* / *krrrk*.
- Nova's Litwick has **no nickname**. Moves: Ember, Astonish, Smog, Minimize (learned Ep 23). "Dim" isn't a move. Flash Fire unrevealed through Ep 21. Lost to Jax's Pawmi in 48 s (Ep 13); won after Minimize (Ep 23).
- **No evolutions in Arc 2.** Only Iwanko has a nickname among the leads' Pokémon. Kid cast doesn't Mega Evolve; adults can (Voss's Metagross, Marchand's Chandelure, Reid's Gyarados).
- Beast Balls read as empty/broken to League scanners until chipped; Nova's is chipped (URD band chip, Ep 9; firmware v3.0 in Ep 23 changed pulse 1/sec → 2/sec).
- Drive password MIETTE (Ep 18); folders 06 LEAGUE_CONTACT_M and 07 GALAR_PILOT: 07 opened Ep 24, 06 still unopened.
- Known oddities noted but NOT changed: Brissac's service history (11 years army nurse in Chad vs 40 years a nurse); DHL receipt Visa ···· 2208 vs dialogue Chase Sapphire; Sora's "twenty days" (actually 17); Kennedy's age (wiki says 14, matches Ep 25).
- Arc 3 / pacing facts (planning, not necessarily canon): Kanto mission MSN-KT-0311 from Sat Mar 20 2027; Okonkwo-Hale interim liaison (9 AM check-ins); Hale = Takao 2019 field lead; Voss suspended; Batiste stays in Paris; Popplio for Nova (Oʻahu sanctuary transfer); Mankey→Primeape for Sora; Iwanko→Dusk Lycanroc late Arc 3. Don't state these as aired canon in episode recaps.

## 11. State at handoff
- Pushed: `main` at 222f863 (Phase 3). Uncommitted at time of writing: `docs/`, `HANDOFF.md`, `CLAUDE.md` (commit them first).
- Story date at end of Ep 25 = Thu Mar 4, 2027. Next unwritten-by-wiki: Eps 11–20 recaps.
- Mason's last message (Oct 8 2026): moving the wiki work to Claude Code because the standard chat was compacting early; wanted everything laid out for it.
- First move for the new session: tell Mason in one line you're starting Phase 4, `git pull`, run the verify commands to confirm green, read guide v2 Part 12 + Part 5, then pull Ep 11 from the writing chat (≈ t51) and start.
