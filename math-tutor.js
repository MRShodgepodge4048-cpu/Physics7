/* Guided math workshop: each task comes from the school's published physics practice. */
(() => {
"use strict";
const problems=window.PHYSICS7_MATH||[];
const lessons=window.PHYSICS7_LESSONS||[];
const $=selector=>document.querySelector(selector);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const storeKey="physics7_math_work_v1";
const load=()=>{try{return JSON.parse(localStorage.getItem(storeKey))||{};}catch(e){return {};}};
let work=load(),active=problems[0]?.id||null,filters={unit:"all",topic:"all",query:""},lessonFilters={unit:"all",query:""},currentLesson=null,returnTo="lessons";
function persist(){try{localStorage.setItem(storeKey,JSON.stringify(work));}catch(e){setStatus("Answers cannot be saved in this browser.");}}
function setStatus(s){const el=$("#liveStatus");if(el)el.textContent=s;}
function number(key,label,expected,error,hint,opts={}){return {kind:"number",key,label,expected,error,hint,...opts};}
function pick(key,label,expected,options,error,hint){return{kind:"select",key,label,expected,options,error,hint};}
function stage(title,intro,fields){return{title,intro,fields};}
const equations={
metric:"starting amount × conversion multiplier",
speed:"speed = distance / time",
velocity:"vavg = displacement / time",
distance:"distance = speed × time",
time:"time = distance / speed",
acceleration:"a = (vf - vi) / t",
finalVelocity:"vf = vi + at",
net:"Fnet = Fright - Fleft",
force:"Fnet = ma",
mass:"m = Fnet / a",
gravity:"g = Fg / m",
friction:"Fn = mg; Ff = μFn",
weight:"Fg = mg",
normal:"Fn = Fg (balanced vertically)"
};
const equationChoices=Object.values(equations);
const unitOptions=["N","kg","m","km","mm","μm","L","mL","s","min","h","m/s","km/h","m/min","m/s²","N/kg"];
const directionOptions=["right","left","up","down","north","south","east","west"];
const given=(key,label,expected)=>number(key,label,expected,
 "Re-read the question and check which physical quantity this number belongs to.",
 "Copy the numerical value given in the question. Do not calculate yet.",{stageKind:"given"});
const answer=p=>number("result","Numerical answer",p.result,
 "The setup is correct, but this calculation needs another look. Check your operation, decimals, and signs.",
 "Use the equation and your checked values. Enter the number here; the units are checked next.",
 {stageKind:"result",tolerance:p.tolerance||0});
function build(p){
 const stages=[];
 if(p.type==="metric"){
  stages.push(stage("Identify the given measurement","Enter the number before the starting unit.",[given("given","Starting amount ("+p.from+")",p.given)]));
  stages.push(stage("Set up the conversion","Enter how many "+p.to+" equal one "+p.from+".",[
   number("factor","Conversion multiplier ("+p.to+" per "+p.from+")",p.factor,
   "Check the size of the prefixes. You may have inverted your multiplier or misplaced a power of ten.",
   "Write 1 "+p.from+" = ___ "+p.to+" before converting.",{stageKind:"factor"})
  ]));
  stages.push(stage("Calculate the result","Multiply the starting amount by the conversion multiplier.",[answer(p)]));
  stages.push(stage("Check units","Select the unit requested by the question.",[pick("unit","Final unit",p.to,unitOptions,"The final unit needs to match the target unit in the question.","Read the unit printed after the original blank.")]));
  return stages;
 }
 let givens=[],formula="",extra=[],subst=[];
 if(p.type==="rate"){
  givens=[given("a",p.aLabel,p.a),given("b",p.bLabel,p.b)];
  formula=equations[p.mode];
  subst=[
   number("aSub","First number in "+(p.mode==="distance"?"the multiplication":"the division"),p.a,
    "That number is in the wrong position of your calculation. Check what goes first.",
    "For division, identify the numerator; for multiplication, enter the first quantity."),
   number("bSub","Second number in "+(p.mode==="distance"?"the multiplication":"the division"),p.b,
    "Check which quantity should be multiplied by or divided into the first.",
    "Identify the other factor or denominator from the equation.")
  ];
 }else if(p.type==="acceleration"){
  givens=[given("vi","Initial velocity vi (m/s)",p.vi),given("vf","Final velocity vf (m/s)",p.vf),given("t","Elapsed time (s)",p.t)];
  formula=equations.acceleration;
  extra.push(stage("Calculate the velocity change","Subtract initial velocity from final velocity, keeping the sign.",[
   number("delta","vf - vi (m/s)",p.vf-p.vi,
    "Subtract in the order final minus initial. Reversing the order reverses the sign.",
    "Calculate "+p.vf+" - "+p.vi+".",{stageKind:"signed"})
  ]));
 }else if(p.type==="finalVelocity"){
  givens=[given("vi","Initial velocity vi (m/s)",p.vi),given("acc","Acceleration a (m/s²)",p.acc),given("t","Time (s)",p.t)];
  formula=equations.finalVelocity;
  extra.push(stage("Find the velocity change","Multiply acceleration by elapsed time before adding initial velocity.",[
   number("delta","a × t (m/s)",p.acc*p.t,
    "Multiply acceleration by time, not initial velocity by time.",
    "First evaluate "+p.acc+" × "+p.t+".")
  ]));
 }else if(p.type==="net"){
  givens=[given("right","Force right (N)",p.right),given("left","Force left (N)",p.left)];
  formula=equations.net;
  extra.push(stage("Assign the direction signs","If right is positive, what signed value represents the leftward force?",[
   number("leftSigned","Signed leftward force (N)",-p.left,
     "The forces are opposite. A leftward force must have a negative sign when right is positive.",
     "Use -"+p.left+" N for the leftward force.",{stageKind:"signed"})
  ]));
 }else if(p.type==="force"){
  givens=[given("mass","Mass m (kg)",p.mass),given("acc","Acceleration a (m/s²)",p.acc)];formula=equations.force;
  subst=[number("massSub","m in Fnet = ma",p.mass,"Mass belongs in the m position.","Locate mass in the problem."),number("accSub","a in Fnet = ma",p.acc,"Acceleration belongs in the a position.","Locate acceleration in the problem.")];
 }else if(p.type==="mass"){
  givens=[given("force","Net force Fnet (N)",p.force),given("acc","Acceleration a (m/s²)",p.acc)];formula=equations.mass;
  subst=[number("forceSub","Numerator Fnet (N)",p.force,"To find mass, divide force by acceleration.","The force is the number above the division line."),number("accSub","Denominator a (m/s²)",p.acc,"Acceleration is the denominator when solving for mass.","Divide by the acceleration.")];
 }else if(p.type==="gravity"){
  givens=[given("force","Weight Fg (N)",p.force),given("mass","Mass m (kg)",p.mass)];formula=equations.gravity;
  subst=[number("forceSub","Numerator Fg (N)",p.force,"Weight (force) should be divided by mass.","The value in newtons goes first."),number("massSub","Denominator mass (kg)",p.mass,"Mass belongs in the denominator.","Use the value given in kilograms.")];
 }else if(p.type==="friction"){
  givens=[given("mass","Mass (kg)",p.mass),given("g","Gravity g (m/s²)",p.g),given("mu","Coefficient of friction μ",p.mu)];formula=equations.friction;
  extra.push(stage("Find the normal force","For this level-surface problem, Fn = mg.",[
   number("normal","Normal force Fn (N)",p.normal,"Before friction, calculate the normal force using mass times g.","Multiply "+p.mass+" × "+p.g+".")
  ]));
 }else if(p.type==="weight"){
  givens=[given("mass","Mass m (kg)",p.mass),given("g","Gravity g (m/s²)",p.g)];formula=equations.weight;
  subst=[number("massSub","m in Fg = mg",p.mass,"Mass must be in the m position.","Use the value in kilograms."),number("gSub","g in Fg = mg",p.g,"The gravitational acceleration belongs in the g position.","Use the gravity value supplied in this question.")];
 }else if(p.type==="normal"){
  givens=[given("gravity","Downward gravity Fg (N)",p.gravity)];formula=equations.normal;
 }
 stages.push(stage("Identify the known values","Copy the given quantities. This helps avoid mixing up force, mass, time, and acceleration.",givens));
 stages.push(stage("Choose an equation","Select the relationship that isolates the quantity requested.",[
   pick("formula","Equation",formula,equationChoices,
    "This equation does not isolate the quantity that the question asks you to calculate.",
    "Name the unknown quantity. Pick the equation that solves for it.")
 ]));
 if(subst.length)stages.push(stage("Substitute the values","Put each number in the correct part of the equation.",subst));
 stages.push(...extra);
 stages.push(stage("Calculate","Complete the arithmetic using the equation and checked values.",[answer(p)]));
 const outputUnit=p.answerUnit||p.to||"";
 const last=[pick("unit","Correct final unit",outputUnit,unitOptions,
  "The number may be right, but the units should describe the quantity asked for.",
  "Force uses N; mass uses kg; speed uses distance/time; acceleration uses distance/time².")];
 if(p.direction)last.push(pick("direction","Direction of answer",p.direction,directionOptions,
   "The direction needs to match the sign and the forces or displacement in the problem.",
   "Identify the positive direction and compare opposing forces."));
 stages.push(stage("Check units and direction","A complete physics result includes the correct unit and, when requested, direction.",last));
 return stages;
}
function itemState(id){return work[id]||(work[id]={stage:0,values:{},attempts:{},complete:false});}
function near(a,b,p){const tol=Math.max(p?.tolerance||0,Math.abs(b)*1e-7,1e-10);return Math.abs(a-b)<=tol;}
function checkField(field,raw){
 const str=String(raw??"").trim();
 if(!str)return {ok:false,kind:"missing",message:"Enter your answer for this part before continuing."};
 if(field.kind==="select")return str===String(field.expected)?{ok:true,message:"Correct—this is the right choice."}:{ok:false,kind:"choice",message:field.error};
 const sanitized=str.replace(/,/g,"").replace(/−/g,"-");
 // A unit is checked separately; a number box only accepts a signed decimal or scientific notation.
 if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(sanitized)){
  return {ok:false,kind:"format",message:"Enter just the numerical value here. Use the unit selector later. Scientific notation like 1.2e-3 is fine."};
 }
 const value=Number(sanitized),expected=Number(field.expected);
 if(!Number.isFinite(value))return {ok:false,kind:"format",message:"That does not look like a finite number."};
 if(near(value,expected,field))return{ok:true,message:"Correct—this step checks out."};
 if(expected!==0&&near(value,-expected,field))return{ok:false,kind:"sign",message:"Sign or direction issue: the magnitude is right but the sign is reversed. "+field.error};
 if(expected!==0&&([10,100,1000,.1,.01,.001].some(f=>near(value,expected*f,field))))return{ok:false,kind:"conversion",message:"Power-of-ten or decimal-place issue: check your conversion factor or the decimal placement. "+field.error};
 if(field.stageKind==="given")return{ok:false,kind:"given",message:"Given-value issue: this is not the number provided for that quantity. "+field.error};
 if(field.stageKind==="factor")return{ok:false,kind:"factor",message:"Conversion-factor issue: the chosen multiplier does not convert the starting units into the target units. "+field.error};
 return{ok:false,kind:"arithmetic",message:"Arithmetic or setup issue: "+field.error};
}
function activeProblems(){return problems.filter(p=>(filters.unit==="all"||String(p.unit)===filters.unit)&&(filters.topic==="all"||p.topic===filters.topic)&&(!filters.query||(p.q+" "+p.topic).toLowerCase().includes(filters.query.toLowerCase())));}
function ensureActive(){const a=activeProblems();if(!a.find(p=>p.id===active))active=a[0]?.id||null;return a;}
function topics(){const set=[...new Set(problems.filter(p=>filters.unit==="all"||String(p.unit)===filters.unit).map(p=>p.topic))].sort();$("#mathTopic").innerHTML='<option value="all">All skills</option>'+set.map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join("");if(!set.includes(filters.topic))filters.topic="all";$("#mathTopic").value=filters.topic;}
function matchingLesson(p){return lessons.find(l=>(l.practiceIds||[]).includes(p.id))||lessons.find(l=>l.unit===p.unit&&(l.title.toLowerCase().includes(p.topic.toLowerCase())||p.topic.toLowerCase().includes(l.title.toLowerCase().split(" ")[0])))||lessons.find(l=>l.unit===p.unit);}
function titleFor(p){return p.topic+" · Unit "+p.unit;}
function renderMath(){
 if(!$("#mathExercise"))return;
 const entries=ensureActive();
 const list=$("#mathProblemList"),host=$("#mathExercise");
 if(!entries.length){list.innerHTML="";host.innerHTML='<div class="empty-state"><h3>No matching calculations</h3><p>Try another unit or skill.</p></div>';return;}
 list.innerHTML=entries.map((p,i)=>{
   const w=itemState(p.id),count=build(p).length,finished=w.complete||w.stage>=count;
   return '<button type="button" class="math-item '+(p.id===active?"selected ":"")+(finished?"finished":"")+'" data-math-id="'+p.id+'"><span class="math-item-number">'+String(i+1).padStart(2,"0")+'</span><span><strong>'+esc(p.topic)+'</strong><small>'+esc(p.q)+'</small></span><span class="math-item-status">'+(finished?"✓":Math.min(w.stage,count)+"/"+count)+'</span></button>';
 }).join("");
 const p=entries.find(x=>x.id===active),steps=build(p),w=itemState(p.id);
 if(!w.values)w.values={};if(!w.attempts)w.attempts={};
 const ix=Math.min(w.stage,steps.length-1),part=steps[ix],complete=w.complete||w.stage>=steps.length;
 const lesson=matchingLesson(p);
 let inputHtml="";
 if(!complete){
  inputHtml=part.fields.map(f=>{
   const value=w.values[f.key]??"";
   const last=(w.feedback||{})[f.key],feedback=last?'<div class="field-feedback '+(last.ok?"correct":"wrong")+'" role="status"><strong>'+esc(last.ok?"Step correct":"Check this")+'</strong> '+esc(last.message)+'</div>':"";
   const control=f.kind==="select"?
   '<select data-math-field="'+esc(f.key)+'" id="math-'+esc(f.key)+'"><option value="">Choose an answer…</option>'+f.options.map(option=>'<option value="'+esc(option)+'" '+(value===option?"selected":"")+'>'+esc(option)+'</option>').join("")+'</select>':
   '<input id="math-'+esc(f.key)+'" data-math-field="'+esc(f.key)+'" type="text" inputmode="decimal" autocomplete="off" placeholder="Enter your number" value="'+esc(value)+'">';
   return '<div class="math-field"><label for="math-'+esc(f.key)+'">'+esc(f.label)+'</label>'+control+feedback+'</div>';
  }).join("");
 }
 const finishedSteps=steps.slice(0,Math.min(w.stage,steps.length)).map((part,i)=>{
  const checked=part.fields.map(field=>'<span>'+esc(field.label)+': <strong>'+esc(w.values[field.key]??field.expected)+'</strong></span>').join("");
  return '<details class="math-reviewed"><summary>✓ Step '+(i+1)+': '+esc(part.title)+'</summary><div>'+checked+'</div></details>';
 }).join("");
 const stageDots=steps.map((x,i)=>'<span class="math-dot '+(i<w.stage?"passed":i===w.stage?"current":"")+'" title="'+esc(x.title)+'"></span>').join("");
 const panel=complete?'<div class="math-complete"><strong>Calculation completed ✓</strong><p>You checked every part of your work, including the equation, numbers, units, and direction where needed.</p><button type="button" class="secondary-button" data-math-restart="'+p.id+'">Practice this problem again</button></div>':
   '<div class="math-step-card"><div class="math-step-header"><span>STEP '+(ix+1)+' OF '+steps.length+'</span><span>'+esc(part.title)+'</span></div><h3>'+esc(part.title)+'</h3><p>'+esc(part.intro)+'</p><div class="math-fields">'+inputHtml+'</div>'+(w.hint?'<p class="math-hint">'+esc(part.fields.map(f=>f.hint).filter(Boolean).join(" "))+'</p>':"")+'<div class="math-step-actions"><button type="button" class="primary-button" data-math-check="'+p.id+'">Check this step →</button><button type="button" class="secondary-button" data-math-hint="'+p.id+'">'+(w.hint?"Hide hint":"Need a hint?")+'</button></div></div>';
 host.innerHTML='<div class="math-prompt"><span class="topic-pill">UNIT '+p.unit+' · '+esc(p.topic)+'</span><h2>'+esc(p.q)+'</h2><p>Complete each step in order. When an answer needs correcting, you will see exactly where to revisit your work.</p>'+(lesson?'<button type="button" class="mini-link" data-open-lesson="'+lesson.id+'" data-from-view="math">Review this concept: '+esc(lesson.title)+' ↗</button>':"")+'</div><div class="math-progress">'+stageDots+'</div>'+finishedSteps+panel+
 '<div class="math-session"><span>Your work is saved on this device.</span><span>'+(complete?"Completed":(w.stage+" steps checked"))+'</span></div>';
}
function gradeCurrent(id){
 const p=problems.find(x=>x.id===id);if(!p)return;
 const w=itemState(id),parts=build(p);if(w.complete||w.stage>=parts.length)return;
 const part=parts[w.stage];w.feedback={};let all=true;
 for(const f of part.fields){
   const input=$('[data-math-field="'+f.key+'"]');
   const raw=input?.value??w.values?.[f.key]??"";
   w.values[f.key]=raw;
   const v=checkField(f,raw);w.feedback[f.key]=v;
   if(!v.ok)all=false;
 }
 w.attempts[w.stage]=(w.attempts[w.stage]||0)+1;
 if(all){w.stage++;w.feedback={};w.hint=false;w.complete=w.stage>=parts.length;setStatus("Step correct. You can continue to the next step.");}
 else{setStatus("A step needs correcting. Read the feedback next to your answer.");}
 persist();renderMath();
}
function setCurrentMath(id){
 if(!problems.some(x=>x.id===id))return;
 const p=problems.find(x=>x.id===id);filters.unit="all";filters.topic="all";filters.query="";
 $("#mathUnit").value="all";$("#mathSearch").value="";topics();active=id;
 renderMath();location.hash="#/math";window.scrollTo({top:0,behavior:"instant"});
}
function renderLessons(){
 const grid=$("#lessonGrid"),detail=$("#lessonDetail");
 if(!grid||!detail)return;
 const search=lessonFilters.query.toLowerCase();
 const list=lessons.filter(l=>(lessonFilters.unit==="all"||String(l.unit)===lessonFilters.unit)&&(!search||(l.title+" "+l.lead+" "+l.points.join(" ")).toLowerCase().includes(search)));
 if(currentLesson){
  const l=lessons.find(x=>x.id===currentLesson);if(!l){currentLesson=null;return renderLessons();}
  grid.hidden=true;detail.hidden=false;
  detail.innerHTML='<button type="button" class="secondary-button lesson-back" data-close-lesson="1">← All mini-lessons</button><article class="lesson-full"><span class="topic-pill">UNIT '+l.unit+' · MINI-LESSON</span><h2>'+esc(l.title)+'</h2><p class="lesson-lead">'+esc(l.lead)+'</p><h3>What to remember</h3><ol class="lesson-points">'+l.points.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ol>'+(l.formula?'<div class="lesson-equation"><span>KEY EQUATION</span><code>'+esc(l.formula)+'</code></div>':'')+'<h3>From class</h3><p>'+esc(l.example)+'</p><div class="lesson-watch"><strong>Common mistake</strong><p>'+esc(l.pitfall)+'</p></div><div class="lesson-actions">'+(l.practiceIds||[]).map(id=>problems.some(p=>p.id===id)?'<button type="button" class="primary-button" data-math-open="'+id+'">Practice this skill →</button>':'').join("")+'</div></article>'+(returnTo!=="lessons"?'<button class="secondary-button" type="button" data-return-practice="1">← Return to your '+(returnTo==="math"?"math problem":"review")+'</button>':'');
 }else{
  grid.hidden=false;detail.hidden=true;
  grid.innerHTML=list.length?list.map(l=>'<button type="button" class="lesson-tile" data-open-lesson="'+l.id+'" data-from-view="lessons"><span class="topic-pill">UNIT '+l.unit+'</span><h3>'+esc(l.title)+'</h3><p>'+esc(l.lead)+'</p><span class="lesson-tile-action">Open mini-lesson ↗</span></button>').join(""):'<div class="empty-state"><h3>No lessons found</h3><p>Clear the search or select another unit.</p></div>';
 }
}
function openLesson(id,from){
 if(!lessons.some(x=>x.id===id))return;
 currentLesson=id;returnTo=from||"lessons";
 lessonFilters.unit="all";lessonFilters.query="";$("#lessonUnit").value="all";$("#lessonSearch").value="";
 location.hash="#/lessons";
 renderLessons();
 window.scrollTo({top:0,behavior:"instant"});
}
function relatedLesson(unit,topic){
 const t=String(topic||"").toLowerCase();
 if(unit===1)return (/experiment|variable|scientific thinking/.test(t)?"lab-variables":/graph/.test(t)?"graphs":/conversion|metric/.test(t)?"conversions":"measurements");
 if(unit===2)return (/accelerat/.test(t)?"acceleration":/distance|displacement/.test(t)?"distance":/graph/.test(t)?"motion-graphs":"speed");
 return (/friction/.test(t)?"friction":/mass|weight|gravity/.test(t)?"gravity":/third|3rd/.test(t)?"newton3":/equilibrium/.test(t)?"net":/newton/.test(t)?"newton2":"forces");
}
function handle(e){
 const b=e.target.closest("button");if(!b)return;
 if(b.dataset.mathId){active=b.dataset.mathId;renderMath();return;}
 if(b.dataset.mathCheck){gradeCurrent(b.dataset.mathCheck);return;}
 if(b.dataset.mathHint){const w=itemState(b.dataset.mathHint);w.hint=!w.hint;persist();renderMath();return;}
 if(b.dataset.mathRestart){work[b.dataset.mathRestart]={stage:0,values:{},attempts:{},complete:false};persist();renderMath();return;}
 if(b.dataset.mathOpen){setCurrentMath(b.dataset.mathOpen);return;}
 if(b.dataset.openLesson){openLesson(b.dataset.openLesson,b.dataset.fromView||"lessons");return;}
 if(b.dataset.closeLesson){currentLesson=null;returnTo="lessons";renderLessons();return;}
 if(b.dataset.returnPractice){const view=returnTo;currentLesson=null;returnTo="lessons";location.hash="#/"+view;return;}
}
function wire(){
 $("#mathExercise").addEventListener("input",e=>{const k=e.target.dataset.mathField;if(k===undefined||!active)return;const w=itemState(active);w.values[k]=e.target.value;if(w.feedback)delete w.feedback[k];persist();});
 $("#mathUnit").addEventListener("change",e=>{filters.unit=e.target.value;filters.topic="all";topics();renderMath();});
 $("#mathTopic").addEventListener("change",e=>{filters.topic=e.target.value;renderMath();});
 $("#mathSearch").addEventListener("input",e=>{filters.query=e.target.value.trim();renderMath();});
 $("#lessonUnit").addEventListener("change",e=>{lessonFilters.unit=e.target.value;currentLesson=null;renderLessons();});
 $("#lessonSearch").addEventListener("input",e=>{lessonFilters.query=e.target.value.trim();currentLesson=null;renderLessons();});
 document.addEventListener("click",handle);
 topics();
}
wire();
window.PHYSICS_WORKSHOP={renderMath,renderLessons,openLesson,relatedLesson,setCurrentMath,checkField,build,problems,lessons};
})();