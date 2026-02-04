
// Evasive NO button logic (desktop & mobile)
const noBtn = document.getElementById('noBtn');
if(noBtn){
  const moveNo = (e)=>{
    const btn = noBtn;
    const vw = window.innerWidth; const vh = window.innerHeight;
    const x = Math.random()*(vw-140)+20; const y = Math.random()*(vh-80)+20;
    btn.style.position='fixed'; btn.style.left = x+'px'; btn.style.top = y+'px';
  };
  ['mouseenter','click','touchstart'].forEach(ev=> noBtn.addEventListener(ev, moveNo));
}

// Floating hearts generator
function spawnHearts(){
  const emojis = ['❤️','💖','🌹','💘','💕','💞'];
  setInterval(()=>{
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    h.style.left = Math.random()*100+'vw';
    h.style.animationDuration = (6 + Math.random()*4)+'s';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(), 10000);
  }, 400);
}
spawnHearts();

// Gallery delayed link reveal
const shayariLink = document.getElementById('shayariLink');
if(shayariLink){
  setTimeout(()=>{
    shayariLink.classList.remove('hidden');
  }, 10000); // 10s
}

// Shayari typewriter
const lines = [
  'Teri muskurahat se hi meri subah hoti hai,',
  'Dil ki dhadkan me bas teri hi awaaz hoti hai.',
  'Har din bas itna sa armaan rehta hai—',
  'Tere saath hoon, to har raah gulzaar rehti hai. 🌹',
  '',
  'Kya tum meri zindagi ka sabse haseen “haan” banogi, Muskan? 💖'
];

const twEl = document.getElementById('typewriter');
if(twEl){
  let li = 0, ch = 0, buf = '';
  function type(){
    if(li < lines.length){
      if(ch < lines[li].length){
        buf += lines[li][ch++];
        twEl.textContent = buf;
        setTimeout(type, 40);
      } else {
        buf += '\n';
        li++; ch = 0;
        setTimeout(type, 400);
      }
    } else {
      document.getElementById('finalWrap').classList.remove('hidden');
      fireConfettiHearts();
    }
  }
  type();
}

function fireConfettiHearts(){
  const emojis = ['❤️','💖','💕','💝','🌹'];
  for(let i=0;i<30;i++){
    setTimeout(()=>{
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      h.style.left = Math.random()*100+'vw';
      h.style.animationDuration = (4 + Math.random()*2)+'s';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(), 6000);
    }, i*120);
  }
}
