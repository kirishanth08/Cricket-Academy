/* ===== Original inline script 1 from admin-login.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click',()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')});
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';

document.getElementById('passwordToggle').addEventListener('click',()=>{
const input=document.getElementById('password'),btn=document.getElementById('passwordToggle');
input.type=input.type==='password'?'text':'password';
btn.innerHTML=input.type==='password'?'<i class="fa-regular fa-eye"></i>':'<i class="fa-regular fa-eye-slash"></i>';
});

document.getElementById('adminLoginForm').addEventListener('submit',e=>{
e.preventDefault();
const email=document.getElementById('email').value.trim().toLowerCase(),password=document.getElementById('password').value.trim().toLowerCase();
const error=document.getElementById('errorMsg'),success=document.getElementById('successMsg');
error.classList.remove('show');success.classList.remove('show');
if(email===''||password===''){error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please enter your admin email and password.';error.classList.add('show');return}
let admins=[];
try{admins=JSON.parse(localStorage.getItem('eca-users')||'[]').filter(u=>u.role==='admin')}catch(err){}
const admin=admins.find(a=>a.email===email&&(a.password===password||a.password.toLowerCase()===password));
if(!admin){error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Invalid administrator email or password. Create an admin account first.';error.classList.add('show');return}
success.classList.add('show');window.ecaSetSession({firstName:admin.firstName,lastName:admin.lastName,email:admin.email,role:'admin'});setTimeout(()=>window.location.href='admin-dashboard.html',900);

});
})();

/* ===== Original inline script 2 from admin-login.html ===== */
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
