(() => {
"use strict";
const bank=window.PHYSICS7;
if(!bank || !Array.isArray(bank.quizzes)){document.body.textContent="Review questions failed to load.";return;}
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const safe=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const read=(key)=>{try{return JSON.parse(localStorage.getItem(key))||{};}catch(e){return {};}};
const save=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val));}catch(e){announce("This browser is not saving progress. You can still practice.");}};
const history=read("physics7_answers_v1"),notes=read("physics7_notes_v1");
let filter={unit:"all",topic:"all",search:""},workFilter={unit:"all",topic:"all"},index=0,selectedMulti={},feedback={},currentView="home";
const topicNames=[...new Set(bank.quizzes.map(q=>q.topic))];
function announce(message){const target=$("#liveStatus");if(target) target.textContent=message;}
function getQuestions(){return bank.quizzes.filter(q=>(filter.unit==="all"||String(q.unit)===filter.unit)&&(filter.topic==="all"||q.topic===filter.topic)&&(!filter.search||(q.q+" "+q.topic+" "+q.options.join(" ")).toLowerCase().includes(filter.search.toLowerCase())));}
function getWork(){return bank.workbook.filter(q=>(workFilter.unit==="all"||String(q.unit)===workFilter.unit)&&(workFilter.topic==="all"||q.topic===workFilter.topic));}
function attempted(){return Object.values(history).filter(x=>x&&x.attempted).length;}
function incorrect(){return bank.quizzes.filter(q=>history[q.id]?.attempted&&!history[q.id].passed);}
function updateStats(){let attempts=bank.quizzes.filter(q=>history[q.id]?.attempted);let first=attempts.filter(q=>history[q.id].firstCorrect).length;$("#statAttempted").textContent=attempts.length;$("#statAttemptCaption").textContent=`${bank.quizzes.length} quick checks available`;$("#statAccuracy").textContent=attempts.length?Math.round(first/attempts.length*100)+"%":"—";$("#statMissed").textContent=incorrect().length;$("#navQuizCount").textContent=bank.quizzes.length;}
function setView(view){currentView=view;$$(".view").forEach(v=>v.hidden=v.id!==view+"View");$$(".nav-link").forEach(b=>{let on=b.dataset.view===view;b.classList.toggle("active",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");});$("#currentLocation").textContent={home:"OVERVIEW",practice:"QUICK CHECKS",workbook:"SKILL PRACTICE",mistakes:"RETRY MISSED",resources:"STUDY RESOURCES"}[view];$("#main").focus({preventScroll:true});window.scrollTo({top:0,behavior:"instant"});$(".sidebar").classList.remove("open");$("#menuButton").setAttribute("aria-expanded","false");if(view==="practice")renderQuiz();if(view==="workbook")renderWork();if(view==="mistakes")renderMissed();if(view==="resources")renderResources();updateStats();}
function go(view){const hash="#/"+view;if(location.hash===hash){setView(view);}else{location.hash=hash;}}
function syncRoute(){const name=location.hash.replace(/^#\/?/,"");setView(["home","practice","workbook","mistakes","resources"].includes(name)?name:"home");}
function topicSelect(selectId,data,unit){const el=$(selectId),prev=el.value;let list=[...new Set(data.filter(q=>unit==="all"||String(q.unit)===unit).map(q=>q.topic))].sort();el.innerHTML='<option value="all">All topics</option>'+list.map(t=>'<option value="'+safe(t)+'">'+safe(t)+'</option>').join("");el.value=list.includes(prev)?prev:"all";return el.value;}
function setUnit(unit){filter={unit:String(unit),topic:"all",search:""};$("#quizUnit").value=filter.unit;$("#quizSearch").value="";$("#quizTopic").value=topicSelect("#quizTopic",bank.quizzes,filter.unit);index=0;go("practice");}
function renderQuiz(){
 const questions=getQuestions(), total=questions.length,area=$("#quizArea"),dots=$("#quizDots");
 $("#quizPosition").textContent=total?`Question ${Math.min(index+1,total)} of ${total}`:"No matching questions";
 $("#prevQuestion").disabled=index<=0||!total;$("#nextQuestion").disabled=index>=total-1||!total;
 if(!total){area.innerHTML='<div class="empty-state"><h3>No questions found</h3><p>Try another unit or topic.</p></div>';dots.innerHTML="";$("#sourceAside").textContent="All auto-graded questions come from the 2023 school review slides.";return;}
 index=Math.max(0,Math.min(index,total-1));const q=questions[index],result=history[q.id]||{},multi=Array.isArray(q.answer),choices=selectedMulti[q.id]||[];
 $("#quizPosition").textContent=`Question ${index+1} of ${total}`;
 dots.innerHTML=questions.map((other,i)=>'<button type="button" aria-label="Go to question '+(i+1)+'" data-dot="'+i+'" class="'+(i===index?"active ":"")+(history[other.id]?.passed?"done":"")+'"></button>').join("");
 const options=q.options.map((item,i)=>{
  const chosen=multi?choices.includes(i):result.last===i;
  const correct=result.passed&&(multi?q.answer.includes(i):q.answer===i);
  const incorrectChoice=!result.passed&&result.attempted&&result.last===i&&!multi;
  return '<button type="button" class="option '+(chosen?"selected ":"")+(correct?"correct ":"")+(incorrectChoice?"incorrect":"")+'" data-option="'+i+'" aria-pressed="'+Boolean(chosen)+'" '+(result.passed?"disabled":"")+'><span class="letter">'+String.fromCharCode(65+i)+'</span><span>'+safe(item)+'</span></button>';
 }).join("");
 const msg=feedback[q.id]||(result.passed?"Correct! Matched the school's answer key.":result.attempted?"Not quite. Try a different answer.":"");
 const fb=msg?'<div class="feedback '+(result.passed?"correct":"incorrect")+'" role="status"><strong>'+(result.passed?"Nice work!":"Keep going.")+'</strong>'+safe(msg)+(result.passed&&result.attempted&&!result.firstCorrect?'<div>Corrected after your first attempt.</div>':"")+'</div>':"";
 area.innerHTML='<div class="question-topline"><span class="topic-pill">UNIT '+q.unit+' · '+safe(q.topic)+'</span><span class="source-code">2023 REVIEW · SLIDE '+q.slide+'</span></div><h2>'+safe(q.q)+'</h2><div class="option-list">'+options+'</div>'+(multi&&!result.passed?'<button type="button" class="primary-button" style="margin-top:16px" id="checkMultiple" '+(choices.length?"":"disabled")+' >Check selected answers →</button>':"")+fb;
 $("#sourceAside").textContent="Physics 7 Pre-Comp Review (2023), slide "+q.slide+". Answer taken from the original slide key.";
}
function grade(q,selection){
 const expected=Array.isArray(q.answer)?q.answer:[q.answer];
 const answer=Array.isArray(selection)?selection:[selection];
 const right=expected.length===answer.length&&expected.every(x=>answer.includes(x));
 let item=history[q.id]||{attempted:false,firstCorrect:false,passed:false};
 if(!item.attempted){item.attempted=true;item.firstCorrect=right;}
 item.passed=item.passed||right;item.last=Array.isArray(selection)?null:selection;item.tries=(item.tries||0)+1;
 history[q.id]=item;feedback[q.id]=right?"Your answer matches the original school review key.":"That doesn't match the school's review key. Review the choices and try again.";
 save("physics7_answers_v1",history);updateStats();renderQuiz();announce(right?"Correct.":"Try again.");
}
function renderWork(){
 const list=getWork();$("#workbookCards").innerHTML=list.length?list.map(item=>'<article class="workbook-card"><div class="wb-top"><span class="topic-pill">UNIT '+item.unit+' · '+safe(item.topic)+'</span><span class="not-graded">SELF-CHECK</span></div><h3>Workbook practice</h3><div class="wb-question">'+safe(item.q)+'</div><label class="sr-only" for="note-'+item.id+'">Your working notes for '+safe(item.source)+'</label><textarea id="note-'+item.id+'" data-note="'+item.id+'" placeholder="Your work, notes, or reasoning…">'+safe(notes[item.id]||"")+'</textarea><div class="wb-footer"><span>'+safe(item.source)+'</span><span>Notes save on this device</span></div></article>').join(""):'<div class="empty-state"><h3>No exercises here</h3><p>Choose another unit or topic.</p></div>';
}
function renderMissed(){
 const list=incorrect(),target=$("#missedList");
 target.innerHTML=list.length?list.map(q=>'<article class="missed-card"><div><span class="topic-pill">UNIT '+q.unit+' · '+safe(q.topic)+'</span><p>'+safe(q.q)+'</p></div><button type="button" class="small-action" data-retry="'+safe(q.id)+'">Retry →</button></article>').join(""):'<div class="empty-state"><h3>Nothing to retry right now ✦</h3><p>Missed questions appear here until you answer them correctly.</p><button type="button" class="primary-button" data-action="start">Open quick checks →</button></div>';
}
function renderResources(){
 $("#equationList").innerHTML=bank.equations.map(([title,equation])=>'<div class="equation-row"><span>'+safe(title)+'</span><code>'+safe(equation)+'</code></div>').join("");
}
function printSummary(){
 const total=bank.quizzes.filter(q=>history[q.id]?.attempted),first=total.filter(q=>history[q.id].firstCorrect).length,miss=incorrect(),written=Object.values(notes).filter(v=>String(v).trim()).length;
 const byUnit=[1,2,3].map(u=>{const a=bank.quizzes.filter(q=>q.unit===u&&history[q.id]?.attempted),cor=a.filter(q=>history[q.id].firstCorrect);return '<tr><td>Unit '+u+'</td><td>'+a.length+'</td><td>'+(a.length?Math.round(cor.length*100/a.length)+'%':'—')+'</td></tr>';}).join("");
 $$("#printSummary").forEach(n=>n.remove());const sheet=document.createElement("section");sheet.id="printSummary";sheet.className="print-sheet";
 sheet.innerHTML='<h1>Physics 7 · Pre-Comp Study Summary</h1><p>Generated: '+safe(new Date().toLocaleDateString())+' · Units 1–3</p><p><strong>'+total.length+'</strong> questions attempted · <strong>'+(total.length?Math.round(first/total.length*100)+"%":"—")+'</strong> first-try accuracy · <strong>'+miss.length+'</strong> needing retry · <strong>'+written+'</strong> workbook exercises with notes</p><h2>Unit progress</h2><table><tr><th>Unit</th><th>Attempted</th><th>First-try accuracy</th></tr>'+byUnit+'</table><h2>To revisit</h2>'+(miss.length?'<ul>'+miss.map(q=>'<li>Unit '+q.unit+' — '+safe(q.topic)+' (school review slide '+q.slide+')</li>').join("")+'</ul>':'<p>No missed quick checks remaining.</p>')+'<p>This is a practice summary, not a graded exam result. Workbook notes are self-checked. Progress is saved only on the current device.</p>';
 document.body.appendChild(sheet);window.print();
}
document.addEventListener("click",e=>{
 const b=e.target.closest("button");if(!b)return;
 if(b.id==="menuButton"){const opened=$(".sidebar").classList.toggle("open");b.setAttribute("aria-expanded",String(opened));return;}
 if(b.id==="printButton"){printSummary();return;}
 if(b.dataset.view){go(b.dataset.view);return;}
 if(b.dataset.unit){setUnit(b.dataset.unit);return;}
 if(b.dataset.action==="start"){filter={unit:"all",topic:"all",search:""};$("#quizUnit").value="all";$("#quizSearch").value="";filter.topic=topicSelect("#quizTopic",bank.quizzes,"all");index=0;go("practice");return;}
 if(b.dataset.action==="skills"){go("workbook");return;}
 if(b.dataset.action==="unit"){setUnit(b.dataset.chooseUnit);return;}
 if(b.dataset.dot!==undefined){index=Number(b.dataset.dot);renderQuiz();return;}
 if(b.id==="prevQuestion"){index=Math.max(0,index-1);renderQuiz();return;}
 if(b.id==="nextQuestion"){index=Math.min(index+1,getQuestions().length-1);renderQuiz();return;}
 if(b.dataset.option!==undefined){const q=getQuestions()[index];if(!q||history[q.id]?.passed)return;const pos=Number(b.dataset.option);if(Array.isArray(q.answer)){const ary=selectedMulti[q.id]||[];selectedMulti[q.id]=ary.includes(pos)?ary.filter(i=>i!==pos):[...ary,pos].sort();renderQuiz();}else grade(q,pos);return;}
 if(b.id==="checkMultiple"){const q=getQuestions()[index];if(q&&Array.isArray(q.answer))grade(q,selectedMulti[q.id]||[]);return;}
 if(b.dataset.retry){filter={unit:"all",topic:"all",search:""};$("#quizUnit").value="all";$("#quizSearch").value="";topicSelect("#quizTopic",bank.quizzes,"all");index=getQuestions().findIndex(q=>q.id===b.dataset.retry);go("practice");return;}
});
$("#quizUnit").addEventListener("change",e=>{filter.unit=e.target.value;filter.topic=topicSelect("#quizTopic",bank.quizzes,filter.unit);index=0;renderQuiz();});
$("#quizTopic").addEventListener("change",e=>{filter.topic=e.target.value;index=0;renderQuiz();});
$("#quizSearch").addEventListener("input",e=>{filter.search=e.target.value.trim();index=0;renderQuiz();});
$("#workUnit").addEventListener("change",e=>{workFilter.unit=e.target.value;workFilter.topic=topicSelect("#workTopic",bank.workbook,workFilter.unit);renderWork();});
$("#workTopic").addEventListener("change",e=>{workFilter.topic=e.target.value;renderWork();});
$("#workbookCards").addEventListener("input",e=>{const id=e.target.dataset.note;if(!id)return;notes[id]=e.target.value;save("physics7_notes_v1",notes);});
window.addEventListener("hashchange",syncRoute);
topicSelect("#quizTopic",bank.quizzes,"all");topicSelect("#workTopic",bank.workbook,"all");updateStats();syncRoute();
})();
