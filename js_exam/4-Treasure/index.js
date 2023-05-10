const containerDiv = document.querySelector("#container");
const counterSpan = document.querySelector("#span-counter");
const widthInput = document.querySelector("#input-width");
const heightInput = document.querySelector("#input-height");
const generateForm = document.querySelector("#form-generate");

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function xyCoord(td) {
    return {
        x: td.cellIndex,
        y: td.parentNode.rowIndex,
    };
}

function distanceHue(x1, y1, x2, y2) {
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    const maxDistance = Math.sqrt((10 - 1) ** 2 + (14 - 1) ** 2);
    const hue = (120 * distance) / maxDistance;
    return hue;
}

const table = document.querySelector("table");

let treasureX = random(0, 9);
let treasureY = random(0, 13);
let clickCounter = 0;

table.addEventListener("click", function (event) {
  const clickedElement = event.target;
  
  if (clickedElement.tagName === "TD") {
    const { x, y } = xyCoord(clickedElement);

    if (!clickedElement.dataset.clicked) {
      clickCounter++;
      counterSpan.textContent = clickCounter;
      clickedElement.dataset.clicked = true;
    }

    const hue = distanceHue(x, y, treasureX, treasureY);
    clickedElement.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`;

    if (x === treasureX && y === treasureY) {
      clickedElement.classList.add("treasure");
      alert("You found the treasure!");
    }
  }
});



