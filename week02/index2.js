const output = document.querySelector('span')
const button = document.querySelector('button')
const btn2 = document.getElementById('btn2')

function increaseByOne(){
    let value = parseInt(output.innerText)
    value = value + 1
    output.innerText = value
}

function reset(){
    let valuex = parseInt(output.innerText)
    valuex = 0
}

button.addEventListener("click", increaseByOne)
button.addEventListener("click", reset)