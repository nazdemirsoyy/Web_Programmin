const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

// Application state
const plane = {
  x: 0,
  y: 20,
  width: 60,
  height: 30,
  vx: 0,
  img: new Image(),
};
const parcel = {
  x: 0,
  y: plane.y + plane.height,
  width: 30,
  height: 30,
  vx: 0,
  vy: 0,
  ay: 0,
  img: new Image(),
};
const house = {
  x: 400,
  y: canvas.height - 120,
  width: 100,
  height: 100,
  img: new Image(),
};
let gameState = 0; // 0-start, 1-moving, 2-dropping, 3-hit, 4-missed

// ================= Game loop =====================

// Time-based animation (from the lecture slide)
let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Update current state
  render(); // Rerender the frame

  requestAnimationFrame(next);
}

function update(dt) {
  if (gameState === 1) {
    plane.x += plane.vx * dt;
    parcel.x = plane.x; // Update parcel x position to match the plane's x position
  } else if (gameState === 2) {
    parcel.y += parcel.vy * dt;
    parcel.vy += parcel.ay * dt;

    if (isCollision(parcel, house)) {
      gameState = 3;
      parcel.vy = 0;
      parcel.ay = 0;
    } else if (parcel.y + parcel.height >= canvas.height) {
      gameState = 4;
      parcel.vy = 0;
      parcel.ay = 0;
    }
  }
}

function render() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the plane image
  ctx.drawImage(plane.img, plane.x, plane.y, plane.width, plane.height);

  // Draw the parcel image
  ctx.drawImage(parcel.img, parcel.x, parcel.y, parcel.width, parcel.height);

  // Draw the house image
  ctx.drawImage(house.img, house.x, house.y, house.width, house.height);

  // Draw the "Delivered" text if gameState is 3
  if (gameState === 3) {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Delivered', canvas.width / 2 - 50, canvas.height / 2);
  }
  
  // Draw the "Missed" text if gameState is 4
  if (gameState === 4) {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Missed', canvas.width / 2 - 40, canvas.height / 2);
  }
}


// Start the loop
plane.img.src = "plane.png";
house.img.src = "house.png";
parcel.img.src = "parcel.png";
next();

// =============== Utility functions =================

function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  );
}

// =============== Event handlers =================

canvas.addEventListener('click', () => {
  if (gameState === 0) {
    gameState = 1;
    plane.vx = 200; // Set horizontal velocity (e.g., 200 px/s)
  } else if (gameState === 1) {
    gameState = 2;
    parcel.ay = 300; // Set vertical acceleration (e.g., 300 px/s^2)
  }
});