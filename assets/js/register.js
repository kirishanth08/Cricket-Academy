/* ===== Original inline script 1 from register.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';

function setupToggle(btnId,inputId){document.getElementById(btnId).addEventListener('click',()=>{const input=document.getElementById(inputId),btn=document.getElementById(btnId);input.type=input.type==='password'?'text':'password';btn.innerHTML=input.type==='password'?'<i class="fa-regular fa-eye"></i>':'<i class="fa-regular fa-eye-slash"></i>'})}
setupToggle('passwordToggle','password');setupToggle('confirmToggle','confirmPassword');

document.getElementById('signupForm').addEventListener('submit',e=>{
 e.preventDefault();
 const error=document.getElementById('errorMsg'),success=document.getElementById('successMsg');
 error.classList.remove('show');success.classList.remove('show');
 const firstName=document.getElementById('firstName').value.trim(),lastName=document.getElementById('lastName').value.trim();
 const email=document.getElementById('email').value.trim().toLowerCase(),phone=document.getElementById('phone').value.trim();
 const role=document.getElementById('role').value;
 const password=document.getElementById('password').value,confirm=document.getElementById('confirmPassword').value;
 if(!firstName||!lastName||!email||!role){error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please fill in all required fields.';error.classList.add('show');return}
 if(password.length<6||password!==confirm||!document.getElementById('terms').checked){error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Check your password, confirmation, and required agreement.';error.classList.add('show');return}
 let users=[];
 try{users=JSON.parse(localStorage.getItem('eca-users')||'[]')}catch(err){}
 if(users.some(u=>u.email===email)){error.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> An account with this email already exists. Try logging in.';error.classList.add('show');return}
 users.push({firstName:firstName,lastName:lastName,email:email,phone:phone,userType:role,password:password});
 localStorage.setItem('eca-users',JSON.stringify(users));
 success.innerHTML='<i class="fa-solid fa-circle-check"></i> Account created! Redirecting to login...';
 success.classList.add('show');
 setTimeout(()=>window.location.href='login.html',1100);
});
})();

/* ===== Original inline script 2 from register.html ===== */
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
