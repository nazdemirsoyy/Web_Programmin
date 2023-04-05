
//task:
//1. make the circles faster
//2. make the circles bounce back on the bottom edge

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

let circles = [
    { x: 50, y: 50 , speed: 0.4}
]

function update(dt){
    for(const circle of circles){
        circle.y += circle.speed * dt
        if(circle.y > canvas.height - 20){
            circle.y = canvas.height - 20
             circle.speed = -circle.speed
        }
    }
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(const circle of circles){
        ctx.beginPath() // Begin a new path for each circle
        ctx.arc(circle.x, circle.y, 20, 0, 2*Math.PI)
        ctx.fillStyle = 'red' // Set the fill color to red
        ctx.fill()
    }   
}

let last = performance.now()

function gameLoop(){
    let now = performance.now()
    let dt = now - last
    last = now
    update(dt)
    render()
    requestAnimationFrame(gameLoop)
}

gameLoop()

canvas.addEventListener('click', function(e){
    let newCircle = {
        x: e.clientX,
        y: e.clientY,
        speed: 0.4,
        color: `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`
    }
    circles.push(newCircle)
})

