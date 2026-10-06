(function(){
const W=window.WIKI, C=W.config, $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const EW=C.episodeWord, EWS=EW+'s';
const byId=(arr,id)=>arr.find(x=>x.id===id);
const T={character:'characters',pokemon:'pokemon',species:'species',location:'locations',episode:'episodes'};
const URLS={character:'character',pokemon:'pokemon',species:'species',location:'location',episode:'episode'};
const TYPE_COL={Normal:'#A8A77A',Fire:'#EE8130',Water:'#6390F0',Electric:'#D9A800',Grass:'#7AC74C',Ice:'#6BC6C2',Fighting:'#C22E28',Poison:'#A33EA1',Ground:'#B58F40',Flying:'#8E7FDC',Psychic:'#F95587',Bug:'#A6B91A',Rock:'#B6A136',Ghost:'#735797',Dragon:'#6F35FC',Dark:'#705746',Steel:'#8d8da8',Fairy:'#D685AD'};
const art=dex=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dex}.png`;
const sprite=dex=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dex}.png`;
const ordered=()=>[...W.episodes].sort((a,b)=>a.season-b.season||a.num-b.num);
const epLabel=e=>`${EW} ${e.num}`;
const SW=C.seasonWord||'Season';
const arcName=s=>C.seasonNames?.[s]||SW+' '+s;
const jpLine=e=>e.jpTitle?`<div class="jp">${esc(e.jpTitle)}${e.romaji?` · <i>${esc(e.romaji)}</i>`:''}</div>`:'';
const get=(type,id)=>byId(W[T[type]],id);

// ---- wiki links: [[type:id|label]] ----
function linkify(text){
  return esc(text).replace(/\[\[(\w+):([\w-]+)(?:\|([^\]]+))?\]\]/g,(m,t,id,label)=>{
    const o=T[t]&&get(t,id); if(!o) return label||id;
    return `<a href="#/${URLS[t]}/${id}">${label||esc(o.name||o.title)}</a>`;
  });
}
const paras=a=>(a||[]).map(p=>`<p>${linkify(p)}</p>`).join('');
const types=t=>(t||[]).map(x=>`<span class="type" style="background:${TYPE_COL[x]||'#777'}">${esc(x)}</span>`).join(' ');
const chip=(type,id)=>{const o=get(type,id);return o?`<a href="#/${URLS[type]}/${id}">${esc(o.name||o.title)}</a>`:''};
const chips=(type,ids)=>ids&&ids.length?`<div class="chips">${ids.map(i=>chip(type,i)).join('')}</div>`:'<p class="empty-note">None listed yet.</p>';
const isNew=o=>o.added&&(Date.now()-new Date(o.added))<14*864e5;
const newTag=o=>isNew(o)?'<span class="new">NEW</span>':'';

function imgFor(kind,o,size){
  if(o.image) return `<img src="${esc(o.image)}" alt="${esc(o.name)}" loading="lazy">`;
  if(kind==='species'&&o.dex) return `<img src="${art(o.dex)}" alt="${esc(o.name)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph',textContent:'${esc(o.name[0])}'}))">`;
  if(kind==='pokemon'){const s=byId(W.species,o.species);if(s)return imgFor('species',s)}
  return `<div class="ph">${esc((o.name||'?')[0])}</div>`;
}
function card(kind,o,sub){return `<a class="card" href="#/${URLS[kind]}/${o.id}"><div class="pic">${imgFor(kind==='pokemon'?'pokemon':kind,o)}</div><b>${esc(o.name)}</b>${newTag(o)}<small>${esc(sub||'')}</small></a>`}

// ---- sidebar ----
function sidebar(){
  const t=C.trainer||{}, ch=get('character',t.character);
  const party=(C.party||[]).slice(0,6);
  let slots='';
  for(let i=0;i<6;i++){
    const p=party[i]&&get('pokemon',party[i]);
    if(p){const s=byId(W.species,p.species);
      slots+=`<a class="slot" href="#/pokemon/${p.id}">${s&&s.dex?`<img src="${sprite(s.dex)}" alt="">`:''}${esc(p.name)}</a>`}
    else slots+='<div class="slot empty">🔘 Empty</div>';
  }
  return `<div class="widget"><h3>Trainer Profile</h3><div class="profile">
    <div class="avatar">${ch&&ch.image?`<img src="${esc(ch.image)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`:esc((ch?.name||'?')[0])}</div>
    <div><strong>Name:</strong> ${ch?`<a href="#/character/${ch.id}">${esc(ch.name)}</a>`:'?'}<br>
    ${t.badges!=null?`<strong>Badges:</strong> ${t.badges} / ${t.totalBadges??8}<br>`:''}<strong>Region:</strong> ${esc(t.region||'?')}${(t.rows||[]).map(r=>`<br><strong>${esc(r[0])}:</strong> ${esc(r[1])}`).join('')}</div></div></div>
    <div class="widget"><h3>Current Party</h3><div class="party-grid">${slots}</div></div>
    <div class="widget"><h3>Latest ${EWS}</h3>${ordered().slice(-3).reverse().map(e=>`<div><a href="#/episode/${e.id}">${epLabel(e)}: ${esc(e.title)}</a></div>`).join('')||'<p class="empty-note">Nothing yet.</p>'}</div>`;
}

// ---- pages ----
function home(){
  const eps=ordered(), latest=eps[eps.length-1];
  return {html:`<h2 class="title">${esc(C.title)}</h2><p>${esc(C.intro)}</p>
  <div class="stats"><div class="stat"><b>${eps.length}</b>${EWS}</div><div class="stat"><b>${W.characters.length}</b>Characters</div><div class="stat"><b>${W.pokemon.length}</b>Pokémon</div><div class="stat"><b>${W.species.length}</b>Species</div><div class="stat"><b>${W.locations.length}</b>Locations</div></div>
  ${latest?`<h3 class="sec">Latest ${EW}</h3><p><a href="#/episode/${latest.id}"><b>${epLabel(latest)}: ${esc(latest.title)}</b></a>${newTag(latest)}<br>${esc(latest.summary||'')}</p><a class="btn" href="#/episode/${latest.id}">Read ${EW} ${latest.num}</a>`:''}
  <h3 class="sec">Browse</h3><div class="chips"><a href="#/episodes">${EWS}</a><a href="#/characters">Characters</a><a href="#/pokemon">Pokémon</a><a href="#/species">Species / Pokédex</a><a href="#/locations">Locations</a><a href="#/updates">Recent updates</a></div>`, side:true};
}
function episodes(){
  const seasons=[...new Set(ordered().map(e=>e.season))];
  let h=`<h2 class="title">${EW} List</h2>`;
  if(!seasons.length) h+='<p class="empty-note">No episodes yet.</p>';
  seasons.forEach(s=>{
    h+=`<h3 class="sec">${esc(arcName(s))}</h3>${C.seasonDesc?.[s]?`<p>${esc(C.seasonDesc[s])}</p>`:''}<table><tr><th>#</th><th>${EW}</th><th>Date</th><th>Summary</th></tr>`;
    ordered().filter(e=>e.season===s).forEach(e=>{h+=`<tr><td>${e.num}</td><td><a href="#/episode/${e.id}">${esc(e.title)}</a>${newTag(e)}${jpLine(e)}</td><td>${esc(e.airDate||'')}</td><td>${esc(e.summary||'')}</td></tr>`});
    h+='</table>';
  });
  return {html:h};
}
function episode(id){
  const e=byId(W.episodes,id); if(!e) return nf();
  const all=ordered(), i=all.indexOf(e), prev=all[i-1], next=all[i+1];
  const sec=(t,b)=>`<h3 class="sec">${t}</h3>${b}`;
  const img=e.image?`<img src="${esc(e.image)}" alt="">`:'<div class="ph" style="margin:auto;border-radius:12px;width:100%;height:120px;font-size:1rem">No image yet</div>';
  return {side:true,html:`<div class="crumbs"><a href="#/episodes">${EWS}</a> › ${esc(arcName(e.season))}</div>
  <h2 class="title">${epLabel(e)}: ${esc(e.title)}</h2>${jpLine(e)}
  <div class="infobox"><div class="ih">${esc(e.title)}</div><div class="ib">${img}</div><table>
    <tr><th>${EW}</th><td>${e.num}</td></tr>${e.jpTitle?`<tr><th>Japanese</th><td>${esc(e.jpTitle)}</td></tr>`:''}<tr><th>${esc(SW)}</th><td>${esc(arcName(e.season))}</td></tr>
    <tr><th>Date</th><td>${esc(e.airDate||'TBA')}</td></tr><tr><th>Code</th><td>${esc(e.id)}</td></tr></table></div>
  ${sec('Synopsis',paras(e.synopsis)||'<p class="empty-note">Synopsis coming soon.</p>')}
  ${e.story&&e.story.length?sec('Read the '+EW,`<div class="story read">${paras(e.story)}</div>`):''}
  ${sec('Characters',chips('character',e.characters))}
  ${sec('Pokémon',chips('pokemon',e.pokemon))}
  ${sec('Species',chips('species',e.species))}
  ${sec('Locations',chips('location',e.locations))}
  ${e.quotes&&e.quotes.length?sec('Quotes',e.quotes.map(q=>`<blockquote>${esc(q)}</blockquote>`).join('')):''}
  ${e.trivia&&e.trivia.length?sec('Trivia','<ul class="plain">'+e.trivia.map(t=>`<li>${linkify(t)}</li>`).join('')+'</ul>'):''}
  <div class="nav-buttons"><a class="btn ${prev?'':'off'}" href="#/episode/${prev?.id||''}">‹ Previous ${EW}</a><a class="btn ${next?'':'off'}" href="#/episode/${next?.id||''}">Next ${EW} ›</a></div>`};
}
function appearances(type,id){
  const eps=ordered().filter(e=>(e[T[type]]||[]).includes(id));
  return eps.length?'<ul class="plain">'+eps.map(e=>`<li><a href="#/episode/${e.id}">${epLabel(e)}: ${esc(e.title)}</a></li>`).join('')+'</ul>':'<p class="empty-note">No appearances listed yet.</p>';
}
function infobox(kind,o,rows){
  return `<div class="infobox"><div class="ih">${esc(o.name)}</div><div class="ib">${imgFor(kind,o)}</div><table>${rows.filter(r=>r[1]).map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</table></div>`;
}
const fa=o=>o.firstAppearance&&get('episode',o.firstAppearance)?`<a href="#/episode/${o.firstAppearance}">${epLabel(get('episode',o.firstAppearance))}</a>`:'';
function character(id){
  const o=byId(W.characters,id); if(!o) return nf();
  return {html:`<div class="crumbs"><a href="#/characters">Characters</a></div><h2 class="title">${esc(o.name)}</h2>
  ${infobox('character',o,[['Role',esc(o.role)],['Gender',esc(o.gender)],['Age',esc(o.age)],['Hometown',esc(o.hometown)],['Status',esc(o.status)],['First seen',fa(o)]])}
  <h3 class="sec" style="margin-top:0">Biography</h3>${paras([o.desc])}
  <h3 class="sec">Pokémon</h3>${chips('pokemon',o.pokemon||W.pokemon.filter(p=>p.trainer===o.id).map(p=>p.id))}
  <h3 class="sec">Appearances</h3>${appearances('character',o.id)}`,side:true};
}
function pokemonPage(id){
  const o=byId(W.pokemon,id); if(!o) return nf();
  const s=byId(W.species,o.species), tr=get('character',o.trainer);
  return {html:`<div class="crumbs"><a href="#/pokemon">Pokémon</a></div><h2 class="title">${esc(o.name)}</h2>
  ${infobox('pokemon',o,[['Species',s?`<a href="#/species/${s.id}">${esc(s.name)}</a>`:''],['Type',s?types(s.types):''],['Trainer',tr?`<a href="#/character/${tr.id}">${esc(tr.name)}</a>`:''],['Gender',esc(o.gender)],['Ability',esc(o.ability)],['Status',esc(o.status)],['First seen',fa(o)]])}
  <h3 class="sec" style="margin-top:0">About</h3>${paras([o.desc])}
  <h3 class="sec">Moves</h3>${o.moves&&o.moves.length?'<div class="chips">'+o.moves.map(m=>`<a>${esc(m)}</a>`).join('')+'</div>':'<p class="empty-note">Unknown.</p>'}
  <h3 class="sec">Appearances</h3>${appearances('pokemon',o.id)}`,side:true};
}
function speciesPage(id){
  const o=byId(W.species,id); if(!o) return nf();
  const owners=W.pokemon.filter(p=>p.species===o.id);
  return {html:`<div class="crumbs"><a href="#/species">Species</a></div><h2 class="title">${esc(o.name)} ${o.fanmade?'<span class="new">FAN-MADE</span>':''}</h2>
  ${infobox('species',o,[['Dex #',o.dex?String(o.dex).padStart(4,'0'):''],['Type',types(o.types)],['Category',esc(o.category)],['Height',esc(o.height)],['Weight',esc(o.weight)],['Abilities',(o.abilities||[]).map(esc).join(', ')],['Evolves from',o.evolvesFrom?chip('species',o.evolvesFrom):''],['Evolves into',(o.evolvesTo||[]).map(i=>chip('species',i)).join(' ')],['First seen',fa(o)]])}
  <h3 class="sec" style="margin-top:0">Biology & Role in the Story</h3>${paras([o.desc])}
  <h3 class="sec">Individual Pokémon</h3>${owners.length?chips('pokemon',owners.map(p=>p.id)):'<p class="empty-note">No individuals of this species yet.</p>'}
  <h3 class="sec">Appearances</h3>${appearances('species',o.id)}`,side:true};
}
function locationPage(id){
  const o=byId(W.locations,id); if(!o) return nf();
  return {html:`<div class="crumbs"><a href="#/locations">Locations</a></div><h2 class="title">${esc(o.name)}</h2>
  ${infobox('location',o,[['Type',esc(o.type)],['Region',esc(o.region)],['First seen',fa(o)]])}
  <h3 class="sec" style="margin-top:0">About</h3>${paras([o.desc])}<h3 class="sec">Appearances</h3>${appearances('location',o.id)}`,side:true};
}
function listPage(title,kind,items,sub,filterKey){
  return {html:`<h2 class="title">${title}</h2>${items.length?`<div class="grid">${items.map(o=>card(kind,o,sub(o))).join('')}</div>`:'<p class="empty-note">Nothing here yet.</p>'}`};
}
function updates(){
  const rows=[];
  ordered().forEach(e=>rows.push({d:e.added,k:EW,t:`${epLabel(e)}: ${e.title}`,u:`episode/${e.id}`}));
  [['characters','Character','character'],['pokemon','Pokémon','pokemon'],['species','Species','species'],['locations','Location','location']].forEach(([a,l,u])=>W[a].forEach(o=>rows.push({d:o.added,k:l,t:o.name,u:`${u}/${o.id}`})));
  rows.sort((a,b)=>(b.d||'').localeCompare(a.d||''));
  return {html:`<h2 class="title">Recent Updates</h2><table><tr><th>Date</th><th>Type</th><th>Page</th></tr>${rows.map(r=>`<tr><td>${esc(r.d||'')}</td><td>${esc(r.k)}</td><td><a href="#/${r.u}">${esc(r.t)}</a></td></tr>`).join('')}</table>`};
}
function search(q){
  q=decodeURIComponent(q||'').toLowerCase().trim();
  const hits=[];
  const add=(kind,label,arr,fields)=>arr.forEach(o=>{if(fields.some(f=>String(o[f]||'').toLowerCase().includes(q))||JSON.stringify(o.synopsis||o.desc||'').toLowerCase().includes(q))hits.push({u:`${kind}/${o.id}`,t:o.name||o.title,k:label})});
  if(q){add('episode',EW,W.episodes,['title','summary','jpTitle','romaji']);add('character','Character',W.characters,['name','role']);add('pokemon','Pokémon',W.pokemon,['name','species']);add('species','Species',W.species,['name','category','types']);add('location','Location',W.locations,['name','region'])}
  return {html:`<h2 class="title">Search: “${esc(q)}”</h2>${hits.length?'<table>'+hits.map(h=>`<tr><td><a href="#/${h.u}">${esc(h.t)}</a></td><td>${esc(h.k)}</td></tr>`).join('')+'</table>':'<p class="empty-note">No results.</p>'}`};
}
const nf=()=>({html:'<h2 class="title">Page not found</h2><p>This page doesn\'t exist yet. <a href="#/">Go home</a>.</p>'});

// ---- router ----
function route(){
  const [, r, id]=(location.hash.slice(1)||'/').split('/');
  let p, nav=r||'home';
  switch(r){
    case undefined: case '': p=home();break;
    case 'episodes': p=episodes();break;
    case 'episode': p=episode(id);nav='episodes';break;
    case 'characters': p=listPage('Characters','character',W.characters,o=>o.role);break;
    case 'character': p=character(id);nav='characters';break;
    case 'pokemon': p=id?pokemonPage(id):listPage('Pokémon','pokemon',W.pokemon,o=>{const t=get('character',o.trainer);return t?'Trainer: '+t.name:''});break;
    case 'species': p=id?speciesPage(id):listPage('Species / Pokédex','species',[...W.species].sort((a,b)=>(a.dex||999)-(b.dex||999)),o=>(o.dex?'#'+String(o.dex).padStart(4,'0')+' · ':'')+(o.types||[]).join('/'));break;
    case 'locations': p=listPage('Locations','location',W.locations,o=>o.type);break;
    case 'location': p=locationPage(id);nav='locations';break;
    case 'updates': p=updates();break;
    case 'search': p=search(id);break;
    default: p=nf();
  }
  $('#app').innerHTML=p.html;
  $('#side').innerHTML=p.side?sidebar():'';
  $('#container').classList.toggle('wide',!p.side);
  document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.dataset.r===nav));
  $('#nav').classList.remove('open');
  window.scrollTo(0,0);
}
document.addEventListener('DOMContentLoaded',()=>{
  document.title=C.title+' Wiki';
  $('#siteTitle').textContent=C.title; $('#siteTag').textContent=C.tagline;
  $('#navEp').textContent=EWS; $('#footText').textContent=C.footer;
  $('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');
  $('#searchForm').onsubmit=e=>{e.preventDefault();location.hash='#/search/'+encodeURIComponent($('#searchInput').value)};
  window.addEventListener('hashchange',route); route();
});
})();
