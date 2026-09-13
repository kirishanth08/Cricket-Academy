/* ===== Original inline script 1 from program-details.html ===== */
(function() {
const body=document.body,navWrap=document.getElementById('navWrap'),themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click',()=>{const o=navLinks.style.display==='flex';navLinks.style.cssText=o?'':'display:flex;position:absolute;top:78px;left:0;right:0;flex-direction:column;align-items:stretch;padding:10px;background:var(--white);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow)'});
window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',scrollY>25));
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const bookingForm=document.getElementById('bookingForm');
if(bookingForm){bookingForm.addEventListener('submit',e=>{e.preventDefault();document.getElementById('successMessage').classList.add('show');bookingForm.reset();});}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`;observer.observe(el)});
})();

/* ===== Original inline script 2 from program-details.html ===== */
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

/* ===== Original inline script 3 from program-details.html ===== */
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

/* ===== Original inline script 4 from program-details.html ===== */
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

/* ===== Dynamic Program Details (reads ?program= from the URL) ===== */
(function(){
  const ICONS={bat:'fa-baseball-bat-ball',bowl:'fa-bolt',field:'fa-hand',fit:'fa-dumbbell'};
  const DATA={
    'under-10':{
      title:'Under 10 Cricket Program | Elite Cricket Academy',
      heroKicker:'Under 10 · Program Details',
      heroTitle:'Under 10.<br>A <span>Strong</span><br>Start To<br>Cricket.',
      heroDesc:'A complete introduction to our Under 10 cricket program for children aged 6–10, covering technique, movement, teamwork, confidence and the joy of playing the game.',
      ovKicker:'01 / Under 10 Program',
      ovH2:'Build The<br>Right Foundation.',
      ovP1:'The Under 10 program is designed for children aged 6–10 who are beginning their cricket journey or developing their first structured set of cricket skills.',
      ovP2:'At this stage, the priority is not advanced performance. It is creating good movement patterns, basic technique, confidence, coordination and a genuine enjoyment of the game.',
      ovP3:'Sessions combine coaching, games and simple match situations so young players learn cricket naturally while gradually developing disciplined habits.',
      stats:[['6–10','Recommended Age'],['4','Core Skill Areas'],['360°','Player Development'],['FUN','Learning Environment']],
      skillsDesc:'Every Under 10 session introduces cricket skills progressively, using age-appropriate coaching and plenty of practical repetition.',
      feat:{span:'UNDER 10 TRAINING',strong:'Learn The Basics.<br>Love The Game.',p:'Practical coaching built around movement, repetition and confidence.'},
      trainCards:[
        {h3:'Batting',p:'Build confidence at the crease through simple, repeatable techniques.',points:['Grip and stance','Bat swing','Balance and footwork','Basic shot selection','Throw-down practice']},
        {h3:'Bowling',p:'Introduce a safe and repeatable bowling action while developing accuracy.',points:['Basic bowling action','Run-up and rhythm','Target bowling','Accuracy games','Safe mechanics']},
        {h3:'Fielding',p:'Develop reliable catching, throwing and movement through fun reaction drills.',points:['Catching basics','Ground fielding','Throwing technique','Reaction drills','Field positioning']},
        {h3:'Fitness',p:'Use age-appropriate movement activities to develop athletic foundations.',points:['Coordination','Agility','Speed','Balance','Mobility']}
      ],
      schedH2:'A Week Built<br>For Young Players.',
      rows:[
        ['Monday','fa-baseball-bat-ball','Batting Basics','5:30 PM','Technique'],
        ['Wednesday','fa-bolt','Bowling & Fielding','5:30 PM','Skills'],
        ['Friday','fa-person-running','Movement & Fitness','5:30 PM','Athleticism'],
        ['Saturday','fa-trophy','Games & Match Play','6:00 PM','Application']
      ],
      faqKicker:'07 / Under 10 FAQs',
      faqs:[
        ['Does my child need previous cricket experience?','No. The Under 10 program is suitable for beginners as well as children who already have some basic cricket experience.'],
        ['What equipment should my child bring?','Comfortable sportswear, suitable sports shoes and any personal cricket protection your child already uses are recommended. The academy provides selected training equipment.'],
        ['Is fitness training safe for young children?','The program uses age-appropriate movement, agility, coordination and mobility activities rather than adult-style strength conditioning.'],
        ['Will my child play matches?','The program introduces children to simple game situations and match-style activities so they can gradually understand how cricket is played.'],
        ['Can parents receive feedback about progress?','Yes. Coaches can provide observations and recommendations around technique, participation, confidence and areas for continued practice.']
      ],
      bookKicker:'08 / Book The Under 10 Program',
      bookP:'Give your child a positive start in cricket with structured coaching, age-appropriate activities and a supportive training environment.',
      formSpan:'UNDER 10 PROGRAM',
      ages:['6 years','7 years','8 years','9 years','10 years'],
      ctaLine:'Give Your Child A Strong Start In Cricket.'
    },
    'under-14':{
      title:'Under 14 Cricket Program | Elite Cricket Academy',
      heroKicker:'Under 14 · Program Details',
      heroTitle:'Under 14.<br>Build <span>Skill.</span><br>Play With<br>Awareness.',
      heroDesc:'A structured development program for players aged 11–14, strengthening technique, game awareness and physical skills through regular coaching and match practice.',
      ovKicker:'01 / Under 14 Program',
      ovH2:'Grow The<br>Game Intelligence.',
      ovP1:'The Under 14 program bridges foundation skills and competitive cricket for players aged 11–14 who are ready to train with more structure and intent.',
      ovP2:'Coaching focuses on reliable technique across all three disciplines, smarter decision-making and building the fitness needed for longer games and tournaments.',
      ovP3:'Players take part in regular match scenarios and inter-batch games so skills are tested and refined under realistic conditions.',
      stats:[['11–14','Recommended Age'],['4','Core Skill Areas'],['Weekly','Match Practice'],['TEAM','Training Environment']],
      skillsDesc:'Each week combines technical sessions with match-based learning so improvement shows where it matters most — in real games.',
      feat:{span:'UNDER 14 TRAINING',strong:'Sharper Skills.<br>Smarter Decisions.',p:'Structured coaching that connects practice drills to match situations.'},
      trainCards:[
        {h3:'Batting',p:'Develop dependable technique and the ability to build an innings.',points:['Front-foot defence','Shot selection','Running between wickets','Spin & pace play','Net match scenarios']},
        {h3:'Bowling',p:'Strengthen control, rhythm and early variations with safe workload management.',points:['Action consistency','Line & length control','Swing basics','Slower balls & spin','Bowling plans']},
        {h3:'Fielding',p:'Raise standards in catching, ground fielding and quick releases under pressure.',points:['High catching','Attack & defend fielding','Direct hits','Relay throws','Match drills']},
        {h3:'Fitness',p:'Build age-appropriate strength, speed and endurance foundations for competitive play.',points:['Speed & agility','Core strength','Endurance bases','Warm-up routines','Recovery habits']}
      ],
      schedH2:'A Week Built<br>For Developing Players.',
      rows:[
        ['Monday','fa-baseball-bat-ball','Batting Technique','5:30 PM','Technique'],
        ['Tuesday','fa-hand','Fielding Standards','5:30 PM','Skills'],
        ['Thursday','fa-bolt','Bowling Plans','5:30 PM','Control'],
        ['Saturday','fa-trophy','Match Practice','9:00 AM','Application']
      ],
      faqKicker:'07 / Under 14 FAQs',
      faqs:[
        ['Is this program right for a player new to cricket?','Players with basic experience get the most from this batch. Complete beginners are usually guided into foundation coaching first, then moved up after an assessment.'],
        ['How much match play is included?','Match scenarios are part of weekly training, with longer inter-batch and inter-academy fixtures scheduled through the season.'],
        ['What fitness work do players do?','Age-appropriate speed, agility, core and endurance work — no adult-style heavy conditioning. Loads are managed carefully by the coaching team.'],
        ['Are selection trials supported?','Yes. The program explicitly prepares players for school, club and district trial opportunities with targeted preparation sessions.'],
        ['How is progress shared with parents?','Coaches provide regular feedback on technique, effort and match performances, plus clear next-step recommendations each term.']
      ],
      bookKicker:'08 / Book The Under 14 Program',
      bookP:'Help your player turn solid fundamentals into genuine match intelligence with structured, competitive coaching.',
      formSpan:'UNDER 14 PROGRAM',
      ages:['11 years','12 years','13 years','14 years'],
      ctaLine:'Take The Next Step In Your Game.'
    },
    'under-17':{
      title:'Under 17 Cricket Program | Elite Cricket Academy',
      heroKicker:'Under 17 · Program Details',
      heroTitle:'Under 17.<br>Train To <span>Compete.</span><br>Perform Under<br>Pressure.',
      heroDesc:'Advanced coaching for ambitious players aged 15–17 preparing for competitive cricket, selection trials and higher-level performance.',
      ovKicker:'01 / Under 17 Program',
      ovH2:'Prepare For<br>Higher Levels.',
      ovP1:'The Under 17 program is built for committed players aged 15–17 who want to compete seriously at school, club or district level.',
      ovP2:'Training raises technical standards, deepens tactical understanding and develops the physical capacity required for full-length cricket.',
      ovP3:'Video feedback, scenario-based nets and competitive fixtures push players to transfer practice into consistent match performance.',
      stats:[['15–17','Recommended Age'],['Advanced','Technical Standard'],['Competitive','Match Calendar'],['DATA','Performance Tracking']],
      skillsDesc:'Sessions are intense, specific and measurable — every block targets clear performance outcomes.',
      feat:{span:'UNDER 17 TRAINING',strong:'Elite Habits.<br>Competitive Edge.',p:'High-intensity coaching that prepares players for selection and competition.'},
      trainCards:[
        {h3:'Batting',p:'Refine scoring options, tempo control and batting under pressure situations.',points:['Power hitting','Strike rotation','Playing spin','Situational nets','Video analysis']},
        {h3:'Bowling',p:'Develop genuine wicket-taking weapons with tactical awareness and control.',points:['Variation packages','Death & powerplay plans','Spell building','Match-up tactics','Workload monitoring']},
        {h3:'Fielding',p:'Train elite fielding standards — athletic catches, quick hands and smart positioning.',points:['Boundary riding','Slip cordon work','Run-out execution','Anticipation drills','Fitness for fielding']},
        {h3:'Fitness',p:'Cricket-specific strength and conditioning that supports performance and prevents injury.',points:['Strength blocks','Speed & sprint work','Energy system training','Mobility & prehab','Testing benchmarks']}
      ],
      schedH2:'A Week Built<br>For Performance.',
      rows:[
        ['Monday','fa-baseball-bat-ball','Scenario Nets','6:00 PM','Execution'],
        ['Wednesday','fa-bolt','Bowling Tactics','6:00 PM','Wickets'],
        ['Friday','fa-dumbbell','Strength & Conditioning','6:00 PM','Physicality'],
        ['Sunday','fa-trophy','Competitive Fixtures','9:00 AM','Performance']
      ],
      faqKicker:'07 / Under 17 FAQs',
      faqs:[
        ['What standard does my player need?','Players should already play regular competitive cricket. An assessment session confirms the batch is the right performance environment.'],
        ['Is video analysis really used?','Yes. Batting and bowling sessions are regularly filmed, reviewed and compared against clear technical and tactical benchmarks.'],
        ['How are workloads managed?','Bowling loads, strength volumes and match minutes are tracked to keep development sustainable during peak season.'],
        ['Does the program include trials preparation?','Selection readiness is central — dedicated trial simulations, fitness benchmarking and individual development plans are provided.'],
        ['What happens after Under 17?','Graduating players are guided toward senior club cricket, academy pathways and higher representative opportunities.']
      ],
      bookKicker:'08 / Book The Under 17 Program',
      bookP:'Commit to serious training with coaching that prepares you for selection, competition and the next level of cricket.',
      formSpan:'UNDER 17 PROGRAM',
      ages:['15 years','16 years','17 years'],
      ctaLine:'Ready To Compete At A Higher Level?'
    },
    'adults':{
      title:'Adults Cricket Program | Elite Cricket Academy',
      heroKicker:'Adults · Program Details',
      heroTitle:'Adults.<br>Stay <span>Sharp.</span><br>Keep Improving<br>Your Game.',
      heroDesc:'Focused coaching for adults aged 18+ who want to improve their cricket while staying fit, competitive and connected to the game.',
      ovKicker:'01 / Adults Program',
      ovH2:'Improve On<br>Your Schedule.',
      ovP1:'The Adults program serves players aged 18 and over — from returning cricketers to regular club players who want expert eyes on their game.',
      ovP2:'Sessions respect busy schedules with flexible morning and evening batches, focused skill blocks and honest, practical feedback.',
      ovP3:'Whether the goal is league performance or simply playing better weekend cricket, coaching is tailored to how you actually play.',
      stats:[['18+','Years'],['Flexible','Batch Timings'],['Small','Group Sizes'],['FITNESS +','Skill Focus']],
      skillsDesc:'Practical, adult-focused sessions built around your goals, availability and current standard.',
      feat:{span:'ADULTS TRAINING',strong:'Real Coaching.<br>Flexible Timing.',p:'Focused sessions that fit around work and still move your game forward.'},
      trainCards:[
        {h3:'Batting',p:'Tighten technique and rebuild confidence against pace and spin.',points:['Defensive solidity','Scoring options','Facing quicker bowling','Spin management','Targeted net plans']},
        {h3:'Bowling',p:'Sharpen control and add dependable variations without risking injury.',points:['Action review','Economy skills','Variation tuning','Return-to-play plans','Match spells']},
        {h3:'Fielding',p:'Keep reaction speed, throwing accuracy and catching reliability high.',points:['Catch technique','Ground fielding','Throwing mechanics','Positional play','Reaction sessions']},
        {h3:'Fitness',p:'Sustainable conditioning that supports performance, health and long-term playing.',points:['Strength maintenance','Mobility work','Conditioning circuits','Injury prevention','Lifestyle guidance']}
      ],
      schedH2:'A Week That Fits<br>Around Your Life.',
      rows:[
        ['Tuesday','fa-baseball-bat-ball','Skills Session','6:30 AM','Technique'],
        ['Wednesday','fa-dumbbell','Cricket Conditioning','7:00 PM','Fitness'],
        ['Friday','fa-bolt','Bowling & Fielding','7:00 PM','Skills'],
        ['Sunday','fa-trophy','Practice Matches','8:00 AM','Application']
      ],
      faqKicker:'07 / Adult Program FAQs',
      faqs:[
        ['I have not played in years — is this suitable?','Absolutely. Many members are returning players. Sessions start from your current level and rebuild timing, touch and confidence progressively.'],
        ['What are the batch timings?','Morning batches run before work hours and evening batches after — see the sample schedule above. Final timings are confirmed on enrollment.'],
        ['Will I be grouped with much better players?','Groups are organised by standard and goal, so sessions stay relevant and appropriately competitive.'],
        ['Is fitness training included?','Yes. Cricket-specific conditioning is built into the weekly plan, with options scaled to your fitness base.'],
        ['Can I try a session before enrolling?','Yes. Trial sessions can be arranged through the Contact Us page so you can experience the coaching first.']
      ],
      bookKicker:'08 / Book The Adults Program',
      bookP:'Keep improving with flexible, expert coaching designed for adults who love the game and want to play it well.',
      formSpan:'ADULTS PROGRAM',
      ages:['18–25 years','26–35 years','36+ years'],
      ctaLine:'Your Best Cricket Can Still Be Ahead Of You.'
    },
    'elite-skills-camp':{
      title:'Elite Skills Camp | Elite Cricket Academy',
      heroKicker:'Elite Skills Camp · Program Details',
      heroTitle:'Elite Skills<br><span>Camp.</span><br>Train Hard.<br>Improve Fast.',
      heroDesc:'A focused holiday camp covering batting, bowling, fielding, fitness and match strategy through progressive drills, small-sided games and daily match scenarios.',
      ovKicker:'01 / About The Camp',
      ovH2:'One Camp.<br>Every Skill.',
      ovP1:'The Elite Skills Camp is an intensive multi-day program open to players across age groups, from Under 10 to Adults.',
      ovP2:'Each day blends technical blocks, fitness work and competitive game scenarios so players return to their regular batches measurably sharper.',
      ovP3:'Camps are coached by the full academy staff, with groups organised by age and standard so every player is stretched appropriately.',
      stats:[['05 OCT','Camp Start'],['5','Days Of Training'],['4','Skill Areas'],['DAILY','Match Scenarios']],
      skillsDesc:'Camp days rotate through all four disciplines with high repetition, expert feedback and fun competitive formats.',
      feat:{span:'CAMP TRAINING',strong:'Intense Days.<br>Rapid Improvement.',p:'A focused environment where players live and breathe cricket for a week.'},
      trainCards:[
        {h3:'Batting',p:'High-repetition batting blocks with targeted throw-downs and scenario nets.',points:['Technique refinement','Shot selection games','Scenario chases','Video feedback','Power hitting']},
        {h3:'Bowling',p:'Build control and variations through structured bowling missions.',points:['Action consistency','Target bowling','Variation development','Spell simulation','Match tactics']},
        {h3:'Fielding',p:'Daily fielding intensity covering catching, ground work and run-outs.',points:['Catching circuits','Ground fielding','Run-out drills','Positional play','Reaction work']},
        {h3:'Fitness',p:'Cricket-specific conditioning scaled to each age group.',points:['Speed & agility','Core strength','Endurance games','Mobility routines','Recovery basics']}
      ],
      schedH2:'A Typical<br>Camp Day.',
      rows:[
        ['Session 1','fa-person-running','Warm-Up & Agility','9:00 AM','Readiness'],
        ['Session 2','fa-baseball-bat-ball','Skill Block I','10:00 AM','Technique'],
        ['Session 3','fa-hand','Skill Block II','1:00 PM','Application'],
        ['Session 4','fa-trophy','Match Scenarios','3:30 PM','Competition']
      ],
      faqKicker:'07 / Camp FAQs',
      faqs:[
        ['Who can join the Elite Skills Camp?','The camp is open to players of all academy age groups, from Under 10 to Adults. Groups are organised by age and standard.'],
        ['Do I need to be an academy member?','No. The camp is open to everyone, though places are limited and confirmed on a first-come basis after registration.'],
        ['What should players bring each day?','Full cricket kit, water bottle, packed lunch and appropriate sports shoes. Academy equipment is provided for all drills.'],
        ['Is lunch or hydration provided?','Hydration stations are available throughout the day. Players should bring their own lunch and snacks.'],
        ['How do I register?','Use the booking form below or contact the academy team directly to confirm a place in the camp.']
      ],
      bookKicker:'08 / Book The Elite Skills Camp',
      bookP:'Secure a place in the camp and give your game five days of focused, high-quality cricket training.',
      formSpan:'ELITE SKILLS CAMP',
      ages:['Under 10','Under 14','Under 17','Adults'],
      ctaLine:'Five Days To A Better Game.'
    }
  };

  function getSlug(){
    return (new URLSearchParams(window.location.search).get('program')||'').toLowerCase();
  }

  function apply(slug){
    const d=DATA[slug]||DATA['under-10'];
    document.title=d.title;
    const set=(id,val,isHtml)=>{const el=document.getElementById(id);if(el){if(isHtml)el.innerHTML=val;else el.textContent=val;}};
    set('heroKicker',d.heroKicker);
    set('heroTitle',d.heroTitle,true);
    set('heroDesc',d.heroDesc);
    set('ovKicker',d.ovKicker);
    set('ovH2',d.ovH2,true);
    set('ovP1',d.ovP1);set('ovP2',d.ovP2);set('ovP3',d.ovP3);
    const statGrid=document.getElementById('statGrid');
    if(statGrid) statGrid.innerHTML=d.stats.map(s=>'<div class="stat"><strong>'+s[0]+'</strong><span>'+s[1]+'</span></div>').join('');
    set('skillsDesc',d.skillsDesc);
    const feat=document.getElementById('featBox');
    if(feat) feat.innerHTML='<span>'+d.feat.span+'</span><strong>'+d.feat.strong+'</strong><p>'+d.feat.p+'</p>';
    const FEAT_IMGS={'under-10':'U10','under-14':'U14','under-17':'U17','adults':'Adults','elite-skills-camp':'camp'};
    const heroPhoto=document.querySelector('.hero-photo');
    if(heroPhoto) heroPhoto.style.backgroundImage='url(assets/images/'+(FEAT_IMGS[slug]||'U10')+'-program-details.webp)';
    const grid=document.getElementById('trainGrid');
    if(grid){
      grid.innerHTML=d.trainCards.map(function(c,i){
        const icon=[ICONS.bat,ICONS.bowl,ICONS.field,ICONS.fit][i];
        return '<article class="training-card reveal show"><div class="training-icon"><i class="fa-solid '+icon+'"></i></div><h3>'+c.h3+'</h3><p>'+c.p+'</p><ul class="training-points">'+c.points.map(pt=>'<li><i class="fa-solid fa-check"></i> '+pt+'</li>').join('')+'</ul></article>';
      }).join('');
    }
    set('schedH2',d.schedH2,true);
    set('schedDesc','The schedule below is an illustrative structure. Actual timings can vary based on academy batches and seasonal availability.');
    const box=document.getElementById('schedBox');
    if(box){
      box.innerHTML='<div class="schedule-row schedule-head"><strong>Day</strong><strong>Training Focus</strong><strong>Typical Time</strong><strong>Goal</strong></div>'+
        d.rows.map(r=>'<div class="schedule-row"><strong>'+r[0]+'</strong><span><i class="fa-solid '+r[1]+'"></i> '+r[2]+'</span><span>'+r[3]+'</span><span>'+r[4]+'</span></div>').join('');
    }
    set('faqKicker',d.faqKicker);
    const faqList=document.getElementById('faqList');
    if(faqList){
      faqList.innerHTML=d.faqs.map(f=>'<div class="faq-item"><button class="faq-question">'+f[0]+'<i class="fa-solid fa-plus"></i></button><div class="faq-answer">'+f[1]+'</div></div>').join('');
      bindFaqToggles(faqList);
    }
    set('bookKicker',d.bookKicker);
    set('bookP',d.bookP);
    set('formSpan',d.formSpan);
    set('ctaLine',d.ctaLine,true);
    const sel=document.getElementById('ageSelect');
    if(sel) sel.innerHTML='<option value="">Select age</option>'+d.ages.map(a=>'<option>'+a+'</option>').join('');
  }

  function bindFaqToggles(scope){
    scope.querySelectorAll('.faq-question').forEach(function(btn){
      btn.addEventListener('click',function(){
        const item=btn.parentElement;
        item.classList.toggle('open');
      });
    });
  }

  apply(getSlug());
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

