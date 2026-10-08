// Usage: NODE_PATH=$(npm root -g) node tools/render-test.js EP01 EP02 ...   (defaults to EP01-EP10)
const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
const ids=process.argv.slice(2).length?process.argv.slice(2):Array.from({length:10},(_,i)=>'EP'+String(i+1).padStart(2,'0'));
let bad=0;for(const id of ids){await p.goto('file://'+path.resolve('index.html')+'#/episode/'+id);await p.waitForTimeout(250);
const t=await p.evaluate(()=>document.body.innerText);const raw=(t.match(/\[\[/g)||[]).length;const len=t.length;
console.log(id,'chars',len,'rawLinks',raw);if(raw||len<1500)bad++;}
console.log(errs.length?('JS ERRORS: '+errs.join(' | ')):'no JS errors');await b.close();process.exit(bad||errs.length?1:0);})();
