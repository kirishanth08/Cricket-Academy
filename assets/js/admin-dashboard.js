/* ===== Auth guard ===== */
(function(){if(!(window.ecaRequireRole&&window.ecaRequireRole('admin')))return;})();

/* ===== Original inline script 1 from admin-dashboard.html ===== */
(function() {
const body=document.body;
const themeToggle=document.getElementById('themeToggle');
const rtlToggle=document.getElementById('rtlToggle');
const sidebar=document.getElementById('sidebar');
const menuBtn=document.getElementById('menuBtn');
const overlay=document.getElementById('overlay');

if(localStorage.getItem('eca-theme')==='dark'){
body.classList.add('dark');
themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';
}
themeToggle.onclick=()=>{
body.classList.toggle('dark');
const dark=body.classList.contains('dark');
localStorage.setItem('eca-theme',dark?'dark':'light');
themeToggle.innerHTML=dark?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
};
rtlToggle.onclick=()=>{
const rtl=document.documentElement.dir==='rtl';
document.documentElement.dir=rtl?'ltr':'rtl';
localStorage.setItem('eca-dir',rtl?'ltr':'rtl');
};
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';

function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}
menuBtn.onclick=()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')};
overlay.onclick=closeMenu;

const settingsBtn=document.getElementById('settingsBtn');
const settingsModal=document.getElementById('settingsModal');
const settingsClose=document.getElementById('settingsClose');
settingsBtn.onclick=e=>{e.preventDefault();settingsModal.style.display='flex';closeMenu()};
settingsClose.onclick=()=>settingsModal.style.display='none';
settingsModal.onclick=e=>{if(e.target===settingsModal)settingsModal.style.display='none'};
document.addEventListener('keydown',e=>{if(e.key==='Escape')settingsModal.style.display='none'});

const date=new Date();
document.getElementById('todayDate').textContent=date.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
})();
