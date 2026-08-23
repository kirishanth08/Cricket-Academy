/* ===== Shared auth: session, navbar profile chip, logout ===== */
(function(){
  window.ecaGetSession=function(){try{return JSON.parse(localStorage.getItem('eca-session')||'null')}catch(e){return null}};
  window.ecaSetSession=function(s){localStorage.setItem('eca-session',JSON.stringify(s))};
  window.ecaLogout=function(){localStorage.removeItem('eca-session')};

  var CSS=".nav-user{position:relative;display:inline-block}.user-btn{display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.08);color:#fff;padding:7px 13px 7px 8px;border-radius:12px;cursor:pointer;font-family:Inter,sans-serif;font-weight:700;font-size:12px;transition:.2s}.user-btn:hover{background:rgba(255,255,255,.16)}.u-avatar{width:27px;height:27px;border-radius:9px;background:#c8ef45;color:#101a3a;display:grid;place-items:center;font-size:11px;font-weight:900}.user-menu{display:none;position:absolute;right:0;top:calc(100% + 10px);background:#fff;color:#10201a;border-radius:14px;box-shadow:0 22px 55px rgba(0,0,0,.2);min-width:185px;padding:8px;z-index:80;text-align:left;border:1px solid rgba(0,0,0,.06)}.user-menu.open{display:block}.user-menu a,.user-menu button{display:block;width:100%;text-align:left;background:none;border:0;padding:10px 12px;border-radius:9px;font-size:12px;font-weight:700;color:#10201a;cursor:pointer;text-decoration:none;font-family:Inter,sans-serif}.user-menu a:hover,.user-menu button:hover{background:rgba(11,122,83,.1);color:#0b7a53}.user-menu .u-logout{border-top:1px solid #eee;margin-top:5px;padding-top:12px;color:#b3261e!important}.user-menu .u-logout:hover{background:rgba(179,38,30,.08)!important;color:#b3261e!important}";
  try{var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st)}catch(e){}

  function buildChip(bar){
    var s=window.ecaGetSession();
    var login=bar.querySelector('.login-btn'),signup=bar.querySelector('.signup-btn');
    if(!s){return}
    if(!login&&!signup&&bar.querySelector('.nav-user')){return}
    if(login)login.remove();
    if(signup)signup.remove();
    if(bar.querySelector('.nav-user'))bar.querySelector('.nav-user').remove();
    var isAdmin=s.role==='admin';
    var full=(s.firstName||'')+' '+(s.lastName||'');
    var initials=((s.firstName||'U')[0]+((s.lastName||'')[0]||'')).toUpperCase();
    var label=isAdmin?'Admin':(s.firstName||'User');
    var wrap=document.createElement('div');
    wrap.className='nav-user';
    wrap.innerHTML="<button class='user-btn' type='button'><span class='u-avatar'>"+initials+"</span><span class='u-name'>"+label+"</span><i class='fa-solid fa-chevron-down' style='font-size:9px'></i></button>"
      +"<div class='user-menu'>"
      +(isAdmin?"<a href='admin-dashboard.html'>Admin Dashboard</a>":"<a href='dashboard.html'>My Dashboard</a><a href='profile.html'>My Profile</a>")
      +"<button type='button' class='u-logout'>Log Out</button></div>";
    var menuBtn=bar.querySelector('.menu-btn');
    if(menuBtn)bar.insertBefore(wrap,menuBtn);else bar.appendChild(wrap);
    wrap.querySelector('.user-btn').addEventListener('click',function(e){
      e.stopPropagation();
      wrap.querySelector('.user-menu').classList.toggle('open');
    });
    wrap.querySelector('.u-logout').addEventListener('click',function(){
      window.ecaLogout();
      window.location.href='index.html';
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.nav-actions').forEach(buildChip);
    document.addEventListener('click',function(e){
      document.querySelectorAll('.nav-user').forEach(function(w){
        if(!w.contains(e.target))w.querySelector('.user-menu').classList.remove('open');
      });
    });
  });

  /* Guard helper for dashboards */
  window.ecaRequireRole=function(role){
    var s=window.ecaGetSession();
    if(!s||s.role!==role){
      window.location.replace(role==='admin'?'admin-login.html':'login.html');
      return false;
    }
    return true;
  };

  /* Any .logout link clears the session first */
  document.addEventListener('click',function(e){
    var l=e.target.closest?e.target.closest('.logout'):null;
    if(l)window.ecaLogout();
  },true);
})();
