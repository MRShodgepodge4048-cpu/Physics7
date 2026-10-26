/* Interactive FBD practice from the uploaded Linear Motion worksheet. */
(() => {
"use strict";
const cases=window.PHYSICS7_FBD||[];
const $=q=>document.querySelector(q);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dirs={N:[0,-1],NE:[.707,-.707],E:[1,0],SE:[.707,.707],S:[0,1],SW:[-.707,.707],W:[-1,0],NW:[-.707,-.707]};
const dirNames={N:"Up",NE:"Up-right",E:"Right",SE:"Down-right",S:"Down",SW:"Down-left",W:"Left",NW:"Up-left"};
const forceNames={Fg:"Weight / gravity (Fg)",Fn:"Normal force (Fn)",Ff:"Friction (Ff)",Fair:"Air resistance (Fair)",T:"Tension (T)",T1:"Tension: rope 1 (T1)",T2:"Tension: rope 2 (T2)",Fn1:"Normal: surface 1 (Fn1)",Fn2:"Normal: surface 2 (Fn2)"};
const key="physics7_fbd_v1";
let memory={};try{memory=JSON.parse(localStorage.getItem(key))||{};}catch(e){}
let selected=cases[0]?.id||"",filter="all";
function state(id){return memory[id]||(memory[id]={arrows:[{force:"",dir:""}],diagramOk:false,balance:"",net:"",complete:false,feedback:""});}
function save(){try{localStorage.setItem(key,JSON.stringify(memory));}catch(e){}}
function select(values,value,attrs){return '<select '+attrs+'><option value="">Select…</option>'+Object.entries(values).map(([v,name])=>'<option value="'+esc(v)+'" '+(v===value?"selected":"")+'>'+esc(name)+'</option>').join("")+'</select>';}
function scene(p){
 const type=p.scene;let shapes="",cx=200,cy=113;
 const line=(x1,y1,x2,y2)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#8090a8" stroke-width="4" stroke-linecap="round"/>';
 if(["floor","floor-moving"].includes(type)){cy=122;shapes+=line(62,145,345,145);}
 if(["down-slope","tethered-slope"].includes(type)){cy=115;shapes+=line(52,70,350,190);}
 if(type==="vee"){cx=188;cy=135;shapes+='<path d="M75 61 L178 186 L335 97" fill="none" stroke="#8090a8" stroke-width="4"/>';}
 if(["hanging","pulled-up"].includes(type))shapes+=line(200,16,200,98);
 if(type==="one-rope-side")shapes+=line(116,17,200,105)+line(200,105,344,105);
 if(type==="v-ropes")shapes+=line(80,19,200,105)+line(200,105,318,19);
 if(type==="unequal-ropes")shapes+=line(143,16,200,105)+line(200,105,351,33);
 if(type==="tethered-slope")shapes+=line(72,38,194,108);
 if(type==="angled-pull")shapes+=line(202,106,350,37);
 if(type==="projectile-up"||type==="projectile-top"){shapes+='<path d="M61 190 Q210 -65 345 195" fill="none" stroke="#a8b7cb" stroke-dasharray="8 7" stroke-width="3"/>';cx=type==="projectile-top"?210:131;cy=type==="projectile-top"?51:113;}
 if(["falling","terminal","floor-moving"].includes(type))shapes+='<path d="M90 66 H132 M103 80 H132 M85 93 H132" stroke="#bccbdc" stroke-width="3" stroke-linecap="round"/>';
 const rock='<g transform="translate('+cx+' '+cy+')"><path d="M-21 -12 L-6 -20 L14 -13 L22 5 L9 19 L-15 15 L-22 -2 Z" fill="#e4deff" stroke="#7d6dd0" stroke-width="2.5"/><circle r="4" fill="#665ac0"/></g>';
 return '<svg viewBox="0 0 400 225" role="img" aria-label="Redrawn '+esc(p.title)+' physical setup">'+shapes+rock+'</svg>';
}
function drawing(p,s){
 let path="";
 s.arrows.forEach(a=>{
  if(!a.force||!dirs[a.dir])return;
  const [dx,dy]=dirs[a.dir],spec=p.arrows.find(f=>f.force===a.force),len=spec?.length||64;
  const x=200+dx*len,y=120+dy*len,hx=x-dx*12,hy=y-dy*12,px=-dy*7,py=dx*7;
  path+='<path d="M200 120 L'+x+' '+y+' M'+(hx+px)+' '+(hy+py)+' L'+x+' '+y+' L'+(hx-px)+' '+(hy-py)+'" fill="none" stroke="#645cc8" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round"/>'+
   '<text x="'+(x+dx*18)+'" y="'+(y+dy*18+4)+'" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#5147a1">'+esc(a.force)+'</text>';
 });
 return '<svg viewBox="0 0 400 245" role="img" aria-label="Student-built free-body diagram"><path d="M200 15V235 M15 120H385" fill="none" stroke="#e8ecf5" stroke-dasharray="5 5"/><rect x="181" y="101" width="38" height="38" rx="9" fill="#edeaff" stroke="#8073d2" stroke-width="2"/>'+path+'</svg>';
}
function validate(p,s){
 const expected=p.arrows,shown=s.arrows.filter(a=>a.force||a.dir),messages=[];
 const used={};
 shown.forEach(a=>{
  if(!a.force){messages.push("Select a force label for each arrow.");return;}
  used[a.force]=(used[a.force]||0)+1;
  const ref=expected.find(f=>f.force===a.force);
  if(!ref)messages.push(a.force+" is not acting on the rock in this setup. Remove that extra arrow.");
  else if(a.dir!==ref.dir)messages.push(a.force+" needs to point "+dirNames[ref.dir].toLowerCase()+". Check what produces that force.");
 });
 expected.forEach(e=>{
  if(!used[e.force])messages.push("Missing "+e.force+": "+forceNames[e.force]+".");
  if(used[e.force]>1)messages.push("You have "+used[e.force]+" "+e.force+" arrows; only one belongs on the diagram.");
 });
 if(shown.length!==expected.length&&!messages.length)messages.push("Check the total number of force arrows.");
 return {ok:messages.length===0,feedback:messages.length?messages.join(" "):"Good! The labels and directions are correct. Now determine whether the forces are balanced."};
}
function render(){
 const nav=$("#fbdCaseList"),box=$("#fbdWorkbench");if(!nav||!box)return;
 const candidates=cases.filter(p=>filter==="all"||p.balance===filter);
 if(!candidates.some(p=>p.id===selected))selected=candidates[0]?.id||selected;
 nav.innerHTML=candidates.map(p=>'<button type="button" class="fbd-case '+(p.id===selected?"active ":"")+(state(p.id).complete?"complete":"")+'" data-fbd-case="'+p.id+'"><strong>'+p.id+'</strong><span>'+esc(p.title)+'</span><span>'+(state(p.id).complete?"✓":"")+'</span></button>').join("");
 const p=cases.find(c=>c.id===selected);if(!p)return;
 const s=state(p.id);
 const rows=s.arrows.map((a,i)=>'<div class="fbd-arrow-row"><span class="fbd-row-num">'+(i+1)+'</span><label>Force'+select(forceNames,a.force,'data-fbd-force="'+i+'"')+'</label><label>Direction'+select(dirNames,a.dir,'data-fbd-dir="'+i+'"')+'</label><button type="button" class="fbd-delete" aria-label="Remove arrow '+(i+1)+'" data-fbd-delete="'+i+'">×</button></div>').join("");
 const feedback=s.feedback?'<div class="fbd-feedback '+(s.diagramOk?"good":"wrong")+'" role="status">'+esc(s.feedback)+'</div>':"";
 const reasoning=s.diagramOk?'<div class="fbd-reason"><h3>Use your diagram</h3><label>Are the forces balanced?'+select({balanced:"Balanced — no acceleration",unbalanced:"Unbalanced — acceleration"},s.balance,'data-fbd-reason="balance"')+'</label><label>Net force direction'+select({none:"No net force",N:"Up",S:"Down",W:"Left",E:"Right",SE:"Down-right (downhill)"},s.net,'data-fbd-reason="net"')+'</label><button type="button" class="primary-button" data-fbd-motion="'+p.id+'">Check net force →</button></div>':"";
 const end=s.complete?'<div class="fbd-done"><strong>All correct ✓</strong><p>'+esc(p.why)+'</p><button type="button" class="secondary-button" data-fbd-restart="'+p.id+'">Try again</button></div>':"";
 box.innerHTML='<div class="fbd-prompt"><span class="topic-pill">UNIT 3 · '+p.id+'</span><h2>'+esc(p.title)+'</h2><p>'+esc(p.question)+'</p><small>Draw only forces acting on the rock. Symbols: w = Fg, n = Fn, f = Ff, T = tension.</small></div>'+
 '<div class="fbd-visuals"><div><strong>Situation</strong>'+scene(p)+'</div><div><strong>Your free-body diagram</strong>'+drawing(p,s)+'</div></div><section class="fbd-controls"><h3>Draw the force arrows</h3><p>Add a force and choose its direction. The diagram updates as you work.</p>'+rows+'<div class="fbd-buttons"><button type="button" class="secondary-button" data-fbd-add="'+p.id+'">+ Add arrow</button><button type="button" class="primary-button" data-fbd-check="'+p.id+'">Check diagram →</button></div>'+feedback+'</section>'+reasoning+end+
 '<div class="fbd-lessons"><button type="button" class="mini-link" data-open-lesson="forces" data-from-view="fbd">Review force diagrams ↗</button><button type="button" class="mini-link" data-open-lesson="net" data-from-view="fbd">Review net force ↗</button></div>';
}
function onClick(e){
 const b=e.target.closest("button");if(!b)return;
 if(b.dataset.fbdCase){selected=b.dataset.fbdCase;render();return;}
 if(b.dataset.fbdAdd){const s=state(b.dataset.fbdAdd);if(s.arrows.length<7){s.arrows.push({force:"",dir:""});s.diagramOk=false;s.complete=false;s.feedback="";save();}render();return;}
 if(b.dataset.fbdDelete!==undefined){const s=state(selected);s.arrows.splice(Number(b.dataset.fbdDelete),1);if(!s.arrows.length)s.arrows=[{force:"",dir:""}];s.diagramOk=false;s.complete=false;s.feedback="";save();render();return;}
 if(b.dataset.fbdCheck){const p=cases.find(p=>p.id===b.dataset.fbdCheck),s=state(p.id),result=validate(p,s);s.diagramOk=result.ok;s.complete=false;s.feedback=result.feedback;save();render();return;}
 if(b.dataset.fbdMotion){
  const p=cases.find(p=>p.id===b.dataset.fbdMotion),s=state(p.id);if(!s.diagramOk)return;
  const err=[];
  if(s.balance!==p.balance)err.push(p.balance==="balanced"?"The forces balance: net force is zero.":"The forces are unbalanced: the rock accelerates.");
  if(s.net!==p.net)err.push(p.net==="none"?"The net force is zero.":"The net force points "+dirNames[p.net].toLowerCase()+".");
  s.feedback=err.length?err.join(" "):"Correct! Your arrows and net force agree.";
  s.complete=!err.length;save();render();return;
 }
 if(b.dataset.fbdRestart){memory[b.dataset.fbdRestart]={arrows:[{force:"",dir:""}],diagramOk:false,balance:"",net:"",complete:false,feedback:""};save();render();}
}
function onChange(e){
 const target=e.target,s=state(selected);
 if(target.dataset.fbdForce!==undefined){const i=Number(target.dataset.fbdForce);s.arrows[i].force=target.value;s.diagramOk=false;s.complete=false;s.feedback="";save();render();}
 if(target.dataset.fbdDir!==undefined){const i=Number(target.dataset.fbdDir);s.arrows[i].dir=target.value;s.diagramOk=false;s.complete=false;s.feedback="";save();render();}
 if(target.dataset.fbdReason){s[target.dataset.fbdReason]=target.value;s.complete=false;save();render();}
}
if($("#fbdCaseList")){
 $("#fbdFilter").addEventListener("change",e=>{filter=e.target.value;render();});
 document.addEventListener("click",onClick);
 document.addEventListener("change",onChange);
 render();
}
window.PHYSICS_FBD={render,validate,cases,state};
})();