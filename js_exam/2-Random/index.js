const tr = document.querySelector("table tr");
const cells = document.querySelector("#cells");
const limit = document.querySelector("#limit");
const generateButton = document.querySelector("#generate");
const increaseButton = document.querySelector("#increase");

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateTableRow() {
    tr.innerHTML = '';
    const numberOfCells = parseInt(cells.value, 10);

    for (let i = 0; i < numberOfCells; i++) {
        const td = document.createElement("td");
        td.textContent = 0;
        tr.appendChild(td);
    }
}

function increaseByRandomNumbers() {
    const maxIncrease = parseInt(limit.value, 10);
    let maxCellValue = 0;

    for (const td of tr.children) {
        const increaseValue = randomBetween(1, maxIncrease);
        const newCellValue = parseInt(td.textContent, 10) + increaseValue;
        td.textContent = newCellValue;

       maxCellValue = Math.max(maxCellValue, newCellValue);

       let lightness = (newCellValue * 100 / maxCellValue)
       td.style.backgroundColor = `hsla(${10},${70}%,${lightness}%)`
       //`hsla(${hue},${saturation}%,${lightness}%,${alpha})`
    }

    console.log(maxCellValue); 
}

generateButton.addEventListener("click", generateTableRow);
increaseButton.addEventListener("click", increaseByRandomNumbers);