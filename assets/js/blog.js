/* ===== Original inline script 1 from blog.html ===== */
(function() {
const body=document.body,navWrap=document.getElementById('navWrap'),themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click',()=>{const o=navLinks.style.display==='flex';navLinks.style.cssText=o?'':'display:flex;position:absolute;top:78px;left:0;right:0;flex-direction:column;align-items:stretch;padding:10px;background:var(--white);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow)'});
window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',scrollY>25));

const filterButtons=document.querySelectorAll('.filter-btn');
const sideButtons=document.querySelectorAll('[data-filter-side]');
const posts=[...document.querySelectorAll('.post-card')];
const searchInput=document.getElementById('searchInput');
const noResults=document.getElementById('noResults');

function filterPosts(category='all',query=''){
  let visible=0;
  posts.forEach(post=>{
    const matchCategory=category==='all'||post.dataset.category===category;
    const text=post.textContent.toLowerCase();
    const matchSearch=!query||text.includes(query.toLowerCase());
    const show=matchCategory&&matchSearch;
    post.classList.toggle('hidden',!show);
    if(show)visible++;
  });
  noResults.style.display=visible?'none':'block';
}
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  filterPosts(btn.dataset.filter,searchInput.value);
}));
sideButtons.forEach(btn=>btn.addEventListener('click',()=>{
  const category=btn.dataset.filterSide;
  filterButtons.forEach(b=>b.classList.toggle('active',b.dataset.filter===category));
  filterPosts(category,searchInput.value);
  document.getElementById('articles').scrollIntoView({behavior:'smooth'});
}));
searchInput.addEventListener('input',()=>filterPosts(document.querySelector('.filter-btn.active').dataset.filter,searchInput.value));
document.getElementById('searchBtn').addEventListener('click',()=>filterPosts(document.querySelector('.filter-btn.active').dataset.filter,searchInput.value));

function subscribe(inputId){
  const input=document.getElementById(inputId);
  if(input&&input.value.trim()&&input.checkValidity()){document.getElementById('toast').classList.add('show');input.value='';setTimeout(()=>document.getElementById('toast').classList.remove('show'),3500)}
  else if(input){input.focus()}
}
document.getElementById('sideSubscribe').addEventListener('click',()=>subscribe('sideEmail'));
document.getElementById('wideSubscribe').addEventListener('click',()=>subscribe('wideEmail'));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`;observer.observe(el)});
})();

/* ===== Original inline script 2 from blog.html ===== */
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

/* ===== Original inline script 3 from blog.html ===== */
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

/* ===== Original inline script 4 from blog.html ===== */
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
