/* ===== Original inline script 1 from admin-programs.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),sidebar=document.getElementById('sidebar'),menuBtn=document.getElementById('menuBtn'),overlay=document.getElementById('overlay');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.onclick=()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'};
rtlToggle.onclick=()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')};
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}menuBtn.onclick=()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')};overlay.onclick=closeMenu;
const settingsBtn=document.getElementById('settingsBtn'),settingsModal=document.getElementById('settingsModal'),settingsClose=document.getElementById('settingsClose');
settingsBtn.onclick=e=>{e.preventDefault();settingsModal.classList.add('show');closeMenu()};settingsClose.onclick=()=>settingsModal.classList.remove('show');settingsModal.onclick=e=>{if(e.target===settingsModal)settingsModal.classList.remove('show')};
const toast=document.getElementById('toast');function notify(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}

document.querySelectorAll('.toggle').forEach(t=>t.onclick=()=>{t.classList.toggle('on');notify(t.classList.contains('on')?'Program enabled':'Program paused')});
const programModal=document.getElementById('programModal');document.getElementById('addProgram').onclick=()=>programModal.classList.add('show');document.getElementById('programClose').onclick=()=>programModal.classList.remove('show');document.getElementById('programCancel').onclick=()=>programModal.classList.remove('show');
document.getElementById('programForm').onsubmit=e=>{e.preventDefault();const name=document.getElementById('pname').value,desc=document.getElementById('pdesc').value,card=document.createElement('article');card.className='program-card';card.innerHTML='<div class="program-icon"><i class="fa-solid fa-baseball-bat-ball"></i></div><h3>'+name+'</h3><p>'+desc+'</p><div class="program-meta"><span>0 players</span><button class="toggle on" title="Toggle availability"></button></div>';document.getElementById('programGrid').appendChild(card);card.querySelector('.toggle').onclick=()=>{card.querySelector('.toggle').classList.toggle('on');notify(card.querySelector('.toggle').classList.contains('on')?'Program enabled':'Program paused')};programModal.classList.remove('show');notify('Program created')};
})();
