const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const asteroid = {
    x: 0,
    y: 20,
    width: 50,
    height: 40,
    img: new Image(),
    horizontalVelocity: 60,
    vx :0
};
const rocket = {
    x: width / 2,
    y: height - 50,
    width: 20,
    height: 50,
    img: new Image(),
    verticalVelocity: 0,
    vx :0,
    vy :0,
    ay :0
};
asteroid.img.src = 'asteroid.png';
rocket.img.src = 'rocket.png';

let gameState = 0;  // 0-start, 1-moving, 2-dropping, 3-hit, 4-missed

// =============== Utility functions =================

function isCollision(box1, box2) {
    return !(
        box2.y + box2.height < box1.y ||
        box1.x + box1.width < box2.x ||
        box1.y + box1.height < box2.y ||
        box2.x + box2.width < box1.x
    );
}

function calculateScore() {
    return Math.round(
        100 *
            Math.abs(
                asteroid.x + asteroid.width / 2 - rocket.x - rocket.width / 2
            )
    );
}

// ============= From the lecture =================

let lastFrameTime = performance.now();

function next(currentTime = performance.now()) {

    const dt = (currentTime - lastFrameTime) / 1000; // seconds
    lastFrameTime = currentTime;

    update(dt); // Update current state
    render(); // Rerender the frame

    requestAnimationFrame(next);
}

function update(dt) {
    if(gameState === 1){
        asteroid.x += asteroid.horizontalVelocity * dt;
    }else if (gameState === 2){
        rocket.y += rocket.vy *dt;
        rocket.vy += rocket.ay *dt;
    }
    if (isCollision(asteroid, rocket)) {
        gameState = 3;
        asteroid.vy = 0;
        asteroid.ay = 0;
    } else if (asteroid.y + asteroid.height >= canvas.height) {
        gameState = 4;
        asteroid.vy = 0;
        asteroid.ay = 0;
    }
}

function render() {
    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(asteroid.img, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
    
    ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);

    if(gameState = 3){
        ctx.font = '30px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Won: ', calculateScore ,canvas.width / 2 - 50, canvas.height / 2);
    }

    if(gameState = 4){
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Lost', canvas.width / 2 - 40, canvas.height / 2);
    }
}

next(); // Start the loop

window.addEventListener("click", () => {
    if (gameState === 0) {
    gameState = 1;
    rocket.verticalVelocity = -200;
    }else if (gameState === 1) {
    gameState = 2;
    rocket.verticalVelocity = -300;
    }
});
