/*
const li = document.querySelectorAll('li')

for( const l of li){
    l.addEventListener('click', function(){
        l.style.color = 'red'
    })
}
*/

/*const ul = document.querySelector('ul')

ul.addEventListener('click', function(e){

    if(e.target.matches('li')){
    e.target.style.color = 'red'
}
})
*/
// let lastClick = null

//1
// document.body.addEventListener('click', function(e){

//     if(lastClick == null)
//     {
//         lastClick = e
//     }else{
//         setTimeout(function() {
//             e.target.style.color = 'red';
//           }, 2000);
//     }
// })

//1
// document.body.addEventListener('click', function(e){

//     if(lastClick == null)
//     {
//         lastClick = e
//     }else{
//         console.log((e.timeStamp - lastClick.timeStamp) / 1000)
//         last = e
//     }
// })


//Generate a 10x10 table
//When clickin on a cell number should increase
const table = document.getElementById('my-table');

for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('td');
      cell.innerText = 0

        // cell.addEventListener('click',function(){
        //     let value = parseInt(cell.innerText);
        //     value++;
        //     cell.innerText = value;
        // })
      row.appendChild(cell);
    } 
    table.appendChild(row);
}

table.addEventListener('click',function(e){

    if(e.target.matches('td')){
        let value2 = parseFloat(e.target.innerText);
        value2++;
        e.target.innerText = value2;
    }
})

//change the background color to yellow when we hover to mouse into a row
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
      const targetElement = event.target.closest(selector);
  
      if (this.contains(targetElement)) {
        handler.call(targetElement, event);
      }
    });
}

delegate(table,'mouseover', 'tr', function(){
    this.style.backgroundColor = 'yellow'
})

delegate(table,'mouseout', 'tr', function(){
    this.style.backgroundColor = ''
})

