/* ===== Original inline script 1 from coach-feedback.html ===== */
(function() {
document.getElementById('skillFilter').onchange=e=>document.querySelectorAll('.feedback-item').forEach(x=>x.style.display=(e.target.value==='all'||x.dataset.skill===e.target.value)?'block':'none')
})();

/* ===== Original inline script 2 from coach-feedback.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),sidebar=document.getElementById('sidebar'),menuBtn=document.getElementById('menuBtn'),overlay=document.getElementById('overlay'),modal=document.getElementById('helpModal');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.onclick=()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'};
rtlToggle.onclick=()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl');rtlToggle.textContent=document.documentElement.dir==='rtl'?'LTR':'RTL';};
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}menuBtn.onclick=()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')};overlay.onclick=closeMenu;
})();

/* ===== Original inline script 3 from coach-feedback.html ===== */
(function() {
(function(){
  const defaults={firstName:'Arjun',lastName:'Kumar',program:'Under 14 Development'};
  let p=defaults;
  try{p={...defaults,...JSON.parse(localStorage.getItem('eca-profile')||'{}')}}catch(e){}
  const full=(p.firstName+' '+p.lastName).trim();
  const initials=((p.firstName||'A')[0]+(p.lastName||'K')[0]).toUpperCase();
  document.querySelectorAll('.profile-mini strong').forEach(el=>el.textContent=full);
  document.querySelectorAll('.profile-mini .avatar').forEach(el=>el.textContent=initials);
  document.querySelectorAll('.profile-mini span').forEach(el=>el.textContent=(p.program||'Under 14 Development').replace(' Development','')+' · Player');
  const greeting=document.querySelector('.welcome .kicker');
  if(greeting)greeting.textContent='Good Evening, '+(p.firstName||'Arjun');
})();
})();

/* ===== Original inline script 4 from coach-feedback.html ===== */
(function() {
(function(){
  function initHelpPopup(){
    const modal=document.getElementById('helpModal');
    const button=document.getElementById('helpBtn');
    const close=document.getElementById('helpClose');
    if(!modal || !button || !close) return;

    const openHelp=(event)=>{
      if(event) event.preventDefault();
      modal.classList.add('show');
      document.body.style.overflow='hidden';
    };
    const closeHelp=()=>{
      modal.classList.remove('show');
      document.body.style.overflow='';
    };

    // Remove any previously assigned handlers on these exact elements.
    button.onclick=null;
    close.onclick=null;
    modal.onclick=null;

    button.addEventListener('click',openHelp);
    close.addEventListener('click',closeHelp);
    modal.addEventListener('click',(event)=>{
      if(event.target===modal) closeHelp();
    });
    document.addEventListener('keydown',(event)=>{
      if(event.key==='Escape' && modal.classList.contains('show')) closeHelp();
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initHelpPopup);
  }else{
    initHelpPopup();
  }
})();
})();

if (typeof rtlToggle !== 'undefined' && rtlToggle) { rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL'; }
