# Pokémon: Indigo Chronicles Wiki

A fan-made, Bulbapedia-style wiki for the series. Plain HTML/CSS/JS, so there's no build step. Open `index.html`, or host it on GitHub Pages.

## Adding content
Everything lives in `data/`. Copy an existing entry, change it, and save.

| File | What it holds |
|---|---|
| `config.js` | Title, tagline, "Chapter" vs "Episode" wording, season names, sidebar trainer + party |
| `episodes.js` | One entry per chapter/episode (summary, synopsis, full story text, cast, trivia, quotes) |
| `characters.js` | Characters |
| `pokemon.js` | Individual Pokémon owned by characters |
| `species.js` | Species / Pokédex (real ones auto-load art by `dex` number; fan-made species use `fanmade:true` + `image`) |
| `locations.js` | Towns, routes, gyms |

Link anything inside text with `[[type:id|label]]`, e.g. `[[character:protagonist|Ash]]`, `[[pokemon:sparky]]`, `[[species:pikachu]]`, `[[location:route-1]]`, `[[episode:S01E01]]`.

Put images in an `images/` folder and reference them with `image:"images/name.png"`.
Pages (infoboxes, appearance lists, prev/next, search, recent updates) are generated automatically.
