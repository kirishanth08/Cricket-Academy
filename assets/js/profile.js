/* ===== Original inline script 1 from profile.html ===== */
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
rtlToggle.onclick=()=>{const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl');rtlToggle.textContent=document.documentElement.dir==='rtl'?'LTR':'RTL';};
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';

function closeMenu(){
  if(sidebar){sidebar.classList.remove('open');}
  if(overlay){overlay.classList.remove('show');}
}
if(menuBtn)menuBtn.onclick=()=>{
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
};
if(overlay)overlay.onclick=closeMenu;

const defaultProfile={
  firstName:'Arjun',
  lastName:'Kumar',
  dob:'2013-03-12',
  email:'arjun.kumar@example.com',
  phone:'+91 98765 43210',
  program:'Under 14 Development',
  guardianName:'Raj Kumar',
  guardianRelation:'Father',
  guardianEmail:'parent@example.com',
  guardianPhone:'+91 98765 40000'
};

function getProfile(){
  try{
    return {...defaultProfile,...JSON.parse(localStorage.getItem('eca-profile')||'{}')};
  }catch(e){return {...defaultProfile};}
}
function saveProfile(data){
  localStorage.setItem('eca-profile',JSON.stringify(data));
}
function initials(first,last){
  return ((first||'A').charAt(0)+(last||'K').charAt(0)).toUpperCase();
}
function loadProfile(){
  const p=getProfile();
  document.getElementById('firstName').value=p.firstName;
  document.getElementById('lastName').value=p.lastName;
  document.getElementById('dob').value=p.dob;
  document.getElementById('email').value=p.email;
  document.getElementById('phone').value=p.phone;
  document.getElementById('program').value=p.program;
  document.getElementById('guardianName').value=p.guardianName;
  document.getElementById('guardianRelation').value=p.guardianRelation;
  document.getElementById('guardianEmail').value=p.guardianEmail;
  document.getElementById('guardianPhone').value=p.guardianPhone;
  renderProfile(p);
}
function renderProfile(p){
  const full=(p.firstName+' '+p.lastName).trim();
  const avatar=initials(p.firstName,p.lastName);
  document.getElementById('profileName').textContent=full;
  document.getElementById('profileAvatar').textContent=avatar;
  document.getElementById('profileProgram').textContent=p.program.replace(' Development','')+' · Player';
  document.getElementById('profileStatus').textContent='Saved just now';
}
function showSaved(message){
  const box=document.getElementById('saveMessage');
  box.textContent=message;
  box.classList.add('show');
  setTimeout(()=>box.classList.remove('show'),3000);
}

loadProfile();

document.getElementById('editBtn').onclick=()=>{
  document.getElementById('firstName').focus();
  document.getElementById('profileForm').scrollIntoView({behavior:'smooth',block:'center'});
};

document.getElementById('cancelBtn').onclick=()=>{
  loadProfile();
  showSaved('Unsaved changes were discarded.');
};

document.getElementById('profileForm').onsubmit=e=>{
  e.preventDefault();
  const p=getProfile();
  p.firstName=document.getElementById('firstName').value.trim();
  p.lastName=document.getElementById('lastName').value.trim();
  p.dob=document.getElementById('dob').value;
  p.email=document.getElementById('email').value.trim();
  p.phone=document.getElementById('phone').value.trim();
  p.program=document.getElementById('program').value;
  saveProfile(p);
  renderProfile(p);
  showSaved('Profile changes saved successfully.');
};

document.getElementById('guardianForm').onsubmit=e=>{
  e.preventDefault();
  const p=getProfile();
  p.guardianName=document.getElementById('guardianName').value.trim();
  p.guardianRelation=document.getElementById('guardianRelation').value.trim();
  p.guardianEmail=document.getElementById('guardianEmail').value.trim();
  p.guardianPhone=document.getElementById('guardianPhone').value.trim();
  saveProfile(p);
  showSaved('Guardian details saved successfully.');
};
})();

/* ===== Original inline script 2 from profile.html ===== */
(function() {
(function(){
  function initHelpPopup(){
    const modal=document.getElementById('helpModal');
    const button=document.getElementById('helpBtn');
    const close=document.getElementById('helpClose');
    if(!modal || !button || !close) return;

    const openHelp=(event)=>{
      if(event) event.preventDefault();
      modal.classList.add('show');
      document.body.style.overflow='hidden';
    };
    const closeHelp=()=>{
      modal.classList.remove('show');
      document.body.style.overflow='';
    };

    // Remove any previously assigned handlers on these exact elements.
    button.onclick=null;
    close.onclick=null;
    modal.onclick=null;

    button.addEventListener('click',openHelp);
    close.addEventListener('click',closeHelp);
    modal.addEventListener('click',(event)=>{
      if(event.target===modal) closeHelp();
    });
    document.addEventListener('keydown',(event)=>{
      if(event.key==='Escape' && modal.classList.contains('show')) closeHelp();
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initHelpPopup);
  }else{
    initHelpPopup();
  }
})();
})();

if (typeof rtlToggle !== 'undefined' && rtlToggle) { rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL'; }
