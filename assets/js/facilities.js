/* ===== Original inline script 1 from facilities.html ===== */
(function() {
const body=document.body,navWrap=document.getElementById('navWrap'),themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinks.classList.toggle('open');
  navLinks.style.display = isOpen ? 'flex' : '';
});
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove('open');
    navLinks.style.display = '';
  }
});
navLinks.querySelectorAll('a:not(.nav-drop-trigger)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navLinks.style.display = '';
  });
});
if (navLinks && !navLinks.querySelector('.mobile-drawer-actions')) {
  const oldLogin = navLinks.querySelector('.mobile-login-link');
  if (oldLogin) oldLogin.remove();
  const mActions = document.createElement('div');
  mActions.className = 'mobile-drawer-actions';
  mActions.innerHTML = '<a href="login.html" class="mobile-drawer-btn mobile-drawer-login"><i class="fa-solid fa-right-to-bracket"></i> Login</a><a href="register.html" class="mobile-drawer-btn mobile-drawer-signup"><i class="fa-solid fa-user-plus"></i> Sign Up</a>';
  navLinks.appendChild(mActions);
}
window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',scrollY>25));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;observer.observe(el)});

document.querySelector('.nav-drop-trigger')?.addEventListener('click',e=>{
 if(window.innerWidth<=850){e.preventDefault();e.currentTarget.parentElement.classList.toggle('open')}
});
})();

/* ===== Original inline script 2 from facilities.html ===== */
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

/* ===== Original inline script 3 from facilities.html ===== */
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

/* ===== Original inline script 4 from facilities.html ===== */
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

