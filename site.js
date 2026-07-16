
// Momentum check quiz
const questions=[
 {q:"When someone asks 'so, what do you do?' — what happens?",o:[["I light up. I know exactly what my story is.",3],["I have an answer, but it undersells me.",2],["I ramble, then wish I'd said something else.",1]]},
 {q:"Your career direction for the next two years is…",o:[["Clear — I know the next move and why.",3],["Foggy — a few options, no decision.",2],["Honestly? I've been avoiding the question.",1]]},
 {q:"In your last interview or big meeting, you felt…",o:[["Present and persuasive.",3],["Fine, but I left points on the table.",2],["Like a smaller version of myself.",1]]},
 {q:"When it's time to talk money — rates, salary, raises…",o:[["I ask for what I'm worth, calmly.",3],["I ask, but I pre-shrink the number first.",2],["I avoid the conversation entirely.",1]]},
 {q:"Speaking in front of a room makes you feel…",o:[["Alive — it's where I do my best work.",3],["Capable but over-rehearsed and drained.",2],["Like the fire alarm would be a mercy.",1]]},
 {q:"The story of what you've been through — could you tell it out loud?",o:[["Yes, and it would move people.",3],["Parts of it. Some chapters stay closed.",2],["I've never found the words.",1]]}
];
let qi=0,score=0;
function startQuiz(){qi=0;score=0;showQ()}
function showQ(){
 const box=document.getElementById('quizBox');if(!box)return;
 if(qi>=questions.length){showResult();return}
 const q=questions[qi];
 box.innerHTML=`<div class="quiz-progress">Question ${qi+1} of ${questions.length}</div>
  <div class="quiz-q">${q.q}</div>
  <div class="quiz-opts">${q.o.map(o=>`<button onclick="answer(${o[1]})">${o[0]}</button>`).join('')}</div>`;
}
function answer(p){score+=p;qi++;showQ()}
function showResult(){
 const max=questions.length*3,pct=Math.round(score/max*100);
 let band,rec,link,cta;
 if(pct>=80){band='Flowing';rec="You've got real momentum. The Circle would sharpen it — and your story might be exactly what someone else needs to hear.";link='circle.html';cta='Join the Circle'}
 else if(pct>=55){band='Building';rec='Solid ground, with clear room to claim more. The Career Momentum package is built for exactly this stage.';link='coaching.html';cta='See coaching packages'}
 else{band='Stirring';rec='Something wants to move — it just needs structure and a voice. Own Your Story is where that begins.';link='coaching.html';cta='Explore Own Your Story'}
 const hue=pct>=80?'var(--teal)':pct>=55?'var(--gold)':'var(--ember)';
 document.getElementById('quizBox').innerHTML=`
  <div class="center">
   <div class="gauge" style="background:conic-gradient(${hue} ${pct*3.6}deg, var(--mist) 0deg)"><span style="background:var(--card);width:130px;height:130px;border-radius:50%;display:flex;align-items:center;justify-content:center">${pct}</span></div>
   <h3 style="font-size:26px;margin-bottom:8px">Your momentum: ${band}</h3>
   <p class="muted" style="max-width:440px;margin:0 auto 24px">${rec}</p>
   <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    <a class="btn btn-primary" href="${link}">${cta}</a>
    <button class="btn btn-ghost" onclick="startQuiz()">Retake</button>
   </div>
  </div>`;
}
if(document.getElementById('quizBox'))startQuiz();
