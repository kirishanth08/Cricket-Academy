/* ===== Original inline script 1 from login.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click',()=>{const o=navLinks.style.display==='flex';navLinks.style.cssText=o?'':'display:flex;position:absolute;top:78px;left:0;right:0;flex-direction:column;align-items:stretch;padding:10px;background:var(--deep);border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,.3)'});
document.getElementById('passwordToggle').addEventListener('click',()=>{const input=document.getElementById('password'),btn=document.getElementById('passwordToggle');input.type=input.type==='password'?'text':'password';btn.innerHTML=input.type==='password'?'<i class="fa-regular fa-eye"></i>':'<i class="fa-regular fa-eye-slash"></i>'});
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('email').value.trim().toLowerCase(),password=document.getElementById('password').value,error=document.getElementById('errorMsg'),success=document.getElementById('successMsg');error.classList.remove('show');error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Invalid email or password.';success.classList.remove('show');if(!email||password.length<6){error.classList.add('show');return}let users=[];try{users=JSON.parse(localStorage.getItem('eca-users')||'[]')}catch(err){}const user=users.find(u=>u.email===email&&(u.password===password||u.password.toLowerCase()===password.trim()));if(!user){error.classList.add('show');return}window.ecaSetSession({firstName:user.firstName,lastName:user.lastName,email:user.email,role:'user'});success.classList.add('show');setTimeout(()=>{window.location.href='dashboard.html'},900)});
})();

/* ===== Original inline script 2 from login.html ===== */
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

if (typeof rtlToggle !== 'undefined' && rtlToggle) { rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL'; }
