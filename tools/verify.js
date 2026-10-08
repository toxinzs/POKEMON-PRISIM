// Usage: node tools/verify.js   (from repo root)
// Loads every data file in index.html order into a vm context, then checks:
//  - syntax, duplicate ids per collection
//  - every [[type:id|label]] link resolves
//  - every character belongs to a characterGroup
const fs=require('fs'),vm=require('vm'),path=require('path');
const html=fs.readFileSync('index.html','utf8');
const files=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]).filter(f=>f.startsWith('data/'));
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
for(const f of files){try{vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});}catch(e){console.error('LOAD FAIL',f,e.message);process.exit(1);}}
const W=ctx.WIKI;const map={character:'characters',pokemon:'pokemon',species:'species',location:'locations',episode:'episodes',article:'articles'};
let errs=0;
for(const c of Object.values(map)){const seen=new Set();for(const e of W[c]||[]){if(seen.has(e.id)){console.error('DUP',c,e.id);errs++;}seen.add(e.id);}}
const ids={};for(const [t,c] of Object.entries(map))ids[t]=new Set((W[c]||[]).map(e=>e.id));
function walk(v,where){if(typeof v==='string'){for(const m of v.matchAll(/\[\[(\w+):([^|\]]+)(?:\|[^\]]*)?\]\]/g)){if(!ids[m[1]]||!ids[m[1]].has(m[2])){console.error('MISSING LINK',m[0],'in',where);errs++;}}}else if(Array.isArray(v))v.forEach(x=>walk(x,where));else if(v&&typeof v==='object')Object.values(v).forEach(x=>walk(x,where));}
for(const c of Object.values(map))for(const e of W[c]||[])walk(e,c+'/'+e.id);
const grouped=new Set();for(const arr of Object.values((W.config&&W.config.characterGroups)||{}))for(const id of arr)grouped.add(id);
if(grouped.size)for(const e of W.characters||[])if(!grouped.has(e.id)){console.error('UNGROUPED',e.id);errs++;}
console.log(errs?('FAILED: '+errs+' problem(s)'):'OK',Object.fromEntries(Object.values(map).map(c=>[c,(W[c]||[]).length])));
process.exit(errs?1:0);
