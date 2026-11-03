/* ============================ UI 로직 ============================ */

function typeset(el){
  if(window.MathJax && MathJax.typesetPromise){
    MathJax.typesetPromise(el?[el]:undefined).catch(()=>{});
  }
}

/* ---- 탭 전환 ---- */
const tabs = document.getElementById('tabs');
function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
  window.scrollTo({top:0,behavior:'smooth'});
}
tabs.addEventListener('click', e=>{
  const b=e.target.closest('button'); if(!b) return;
  showView(b.dataset.view);
});
document.addEventListener('click', e=>{
  const g=e.target.closest('[data-goto]'); if(g){ showView(g.dataset.goto); }
});

/* ---- 섹션별 정리 렌더 ---- */
function renderSections(){
  const root=document.getElementById('sections-root');
  const nav=document.getElementById('secnav');
  root.innerHTML=''; nav.innerHTML='';
  SECTIONS.forEach((s,i)=>{
    const id='sec-'+i;
    // nav chip
    const chip=document.createElement('button');
    chip.textContent=s.code;
    chip.onclick=()=>{
      const d=document.getElementById(id);
      d.open=true; d.scrollIntoView({behavior:'smooth',block:'start'});
    };
    nav.appendChild(chip);

    const det=document.createElement('details');
    det.className='sec'; det.id=id; if(i===0) det.open=true;

    let keyHtml = s.key.map(k=>`
      <div class="kbox"><div class="label">${k.label}</div>${k.html}</div>`).join('');

    let probHtml = s.probs.map((p,pi)=>`
      <div class="prob" id="${id}-p${pi}">
        <div class="ph"><span class="num">예제 ${pi+1}</span><span class="src">${p.src}</span></div>
        <div class="q">${p.q}</div>
        <button class="toggle" data-prob="${id}-p${pi}">풀이 보기</button>
        <div class="sol">${p.sol}</div>
      </div>`).join('');

    det.innerHTML=`
      <summary>
        <span class="code">${s.code}</span>
        <span class="title">${s.title}</span>
        <span class="chev">▾</span>
      </summary>
      <div class="body">
        <h4>핵심 정리</h4>
        ${keyHtml}
        <h4>예제 (연습문제·퀴즈 기반)</h4>
        ${probHtml}
      </div>`;
    root.appendChild(det);
  });

  // 풀이 토글
  root.addEventListener('click', e=>{
    const t=e.target.closest('.toggle'); if(!t) return;
    const box=document.getElementById(t.dataset.prob);
    const open=box.classList.toggle('open');
    t.textContent=open?'풀이 숨기기':'풀이 보기';
    if(open) typeset(box);
  });
  typeset(root);
}

/* ---- 모의고사 ---- */
let currentExam=0;
let timer=null, remain=90*60;

function fmt(s){const m=String(Math.floor(s/60)).padStart(2,'0');const ss=String(s%60).padStart(2,'0');return m+':'+ss;}
function setTimerDisplay(){document.getElementById('timer').textContent=fmt(remain);}
function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
function startTimer(){
  stopTimer();
  timer=setInterval(()=>{
    if(remain<=0){stopTimer();return;}
    remain--; setTimerDisplay();
    if(remain===0){alert('시간 종료! 수고하셨어요. 채점 또는 풀이 공개를 눌러 확인하세요.');}
  },1000);
}

function renderExamPicker(){
  const p=document.getElementById('exampick'); p.innerHTML='';
  EXAMS.forEach((ex,i)=>{
    const b=document.createElement('button');
    b.textContent=ex.name; b.className=i===currentExam?'active':'';
    b.onclick=()=>{currentExam=i; renderExamPicker(); renderExam();};
    p.appendChild(b);
  });
}

function renderExam(){
  const ex=EXAMS[currentExam];
  const root=document.getElementById('exam-root');
  document.getElementById('scorebox').classList.remove('show');
  let html=`<div class="divider">PART I · 단답형 (각 2점, 총 20점)</div>`;
  ex.short.forEach((q,i)=>{
    html+=`
      <div class="eq" id="e${currentExam}s${i}">
        <div class="ph"><span class="num">${i+1}</span><div class="q">${q.q}</div><span class="pts">2점</span></div>
        <input class="short" data-idx="${i}" placeholder="답 입력 (예: 7.01, 512pi/5, <2,1,-3>)" autocomplete="off">
        <div class="sol"><b>정답/풀이.</b> ${q.sol}</div>
      </div>`;
  });
  html+=`<div class="divider">PART II · 서술형 (각 10점, 총 30점)</div>`;
  ex.essay.forEach((q,i)=>{
    html+=`
      <div class="eq reveal-target" id="e${currentExam}e${i}">
        <div class="ph"><span class="num">${i+1}</span><div class="q">${q.q}</div><span class="pts">10점</span></div>
        <textarea placeholder="여기에 풀이 과정을 적어보세요 (자가 채점용)"></textarea>
        <button class="btn ghost" style="margin-top:10px" data-essay="e${currentExam}e${i}">모범답안 보기</button>
        <div class="sol"><b>모범답안.</b> ${q.sol}</div>
      </div>`;
  });
  root.innerHTML=html;

  // 서술형 개별 토글
  root.querySelectorAll('[data-essay]').forEach(btn=>{
    btn.onclick=()=>{
      const box=document.getElementById(btn.dataset.essay);
      const open=box.classList.toggle('reveal');
      btn.textContent=open?'모범답안 숨기기':'모범답안 보기';
      if(open) typeset(box);
    };
  });
  typeset(root);
}

/* ---- 채점 ---- */
function normalize(s){
  return (s||'').toString().toLowerCase()
    .replace(/\s+/g,'')
    .replace(/[⟨〈]/g,'<').replace(/[⟩〉]/g,'>')
    .replace(/[（(]/g,'<').replace(/[）)]/g,'>')   // 괄호를 꺾쇠로 통일(벡터 표기 허용)
    .replace(/√/g,'sqrt').replace(/π/g,'pi')
    .replace(/−/g,'-')
    .replace(/×10\^?/g,'e');
}
function gradeShort(){
  const ex=EXAMS[currentExam];
  const inputs=document.querySelectorAll('#exam-root .short');
  let correct=0;
  inputs.forEach((inp,i)=>{
    const q=ex.short[i];
    const u=normalize(inp.value);
    const accepts=(q.accept||[q.answer]).map(normalize);
    const ok = u!=='' && accepts.includes(u);
    const box=document.getElementById('e'+currentExam+'s'+i);
    inp.style.borderColor = ok ? 'var(--good)' : (inp.value? 'var(--bad)':'var(--line)');
    if(ok) correct++;
    // 틀렸거나 비었으면 풀이 노출
    if(!ok){ box.classList.add('reveal'); typeset(box); }
  });
  const sb=document.getElementById('scorebox');
  sb.classList.add('show');
  sb.innerHTML=`단답 채점 결과: <b>${correct} / ${ex.short.length}</b> 정답 · 점수 <b>${correct*2} / 20</b>
   <div class="note">초록 테두리=정답, 빨강=오답(풀이가 자동으로 펼쳐집니다). 서술형은 모범답안과 비교해 자가채점하세요.</div>`;
  window.scrollTo({top: document.getElementById('view-exams').offsetTop, behavior:'smooth'});
}
function revealAll(){
  document.querySelectorAll('#exam-root .eq').forEach(b=>{b.classList.add('reveal');});
  document.querySelectorAll('#exam-root [data-essay]').forEach(b=>b.textContent='모범답안 숨기기');
  typeset(document.getElementById('exam-root'));
}

/* ---- 학습 가이드 ---- */
function renderGuide(){
  const root=document.getElementById('guide-root');
  root.innerHTML=`
  <div class="sec" style="padding:0">
    <div class="body" style="border-top:none;padding-top:16px">
      <h4>자주 나오는 유형 (퀴즈·연습문제 분석)</h4>
      <ul class="clean">
        <li><b>외적·스칼라 삼중적</b>: 평행육면체 부피 \\(|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|\\), 삼각형 넓이 \\(\\tfrac12|\\mathbf a\\times\\mathbf b|\\). <span class="note">부호·성분 실수 주의.</span></li>
        <li><b>직선/평면/이차곡면</b>: 교선 방향 \\(=\\mathbf n_1\\times\\mathbf n_2\\), 완전제곱으로 곡면 분류.</li>
        <li><b>벡터함수</b>: 접선 매개변수방정식, <b>곡률</b> \\(\\kappa=\\frac{|\\mathbf r'\\times\\mathbf r''|}{|\\mathbf r'|^3}\\), <b>접촉평면</b>(법선 \\(\\propto\\mathbf r'\\times\\mathbf r''\\)), <b>호길이 재매개변수화</b>.</li>
        <li><b>선형근사·전미분</b>: 오차추정(직육면체 부피), 근삿값 계산.</li>
        <li><b>연쇄법칙</b>: 나무그림으로 모든 경로 합, 음함수 \\(z_x=-F_x/F_z\\).</li>
        <li><b>기울기·방향도함수</b>: \\(D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u\\), 최대증가율 \\(|\\nabla f|\\).</li>
        <li><b>극값</b>: 2계 판정 \\(D=f_{xx}f_{yy}-f_{xy}^2\\); 닫힌영역은 경계 포함.</li>
        <li><b>라그랑주 승수</b>: \\(\\nabla f=\\lambda\\nabla g\\).</li>
        <li><b>다중적분</b>: <b>적분순서 교환</b>(\\(e^{y^3},e^{y^4},\\sin y^2\\) 처럼 안 풀리는 적분), <b>극/원기둥/구면좌표</b>, <b>야코비안 변수변환</b>.</li>
      </ul>

      <h4>자주 하는 실수 체크리스트</h4>
      <ul class="clean">
        <li>외적/행렬식의 <b>부호</b> (특히 가운데 항 부호).</li>
        <li>곡률에서 \\(|\\mathbf r'|^3\\) 세제곱 빼먹기.</li>
        <li>단위벡터로 정규화 안 한 채 방향도함수 계산.</li>
        <li>적분순서 교환 시 <b>영역을 그림으로</b> 다시 그리기 (한계 뒤바뀜).</li>
        <li>극좌표·구면좌표의 <b>야코비안</b> \\(r,\\ \\rho^2\\sin\\phi\\) 누락.</li>
        <li>라그랑주에서 \\(\\lambda=0\\) 또는 분모 0 경우 별도 확인.</li>
      </ul>

      <h4>추천 학습 순서</h4>
      <ol class="clean">
        <li>섹션별 정리에서 공식 복습 → 각 예제 직접 풀고 풀이 확인</li>
        <li>모의고사 1회 (90분 타이머) → 채점 → 틀린 유형 섹션 재복습</li>
        <li>모의고사 2·3회로 반복, 서술형은 과정 서술 연습</li>
      </ol>
      <p class="note">자료 출처: 강의안 sec11.5–14.9, 조교 연습문제 Week 1–9, 공학수학2 퀴즈. 모의고사 문항은 이들을 변형·재구성한 예상 문제입니다.</p>
    </div>
  </div>`;
  typeset(root);
}

/* ---- 초기화 ---- */
document.getElementById('startBtn').onclick=startTimer;
document.getElementById('resetBtn').onclick=()=>{stopTimer();remain=90*60;setTimerDisplay();renderExam();};
document.getElementById('gradeBtn').onclick=gradeShort;
document.getElementById('revealBtn').onclick=revealAll;

renderSections();
renderExamPicker();
renderExam();
renderGuide();
setTimerDisplay();
