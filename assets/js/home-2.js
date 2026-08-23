/* ===== Original inline script 1 from home-2.html ===== */
(function() {
const body=document.body, navWrap=document.getElementById('navWrap');
  const themeToggle=document.getElementById('themeToggle'), rtlToggle=document.getElementById('rtlToggle');
  const menuBtn=document.getElementById('menuBtn'), navLinks=document.getElementById('navLinks');

  if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
  themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const dark=body.classList.contains('dark');localStorage.setItem('eca-theme',dark?'dark':'light');themeToggle.innerHTML=dark?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
  rtlToggle.addEventListener('click',()=>{const rtl=document.documentElement.dir==='rtl';document.documentElement.dir=rtl?'ltr':'rtl';localStorage.setItem('eca-dir',rtl?'ltr':'rtl')});
  if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';

  menuBtn.addEventListener('click',()=>{
    const open=navLinks.style.display==='flex';
    navLinks.style.cssText=open?'':'display:flex;position:absolute;top:78px;left:0;right:0;flex-direction:column;align-items:stretch;padding:10px;background:var(--white);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow);';
  });
  window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',window.scrollY>25));

  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`;observer.observe(el)});
})();

/* ===== Original inline script 2 from home-2.html ===== */
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

/* ===== Original inline script 3 from home-2.html ===== */
(function() {
(function(){
  const drop=document.querySelector('.nav-dropdown');
  const trigger=document.querySelector('.nav-drop-trigger');
  if(!drop||!trigger)return;
  trigger.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    drop.classList.toggle('open');
  });
  document.addEventListener('click',function(e){
    if(!drop.contains(e.target)) drop.classList.remove('open');
  });
  drop.querySelectorAll('.nav-drop-menu a').forEach(function(link){
    link.addEventListener('click',function(){drop.classList.remove('open');});
  });
})();
})();

/* ===== Original inline script 4 from home-2.html ===== */
(function() {
/* ===== Stable Home Dropdown Interaction ===== */
(function(){
  const dropdown = document.querySelector('.nav-dropdown');
  const trigger = document.querySelector('.nav-drop-trigger');
  const menu = document.querySelector('.nav-drop-menu');
  if(!dropdown || !trigger || !menu) return;

  trigger.addEventListener('click', function(e){
    if(window.innerWidth <= 900){
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });

  document.addEventListener('click', function(e){
    if(!dropdown.contains(e.target)){
      dropdown.classList.remove('open');
    }
  });

  // Keep the dropdown open while moving between Home and the menu.
  dropdown.addEventListener('mouseenter', function(){
    if(window.innerWidth > 900) dropdown.classList.add('open');
  });
  dropdown.addEventListener('mouseleave', function(){
    if(window.innerWidth > 900) dropdown.classList.remove('open');
  });
})();
})();

/* ===== U14 Talent Trials registration popup ===== */
(function(){
  const overlay=document.getElementById('trialModal');
  const openBtn=document.getElementById('trialRegisterOpen');
  const closeBtn=document.getElementById('trialModalClose');
  const card=overlay ? overlay.querySelector('.modal-card') : null;
  const form=document.getElementById('trialForm');
  if(!overlay || !openBtn || !card || !form) return;

  function openModal(e){
    e.preventDefault();
    card.classList.remove('done');
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeModal(){
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    setTimeout(function(){ card.classList.remove('done'); form.reset(); },300);
  }

  openBtn.addEventListener('click', openModal);
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if(e.target===overlay) closeModal(); });
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && overlay.classList.contains('show')) closeModal();
  });
  form.addEventListener('submit', function(e){
    e.preventDefault();
    card.classList.add('done');
    setTimeout(closeModal, 2200);
  });
})();
