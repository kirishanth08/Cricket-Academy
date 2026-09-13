/* ===== Original inline script 1 from admin-messages.html ===== */
(function() {
const body=document.body,themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),sidebar=document.getElementById('sidebar'),menuBtn=document.getElementById('menuBtn'),overlay=document.getElementById('overlay');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.onclick=()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'};
rtlToggle.onclick=()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl');rtlToggle.textContent=document.documentElement.dir==='rtl'?'LTR':'RTL';};
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}menuBtn.onclick=()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')};overlay.onclick=closeMenu;
const settingsBtn=document.getElementById('settingsBtn'),settingsModal=document.getElementById('settingsModal'),settingsClose=document.getElementById('settingsClose');
settingsBtn.onclick=e=>{e.preventDefault();settingsModal.classList.add('show');closeMenu()};settingsClose.onclick=()=>settingsModal.classList.remove('show');settingsModal.onclick=e=>{if(e.target===settingsModal)settingsModal.classList.remove('show')};
const toast=document.getElementById('toast');function notify(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}

const rows=[...document.querySelectorAll('.message-row')];rows.forEach(r=>r.onclick=()=>{rows.forEach(x=>x.classList.remove('selected'));r.classList.add('selected');r.dataset.unread='false';document.getElementById('messageView').querySelector('h3').textContent=r.dataset.subject;document.getElementById('messageView').querySelector('.message-body').textContent='Hello Academy, I wanted to follow up regarding '+r.dataset.subject.toLowerCase()+'. Please let me know the latest update. Thank you.'});
function filterMessages(){const q=document.getElementById('messageSearch').value.toLowerCase(),f=document.getElementById('messageFilter').value;rows.forEach(r=>{const okq=r.textContent.toLowerCase().includes(q),okf=f==='all'||(f==='unread'&&r.dataset.unread==='true')||f===r.dataset.type;r.style.display=okq&&okf?'':'none'})}document.getElementById('messageSearch').oninput=filterMessages;document.getElementById('messageFilter').onchange=filterMessages;
document.getElementById('sendReply').onclick=()=>{const t=document.getElementById('replyText');if(!t.value.trim())return notify('Write a reply first');t.value='';notify('Reply sent successfully')};
const cm=document.getElementById('composeModal');document.getElementById('compose').onclick=()=>cm.classList.add('show');document.getElementById('composeClose').onclick=()=>cm.classList.remove('show');document.getElementById('composeCancel').onclick=()=>cm.classList.remove('show');document.getElementById('composeForm').onsubmit=e=>{e.preventDefault();cm.classList.remove('show');notify('Message sent successfully')};
})();

if (typeof rtlToggle !== 'undefined' && rtlToggle) { rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL'; }
