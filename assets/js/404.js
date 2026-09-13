/* ===== Original inline script 1 from 404.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click',()=>{const o=navLinks.style.display==='flex';navLinks.style.cssText=o?'':'display:flex;position:absolute;top:78px;left:0;right:0;flex-direction:column;align-items:stretch;padding:10px;background:var(--deep);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,.3)'});
})();

/* ===== Original inline script 2 from 404.html ===== */
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

/* ===== Original inline script 3 from 404.html ===== */
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

/* ===== Original inline script 4 from 404.html ===== */
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

if (typeof rtlToggle !== 'undefined' && rtlToggle) { rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL'; }


/* ===== Multi-Dropdown Support (Home, Dashboard) ===== */
(function initNavDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(function(drop) {
    const trigger = drop.querySelector('.nav-drop-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        // Toggle on mobile accordion
        e.preventDefault();
        e.stopPropagation();

        const isOpen = drop.classList.contains('open');

        // Close all other dropdowns
        dropdowns.forEach(function(other) {
          other.classList.remove('open');
        });

        if (!isOpen) {
          drop.classList.add('open');
        }
      }
      // On desktop: allow direct navigation when clicking trigger (e.g. Dashboard -> dashboard.html)
    });

    const menuLinks = drop.querySelectorAll('.nav-drop-menu a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        drop.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', function(e) {
    dropdowns.forEach(function(drop) {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
      }
    });
  });
})();

