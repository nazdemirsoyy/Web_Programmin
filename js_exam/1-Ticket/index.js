const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

console.log(cities);
console.log(connections);

//Task1
const constantinople = 'Constantinople';
const cn = cities.find(cn => cn.city === constantinople );
const cityName = cn ? cn.today : 'Not Found!';
const countryName = cn ? cn.country : 'Not Found!';

const task1Element = document.getElementById('task1');
task1Element.textContent = 'Current City Name: ' + cityName +', Current Country Name: ' + countryName;


//Task2
const citiesInsideRectangle = cities.filter(city => city.x >= 30 && city.x <= 60 && city.y >= 40 && city.y <= 60);
const cityNamesInsideRectangle = citiesInsideRectangle.map(city => city.city).join(', ');

const task2Element = document.getElementById('task2');
task2Element.innerText = cityNamesInsideRectangle;

//Task3
const hasConnectionToBudapest = connections.some(connection => connection.toCity === 'Budapest' || connection.fromCity === 'Budapest');

const task3Element = document.getElementById('task3');
task3Element.innerText = hasConnectionToBudapest;


//Task4
const greenConnections = connections.filter(connection => connection.color === 'green');
const sumOfElements = greenConnections.reduce((sum, connection) => sum + connection.elements.length, 0);
const averageElements = sumOfElements / greenConnections.length;

const task4Element = document.getElementById('task4');
task4Element.innerText = averageElements;