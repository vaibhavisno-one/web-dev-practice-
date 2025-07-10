const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// --- LEVEL DATA ---
const levels = [
  // Level 1: Easy
  {
    platforms: [
      {x: 0, y: 440, w: 800, h: 40}, // ground
      {x: 100, y: 350, w: 120, h: 20},
      {x: 260, y: 270, w: 80, h: 20},
      {x: 420, y: 350, w: 120, h: 20},
      {x: 600, y: 300, w: 90, h: 20},
      {x: 720, y: 220, w: 60, h: 20},
    ],
    flag: { x: 735, y: 150, w: 30, h: 70 },
    gravity: 0.5
  },
  // Level 2: Medium
  {
    platforms: [
      {x: 0, y: 440, w: 800, h: 40},
      {x: 80, y: 340, w: 70, h: 18},
      {x: 220, y: 270, w: 65, h: 18},
      {x: 340, y: 200, w: 60, h: 18},
      {x: 490, y: 230, w: 55, h: 18},
      {x: 600, y: 300, w: 80, h: 18},
      {x: 700, y: 180, w: 60, h: 18},
    ],
    flag: { x: 735, y: 120, w: 30, h: 70 },
    gravity: 0.6
  },
  // Level 3: Hard
  {
    platforms: [
      {x: 0, y: 440, w: 800, h: 40},
      {x: 70, y: 340, w: 55, h: 16},
      {x: 170, y: 260, w: 45, h: 16},
      {x: 265, y: 195, w: 40, h: 16},
      {x: 370, y: 130, w: 35, h: 16},
      {x: 470, y: 170, w: 55, h: 16},
      {x: 600, y: 240, w: 50, h: 16},
      {x: 710, y: 120, w: 40, h: 16},
    ],
    flag: { x: 735, y: 65, w: 30, h: 70 },
    gravity: 0.7
  }
];

let currentLevel = 0;
let level = levels[currentLevel];

// --- PLAYER ---
let player = {
  x: 50, y: 380, w: 32, h: 40,
  vx: 0, vy: 0,
  speed: 3.2,
  jump: -10.5,
  grounded: false
};

let keys = {};
let won = false;
let finishedGame = false;

// --- CONTROLS ---
window.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
window.addEventListener('keyup',   e => keys[e.key.toLowerCase()] = false);

// --- COLLISION ---
function collideRect(r1, r2) {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.y + r1.h > r2.y
  );
}

// --- GAME LOOP ---
function update() {
  if (won || finishedGame) return;

  // Move left/right
  if (keys['arrowleft'] || keys['a']) player.vx -= player.speed * 0.14;
  if (keys['arrowright'] || keys['d']) player.vx += player.speed * 0.14;

  player.vx *= 0.82;
  player.x += player.vx;

  // Gravity & jumping
  player.vy += level.gravity;
  player.y += player.vy;

  player.grounded = false;
  for (let plat of level.platforms) {
    let next = {
      x: player.x,
      y: player.y,
      w: player.w,
      h: player.h
    };
    if (collideRect(next, plat)) {
      // Coming from above
      if (player.vy > 0 && player.y + player.h - player.vy <= plat.y) {
        player.y = plat.y - player.h;
        player.vy = 0;
        player.grounded = true;
      }
      // Left/right collision
      else if (player.x + player.w - player.vx <= plat.x) {
        player.x = plat.x - player.w;
        player.vx = 0;
      }
      else if (player.x - player.vx >= plat.x + plat.w) {
        player.x = plat.x + plat.w;
        player.vx = 0;
      }
      // Hitting from below
      else if (player.vy < 0 && player.y - player.vy >= plat.y + plat.h) {
        player.y = plat.y + plat.h;
        player.vy = 1;
      }
    }
  }

  // Jump
  if ((keys['arrowup'] || keys['w'] || keys[' ']) && player.grounded) {
    player.vy = player.jump;
    player.grounded = false;
  }

  // Clamp within world
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
  if (player.y > canvas.height) restartGame();

  // Win condition
  if (collideRect(player, level.flag)) {
    if (currentLevel < levels.length - 1) {
      won = true;
      document.getElementById('win').querySelector('h2').textContent = `Level ${currentLevel+1} Complete!`;
      document.getElementById('win').style.display = '';
      document.getElementById('nextBtn').style.display = '';
      document.getElementById('restartBtn').style.display = 'none';
    } else {
      finishedGame = true;
      document.getElementById('win').querySelector('h2').textContent = "You Win the Game!";
      document.getElementById('win').style.display = '';
      document.getElementById('nextBtn').style.display = 'none';
      document.getElementById('restartBtn').style.display = '';
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw platforms
  ctx.fillStyle = '#875c2f';
  for (let plat of level.platforms) {
    ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
  }

  // Draw flag
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.fillRect(level.flag.x, level.flag.y, level.flag.w, level.flag.h);
  ctx.fillStyle = '#e53';
  ctx.beginPath();
  ctx.moveTo(level.flag.x + level.flag.w, level.flag.y + 5);
  ctx.lineTo(level.flag.x + level.flag.w + 25, level.flag.y + 22);
  ctx.lineTo(level.flag.x + level.flag.w, level.flag.y + 35);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Draw player
  ctx.save();
  ctx.fillStyle = '#36b';
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // Face
  ctx.fillStyle = '#fff';
  ctx.fillRect(player.x + 8, player.y + 12, 16, 10);
  ctx.fillStyle = '#222';
  ctx.fillRect(player.x + 12, player.y + 16, 3, 3);
  ctx.fillRect(player.x + 20, player.y + 16, 3, 3);
  ctx.restore();

  // Draw level indicator
  ctx.save();
  ctx.font = "bold 22px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(`Level: ${currentLevel+1} / ${levels.length}`, 20, 32);
  ctx.restore();
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// --- RESTART ---
function restartGame() {
  player.x = 50; player.y = 380;
  player.vx = 0; player.vy = 0;
  won = false;
  finishedGame = false;
  currentLevel = 0;
  level = levels[currentLevel];
  document.getElementById('win').style.display = 'none';
  document.getElementById('restartBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = '';
}

function nextLevel() {
  if (currentLevel < levels.length - 1) {
    currentLevel++;
    level = levels[currentLevel];
    player.x = 50; player.y = 380;
    player.vx = 0; player.vy = 0;
    won = false;
    document.getElementById('win').style.display = 'none';
  }
}

// Attach new nextLevel and restartGame globally for HTML buttons
window.nextLevel = nextLevel;
window.restartGame = restartGame;

gameLoop();