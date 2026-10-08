# CLAUDE.md — Pokémon: Prism Wiki

Start with `HANDOFF.md` (full context, workflow, phase plan, ids, writing-chat turn map). Source docs are in `docs/source/`.

Quick rules:
- Plain HTML/CSS/JS, no build. Data in `data/*.js` via `WIKI.<collection>.push`; depth phases use `WIKI.merge(...)` in their own file with a `<script>` tag in `index.html` before `js/app.js`.
- Links: `[[type:id|label]]`. No `aether` article yet → plain text.
- Before every push: `node --check data/*.js`, `node tools/verify.js`, `NODE_PATH=$(npm root -g) node tools/render-test.js EPxx…`.
- Push to `main` deploys. Commits end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` and the `Claude-Session:` line.
- Never write episodes/story scenes here. Necrozma is always "it". Nova's Litwick has no nickname. No evolutions in Arc 2.
- Mason wants brief answers, one phase at a time, tell him when a phase is done and offer the next. Never give the Solgaleo endgame to the writing chat; update arc-3-guide/pacing-map only with his approval.
- Next: Phase 4 (Eps 11–20 recaps) in a new `data/depth-arc2a.js`.
