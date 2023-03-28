const numbers = [5, 2, 15, -3, 6, -8, -2];

const matrix = [
  [1, 0, 3],
  [0, 2, 0],
  [4, 5, 6],
  [0, 0, 0],
]

const searchResults = {
  "Search": [
    {
      "Title": "The Hobbit: An Unexpected Journey",
      "Year": "2012",
      "imdbID": "tt0903624",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Desolation of Smaug",
      "Year": "2013",
      "imdbID": "tt1170358",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Battle of the Five Armies",
      "Year": "2014",
      "imdbID": "tt2310332",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "1977",
      "imdbID": "tt0077687",
      "Type": "movie"
    },
    {
      "Title": "Lego the Hobbit: The Video Game",
      "Year": "2014",
      "imdbID": "tt3584562",
      "Type": "game"
    },
    {
      "Title": "The Hobbit",
      "Year": "1966",
      "imdbID": "tt1686804",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "2003",
      "imdbID": "tt0395578",
      "Type": "game"
    },
    {
      "Title": "A Day in the Life of a Hobbit",
      "Year": "2002",
      "imdbID": "tt0473467",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: An Unexpected Journey - The Company of Thorin",
      "Year": "2013",
      "imdbID": "tt3345514",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Swedolation of Smaug",
      "Year": "2014",
      "imdbID": "tt4171362",
      "Type": "movie"
    }
  ],
  "totalResults": "51",
  "Response": "True"
}

//Find the smallest element of the numbers array! (You may use the Infinity value in JavaScript.) 
const smallest = Math.min(...numbers);
console.log(smallest); // -8

//Assign (map) its square value to each item in numbers array. 
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); //[25, 4, 225, 9, 36, 64, 4]

// Solution2: for loop
const squaredNumbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  squaredNumbers2.push(numbers[i] * numbers[i]);
}

console.log(squaredNumbers2);


//Give that row index of the matrix, which row is full of 0 value! If there is no such row, write -1 to the console! 
let zeroRowIndexes = [];

for (let i = 0; i < matrix.length; i++) {
  if (matrix[i].every((val) => val === 0)) {
    zeroRowIndexes.push(i);
  }
}

if (zeroRowIndexes.length === 0) {
  console.log(-1);
} else {
  console.log(zeroRowIndexes); // [1, 3]
}