// EPISODES. Add a new object to the end each time you release one.
// Fields: id ("S01E02"), season, num, title, airDate, summary (1-2 lines for lists),
//   story[] (the full text, one string per paragraph – optional), synopsis[] (recap, supports
//   [[character:id|label]], [[pokemon:id]], [[species:id]], [[location:id]], [[episode:id]]),
//   characters[], pokemon[], species[], locations[], trivia[], quotes[], image, added
WIKI.episodes.push(
  { id:"S01E01", season:1, num:1, title:"The Journey Begins", airDate:"2026-10-06",
    summary:"On the day it all starts, a hero and their partner set out for Route 1.",
    synopsis:[
      "At sunrise over [[location:hometown]], our hero and [[pokemon:sparky]] prepare to leave. Pidgey ([[species:pidgey]]) cry in the distance. They head toward [[location:route-1]].",
    ],
    story:[
      "The morning sun rose over the rolling hills, casting a golden glow across the quiet town. Today was the day. The crisp air was filled with the distant cries of Pidgey, and the excitement in the air was palpable.",
      "\"Come on, let's go!\" our hero called out, adjusting the straps of their backpack. Standing at their side, a loyal partner sparks with anticipation, ready to take on whatever challenges the region has in store.",
      "Ahead lay Route 1, a winding path of tall grass, wild encounters, and the first steps toward becoming a Pokémon Master..."
    ],
    characters:["protagonist"], pokemon:["sparky"], species:["pikachu","pidgey"], locations:["hometown","route-1"],
    trivia:["First episode of the series."], quotes:["\"Come on, let's go!\" — The hero"],
    added:"2026-10-06" }
);
