/* ===== Original inline script 1 from blog-details.html ===== */
(function() {
const body=document.body,navWrap=document.getElementById('navWrap'),themeToggle=document.getElementById('themeToggle'),rtlToggle=document.getElementById('rtlToggle'),menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
if(localStorage.getItem('eca-theme')==='dark'){body.classList.add('dark');themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{body.classList.toggle('dark');const d=body.classList.contains('dark');localStorage.setItem('eca-theme',d?'dark':'light');themeToggle.innerHTML=d?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
rtlToggle.addEventListener('click', () => {const r=document.documentElement.dir==='rtl';document.documentElement.dir=r?'ltr':'rtl';localStorage.setItem('eca-dir',r?'ltr':'rtl')}); rtlToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
if(localStorage.getItem('eca-dir')==='rtl')document.documentElement.dir='rtl';
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinks.classList.toggle('open');
  navLinks.style.display = isOpen ? 'flex' : '';
});
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove('open');
    navLinks.style.display = '';
  }
});
navLinks.querySelectorAll('a:not(.nav-drop-trigger)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navLinks.style.display = '';
  });
});
if (navLinks && !navLinks.querySelector('.mobile-drawer-actions')) {
  const oldLogin = navLinks.querySelector('.mobile-login-link');
  if (oldLogin) oldLogin.remove();
  const mActions = document.createElement('div');
  mActions.className = 'mobile-drawer-actions';
  mActions.innerHTML = '<a href="login.html" class="mobile-drawer-btn mobile-drawer-login"><i class="fa-solid fa-right-to-bracket"></i> Login</a><a href="register.html" class="mobile-drawer-btn mobile-drawer-signup"><i class="fa-solid fa-user-plus"></i> Sign Up</a>';
  navLinks.appendChild(mActions);
}
window.addEventListener('scroll',()=>navWrap.classList.toggle('scrolled',scrollY>25));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;observer.observe(el)});
})();

/* ===== Original inline script 2 from blog-details.html ===== */
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

/* ===== Original inline script 3 from blog-details.html ===== */
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

/* ===== Original inline script 4 from blog-details.html ===== */
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

/* ===== Dynamic blog post content (?post=slug) ===== */
const POSTS={
  'blog-1':{
    title:"5 Things Every Young Cricketer Should Learn First | Elite Cricket Academy",
    desc:"The five fundamentals every young cricketer should master before technique - practical coaching advice from Elite Cricket Academy.",
    kicker:"Coaching · Player Development",
    h1:"5 Things Every Young Cricketer Should Learn First",
    intro:"Before cover drives and bowling actions come five simple skills that unlock everything else. Here is what we prioritise with every new young player at the academy.",
    date:"05 Aug 2026", read:"6 min read", author:"Academy Coaching Team",
    cover:"assets/images/blog-details-1.webp",
    bodyImg:"../images/match-preparation-home.webp",
    html:"<p class='lead'>Every parent asks us the same question: what should my child learn first? The answer is almost never a cover drive. Young cricketers who master a handful of simple things progress faster, enjoy sessions more and find technique far easier later on.</p><p>These five priorities shape how we introduce cricket to every new player, regardless of age or natural ability.</p><h2>1. Watch The Ball</h2><p>It sounds obvious, but tracking the ball from the bowler's hand all the way onto the bat or into the hands is the single most valuable habit in cricket. We play countless small games where the only instruction is watch the ball right onto the bat.</p><h2>2. Move Your Feet</h2><p>Footwork before power. A player who steps towards the ball, even imperfectly, will out-develop one who swings standing still. Ladder races, cone hops and shadow batting all build this without a single technical lecture.</p><div class='article-highlight'>Footwork is not about looking professional. It is about giving the ball enough respect to move towards it.</div><h2>3. Catch With Soft Hands</h2><p>Catching is the first skill where a young player experiences real success in front of others. Soft hands, fingers pointing up and eyes watching all the way in. We celebrate good catches loudly, because fielding confidence carries into batting and bowling.</p><h2>4. Communicate</h2><p>Calling mine, waiting and running together are habits that separate organised young teams from chaotic ones. Communication is coached in every drill, not just matches.</p><ul><li>Call early when taking a catch or running.</li><li>Encourage teammates after every ball.</li><li>Ask the coach one question each session.</li></ul><h2>5. Enjoy The Game</h2><p>The players who stay in cricket are the ones who smile at training. Everything above is built to protect that enjoyment, because a child who loves the game will happily absorb the technique when the time comes.</p><h2>The Long Game</h2><p>None of these five things show up on a scoresheet, yet they predict long-term development better than any early statistic. Master them first and the rest of cricket becomes dramatically easier to learn.</p>"
  },
  'blog-2':{
    title:"How To Build A More Confident Batting Stance | Elite Cricket Academy",
    desc:"A confident batting stance starts with balance, grip and head position. Practical drills young batters can use at training and at home.",
    kicker:"Batting · Technique Basics",
    h1:"How To Build A More Confident Batting Stance",
    intro:"A batter's stance is their first impression of every delivery. When it is balanced and repeatable, everything downstream - footwork, shot selection, timing - becomes simpler.",
    date:"29 Jul 2026", read:"7 min read", author:"Batting Coach, Rahul Sharma",
    cover:"assets/images/blog-details-2.webp",
    bodyImg:"../images/Bowling-machine-home.webp",
    html:"<p class='lead'>Watch any accomplished batter closely and you will notice their stance never changes. Feet shoulder width, knees softly bent, head still, hands near the top of the backlift. That consistency is not natural talent. It is trained.</p><h2>Balance Before Power</h2><p>Young batters often want to hit hard before they can stand still. We flip that order. A simple test: can the player hold their stance while a coach gently pushes their shoulders? If they topple, the base needs work before any shot-making begins.</p><div class='article-highlight'>A still head is worth more than a big swing. Where the head goes, the ball follows.</div><h2>Grip And Head Position</h2><p>Two checkpoints fix most stance problems. First, both hands working together rather than fighting each other. Second, eyes level with the shoulder aligned slightly open so both eyes can see the bowler. We check these in every net session until players self-correct.</p><h2>Drills That Build It</h2><ul><li>Shadow batting in front of a mirror - ten slow-motion drives per session.</li><li>Stance holds - hold the position for thirty seconds without wobbling.</li><li>Tennis ball drops - partner drops a ball, batter reacts from a still stance.</li><li>Cone taps between deliveries to reset the feet the same way every time.</li></ul><p>Each drill takes minutes, but repeated across weeks they build a stance that appears under pressure without conscious thought.</p><h3>Common Mistakes To Watch For</h3><p>Feet too wide restricts movement, too narrow invites imbalance. Hands held away from the body make the bat feel heavy. And a head leaning towards off side makes leg-side scoring almost impossible. Correcting two of these usually transforms a young player's comfort at the crease.</p><h2>Confidence Follows Repetition</h2><p>A confident stance is simply a familiar one. The more repetitions a batter takes from the same starting position, the less there is to think about when the ball is coming down at them. Build the routine and the confidence arrives on its own.</p>"
  },
  'blog-3':{
    title:"Cricket Fitness For Kids: What Actually Helps? | Elite Cricket Academy",
    desc:"Cricket fitness for children should be fun, varied and game-based. What actually helps young players move, last longer and stay injury free.",
    kicker:"Fitness · Junior Athletes",
    h1:"Cricket Fitness For Kids: What Actually Helps?",
    intro:"Forget gyms and heavy programmes. For young cricketers, fitness means moving well, moving often and enjoying it. Here is what genuinely works at junior level.",
    date:"21 Jul 2026", read:"6 min read", author:"S&C Coach, Meera Nair",
    cover:"assets/images/blog-details-3.webp",
    bodyImg:"../images/fitness-zone-home.webp",
    html:"<p class='lead'>Parents often ask whether their child should start gym training. For most junior cricketers the answer is no. What helps instead is broader: coordination, speed, agility and the stamina to enjoy a full session without fading.</p><h2>Movement Skills, Not Muscles</h2><p>Children develop athleticism through variety - running, jumping, throwing, catching, balancing, changing direction. A child who plays multiple sports and moves in many ways almost always becomes the better cricketer later, because their body has a bigger library of movements to draw from.</p><div class='article-highlight'>For young athletes, variety is not a distraction from training. Variety is the training.</div><h2>Games That quietly Build Fitness</h2><p>The best junior fitness is invisible. Children sprint harder in a relay than in any shuttle run, and concentrate longer in a catching competition than in any drill labelled as conditioning.</p><ul><li>Relay races and tag games for speed.</li><li>Reaction ball challenges for agility.</li><li>Long-catch and target throwing for arm strength.</li><li>Small field games for stamina without boredom.</li></ul><h2>Recovery Is Part Of Fitness</h2><p>Sleep, hydration and food do more for a nine-year-old's performance than any extra drill. A tired child cannot learn, so we treat recovery habits as coaching points just like grip or footwork.</p><h3>When Is Strength Work Appropriate?</h3><p>Bodyweight strength - planks, lunges, push-ups, medicine ball throws - can be introduced safely in the early teens once movement quality is established. Loaded barbell training has no place in a junior programme and waits until growth and technique allow it.</p><h2>The Goal For Parents</h2><p>Aim for a child who moves confidently in many directions, recovers well and associates physical activity with fun. Do that and cricket fitness takes care of itself for years to come.</p>"
  },
  'blog-4':{
    title:"What Parents Should Look For In A Cricket Academy | Elite Cricket Academy",
    desc:"Choosing a cricket academy for your child? Coach quality, age-appropriate training, communication and culture matter more than facilities alone.",
    kicker:"Academy · Parent Guide",
    h1:"What Parents Should Look For In A Cricket Academy",
    intro:"Fees and floodlights are easy to compare. What actually shapes your child's experience is harder to see from the boundary. This guide covers what matters most.",
    date:"14 Jul 2026", read:"7 min read", author:"Academy Director",
    cover:"assets/images/blog-details-4.webp",
    bodyImg:"../images/cricket-ground.webp",
    html:"<p class='lead'>Every academy brochure looks identical on paper: qualified coaches, modern nets, weekly matches. The differences that matter appear only when you look closer at how children are actually taught and treated.</p><h2>Coach Quality Over Coach Count</h2><p>Ask what qualifications coaches hold and, more importantly, how they work with beginners. A great junior coach explains one thing at a time, notices small wins and keeps energy high through a full session. Sit and watch one session before committing anywhere.</p><h2>Age-Appropriate Training</h2><p>Under 10s should be playing modified games with shorter pitches and softer balls, not replicating adult drills. Ask how sessions differ between age groups. If the answer is only the duration, keep looking.</p><div class='article-highlight'>The right academy meets a child where they are, not where the syllabus says they should be.</div><h2>Communication With Parents</h2><p>You should know what your child is working on and why. Good academies share brief feedback regularly, welcome questions and tell you honestly when something needs attention at home. Silence after months of fees is a red flag.</p><ul><li>Clear session plans by age group.</li><li>Feedback you can understand, not just match scores.</li><li>An open door for questions about progress.</li></ul><h2>Culture Beats Facilities</h2><p>Floodlights fade in importance quickly. What endures is whether children are encouraged after failures, whether bench players stay engaged and whether the same joy exists in week forty as in week one. Visit unannounced, watch how coaches speak to the least skilled child present, and you will learn more than any website can tell you.</p><h2>Trust The Observation Window</h2><p>Give any new academy a term before judging. Progress in juniors is rarely linear, but enjoyment, effort and willingness to return are visible immediately - and those three predict everything else.</p>"
  },
  'blog-5':{
    title:"Why Small-Sided Games Improve Cricket Awareness | Elite Cricket Academy",
    desc:"Small-sided games give young cricketers more touches, more decisions and faster learning. How mini formats build real match awareness.",
    kicker:"Coaching · Game Intelligence",
    h1:"Why Small-Sided Games Improve Cricket Awareness",
    intro:"Eleven-a-side cricket gives a junior fieldsman maybe three moments of involvement in an afternoon. Shrink the game and those moments multiply - along with the learning inside them.",
    date:"07 Jul 2026", read:"5 min read", author:"Academy Coaching Team",
    cover:"assets/images/blog-details-5.webp",
    bodyImg:"../images/Weekend-match.webp",
    html:"<p class='lead'>Ask a coach what limits a young player's development and the answer is rarely technique. It is touches. In a full-length match, a junior might face four balls, take one catch and make two runs. There is very little cricket in that.</p><h2>More Involvement, Faster Learning</h2><p>Small-sided formats change the maths. Fewer players per side means every child bats longer, bowls more overs and fields in the action constantly. Each extra involvement is another decision made, and decision-making is the skill that separates aware cricketers from busy ones.</p><div class='article-highlight'>Game awareness is not taught in team talks. It is built one small decision at a time, hundreds of times over.</div><h2>The Formats We Use</h2><ul><li>Pairs cricket - every pair bats together and everyone bowls an over.</li><li>Target games - hitting zones score differently, teaching placement over power.</li><li>Run-out rush - constant calling and backing up under pressure.</li><li>Four-a-side matches - shortened pitch, quick innings, everyone involved.</li></ul><p>None require special equipment beyond cones and soft balls, which makes them perfect for weekend practice at home too.</p><h2>Why It Transfers To Real Matches</h2><p>Players who grow up on small-sided games read situations earlier. They know when a single becomes two, where the risky shot is and how to set a field, because they have made those exact decisions repeatedly in miniature. When the full format arrives, nothing about it feels new.</p><h2>Try It At Training</h2><p>If your club trains only in straight lines, suggest one small-sided game per session. The technical work stays exactly the same - but the thinking around it grows enormously.</p>"
  },
  'blog-6':{
    title:"Three Throw-Down Drills To Try At Home | Elite Cricket Academy",
    desc:"Three simple throw-down drills parents can run at home with a tennis ball - building timing, footwork and confidence between academy sessions.",
    kicker:"Batting · Home Practice",
    h1:"Three Throw-Down Drills To Try At Home",
    intro:"Between academy sessions, fifteen minutes of focused throw-downs beats hours of unstructured net time. All three drills below need only a tennis ball, a bat and a wall.",
    date:"30 Jun 2026", read:"5 min read", author:"Batting Coach, Rahul Sharma",
    cover:"assets/images/blog-details-6.webp",
    bodyImg:"../images/practise-net-home.webp",
    html:"<p class='lead'>Throw-downs are the simplest coaching tool in cricket and, used well, one of the most effective. The three drills below take fifteen minutes, need no nets, and target the skills young batters need most: watching, moving and timing.</p><h2>Drill 1 - Call The Seam Or Colour</h2><p>The thrower calls seam or blank as the ball leaves their hand. The batter must call it back before playing a controlled shot. This forces eyes to the ball at the exact moment concentration usually drifts, which is where most young dismissals begin.</p><div class='article-highlight'>Ten focused balls with a purpose beat fifty balls with none. Stop the drill the moment attention fades.</div><h2>Drill 2 - Front Foot, Back Foot</h2><p>The thrower alternates full tosses and shorter bounces without warning. The batter must decide and move - forward for the full, back for the short - playing each shot softly to a marked target rather than for power. Decision-making and footwork improve together.</p><ul><li>Two sets of twelve balls, one minute rest between.</li><li>Score a point for each shot hit to the target zone.</li><li>Swap thrower and batter every set - throwing is practice too.</li></ul><h2>Drill 3 - One Ball, One Review</h2><p>After every ball the batter says one thing they noticed - early, late, off balance, sweet spot. This tiny review habit builds self-awareness faster than any external correction, and it transfers directly to net sessions at the academy.</p><h3>Safety Notes</h3><p>Use a tennis ball, keep throws from a short distance, and make sure the landing area is clear of windows, siblings and pets. The goal is rhythm and confidence, never pace.</p><h2>Keep It Short And Fun</h2><p>End every home session while the batter still wants one more ball. Fifteen sharp minutes twice a week will visibly show up in their next match.</p>"
  }
};
(function(){
  const slug=new URLSearchParams(location.search).get('post');
  if(!slug) return;
  const d=POSTS[slug];
  if(!d) return;
  document.title=d.title;
  const md=document.querySelector('meta[name="description"]');
  if(md) md.setAttribute('content',d.desc);
  const kick=document.querySelector('.article-hero .kicker');
  if(kick) kick.textContent=d.kicker;
  const h=document.getElementById('postTitle');
  if(h) h.textContent=d.h1;
  const intro=document.getElementById('postIntro');
  if(intro) intro.textContent=d.intro;
  const meta=document.getElementById('postMeta');
  if(meta) meta.innerHTML="<span><i class='fa-regular fa-calendar'></i> "+d.date+"</span><span>•</span><span><i class='fa-regular fa-clock'></i> "+d.read+"</span><span>•</span><span><i class='fa-solid fa-user'></i> "+d.author+"</span>";
  const cover=document.getElementById('postCover');
  if(cover) cover.style.backgroundImage="url('"+d.cover+"')";
  const bodyEl=document.getElementById('postBody');
  if(bodyEl) bodyEl.innerHTML=d.html;
  const keys=Object.keys(POSTS);
  const idx=keys.indexOf(slug);
  const rel=[keys[(idx+1)%keys.length],keys[(idx+2)%keys.length]];
  const list=document.querySelector('.related-list');
  if(list){
    list.innerHTML=rel.map(function(r){
      const p=POSTS[r];
      const cat=p.kicker.split('·')[0].trim();
      return "<a class='related' href='blog-details.html?post="+r+"'><div class='related-img' style=\"background-image:url('assets/images/"+r+".webp')\"></div><div><strong>"+p.h1+"</strong><small>"+cat+" · "+p.read+"</small></div></a>";
    }).join('');
  }
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

