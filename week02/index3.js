const target = Math.ceil(Math.random(*100))
const button = document.querySelector('button')
const span = document.querySelector('span')
const input = document.querySelector('input')

function checkResult(){
    let value = parseInt(input.value)
    if(value < target)
        span.innerText = 'Target is higher'
    else if(value > target)
        span.innerText = 'Target is smaller'
    else
        span.innerText = 'Yes'
}
  
button.addEventListener('click',checkResult )