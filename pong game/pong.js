const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const paddleWidth = 10;
const paddleHeight = 80;
const ballRadius = 8;

let leftPaddle = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "#4CAF50"
};

let rightPaddle = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: "#F44336"
};

let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: ballRadius,
  speed: 5,
  velocityX: 5,
  velocityY: 3,
  color: "#FFD700"
};

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

function drawNet() {
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  // Randomize initial direction
  ball.velocityX = (Math.random() > 0.5 ? 1 : -1) * ball.speed;
  ball.velocityY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 3 + 2);
}

function draw() {
  // Clear canvas
  drawRect(0, 0, canvas.width, canvas.height, "#111");
  drawNet();

  // Paddles and ball
  drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, leftPaddle.color);
  drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, rightPaddle.color);
  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function collision(b, p) {
  return (
    b.x - b.radius < p.x + p.width &&
    b.x + b.radius > p.x &&
    b.y - b.radius < p.y + p.height &&
    b.y + b.radius > p.y
  );
}

function update() {
  // Move ball
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // Wall collision (top/bottom)
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.velocityY = -ball.velocityY;
  }

  // Paddle collision (left)
  if (collision(ball, leftPaddle)) {
    // Calculate collision point
    let collidePoint = (ball.y - (leftPaddle.y + leftPaddle.height / 2));
    collidePoint = collidePoint / (leftPaddle.height / 2);

    // Calculate angle in Radian
    let angleRad = collidePoint * (Math.PI / 4);

    // Direction of the ball when hit
    let direction = 1;

    // Change velocity
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
    ball.speed += 0.2;
  }

  // Paddle collision (right)
  if (collision(ball, rightPaddle)) {
    let collidePoint = (ball.y - (rightPaddle.y + rightPaddle.height / 2));
    collidePoint = collidePoint / (rightPaddle.height / 2);

    let angleRad = collidePoint * (Math.PI / 4);
    let direction = -1;
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
    ball.speed += 0.2;
  }

  // Left/right wall (reset ball)
  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    resetBall();
    ball.speed = 5;
  }

  // AI paddle movement (simple)
  let aiCenter = rightPaddle.y + rightPaddle.height / 2;
  if (ball.y < aiCenter - 8) {
    rightPaddle.y -= 4;
  } else if (ball.y > aiCenter + 8) {
    rightPaddle.y += 4;
  }

  // Clamp right paddle position
  if (rightPaddle.y < 0) rightPaddle.y = 0;
  if (rightPaddle.y + rightPaddle.height > canvas.height)
    rightPaddle.y = canvas.height - rightPaddle.height;
}

// Player paddle control (mouse)
canvas.addEventListener("mousemove", function (evt) {
  let rect = canvas.getBoundingClientRect();
  let scale = canvas.height / rect.height;
  let mouseY = (evt.clientY - rect.top) * scale;
  leftPaddle.y = mouseY - leftPaddle.height / 2;
  // Clamp paddle
  if (leftPaddle.y < 0) leftPaddle.y = 0;
  if (leftPaddle.y + leftPaddle.height > canvas.height)
    leftPaddle.y = canvas.height - leftPaddle.height;
});

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();