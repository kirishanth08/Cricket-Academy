/* ===== Auth guard ===== */
(function(){if(!(window.ecaRequireRole&&window.ecaRequireRole('user')))return;})();

/* ===== Original inline script 1 from dashboard.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),sidebar=document.getElementById('sidebar'),menuBtn=document.getElementById('menuBtn'),overlay=document.getElementById('overlay');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click',()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')});
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}
menuBtn.addEventListener('click',()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')});overlay.addEventListener('click',closeMenu);
document.querySelectorAll('.side-nav a[href^="#"]').forEach(a=>a.addEventListener('click',()=>closeMenu()));
})();

/* ===== Original inline script 2 from dashboard.html ===== */
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

/* ===== Original inline script 3 from dashboard.html ===== */
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
