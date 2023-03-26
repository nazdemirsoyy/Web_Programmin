// Create a variable that stores your name. Welcome yourself in the console!
// In JavaScript you often generate HTML strings. Write to the console!
// a. Welcome yourself in an h1 tag!

const name = "Naz"

console.log(`<h1>Welcome, ${name}!</h1>`);


// The isLoggedIn variable shows whether the user is logged in or not. 
//If the user is logged in, generate a welcome message and a logout link.
// If not, generate a login link. Wrap the generated HTML string with a div element.

const isLoggedIn = true; // or false, depending on whether the user is logged in or not

let htmlString = '';

if (isLoggedIn) {
  const username = 'nazdem';
  htmlString = `
    <p>Welcome, ${username}!</p>
    <a href="#">Logout</a>
  `;
} else {
  htmlString = `
    <a href="#">Login</a>
  `;
}

htmlString = `<div>${htmlString}</div>`;
console.log(htmlString);


//An array of names is given. Generate an unordered list from it!
const namlist = ['Naz','X','Y']

let htmlStrings = '<ul>';

for (const name of namlist) {
    htmlStrings += `<li>${name}</li>`;
  }
  htmlStrings += '</ul>';
  
  console.log(htmlStrings);

// output
//   <div>
//     <p>Welcome, nazdem!</p>
//     <a href="#">Logout</a>
//   </div><li>Naz</li><li>X</li><li>Y</li></ul>

// An array of student data is given. 
// Student data stores the Neptun id, the name and the date of birth of the student. 
// Generate an HTML table from this array!

const students = [
    { neptun: 'ABC123', name: 'John Smith', dob: '2000-01-01' },
    { neptun: 'DEF456', name: 'Jane Doe', dob: '2001-02-03' },
    { neptun: 'GHI789', name: 'Bob Johnson', dob: '1999-05-07' }
  ];
  
let htmlString = '<table><thead><tr><th>Neptun</th><th>Name</th><th>Date of Birth</th></tr></thead><tbody>';
for (const student of students) {
    htmlString += `<tr><td>${student.neptun}</td><td>${student.name}</td><td>${student.dob}</td></tr>`;
}
htmlString += '</tbody></table>';
  
console.log(htmlString);


// A movie catalogue contains the following informations on every movie:

// title
// length
// year
// directors
// actors
// Create a sample catalogue with some dummy data!

const movie_catalogue = [
    {
        "title": "The Shawshank Redemption",
        "length": "2h 22m",
        "year": 1994,
        "directors": ["Frank Darabont"],
        "actors": ["Tim Robbins", "Morgan Freeman"]
    },
    {
        "title": "The Godfather",
        "length": "2h 58m",
        "year": 1972,
        "directors": ["Francis Ford Coppola"],
        "actors": ["Marlon Brando", "Al Pacino"]
    },
    {
        "title": "The Dark Knight",
        "length": "2h 32m",
        "year": 2008,
        "directors": ["Christopher Nolan"],
        "actors": ["Christian Bale", "Heath Ledger"]
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "length": "3h 48m",
        "year": 2001,
        "directors": ["Peter Jackson"],
        "actors": ["Elijah Wood", "Ian McKellen"]
    }
]


// List the movies to the console!
for (let i = 0; i < movie_catalogue .length; i++) {
    console.log("Title: " + movie_catalogue [i].title);
    console.log("Length: " + movie_catalogue [i].length);
    console.log("Year: " + movie_catalogue [i].year);
    console.log("Directors: " + movie_catalogue [i].directors.join(", "));
    console.log("Actors: " + movie_catalogue [i].actors.join(", "));
    console.log("");
  }

//Return those movies which have several directors (not one)!
const moviesWithMultipleDirectors = movieCatalogue.filter(movie => movie.directors.length > 1);

console.log(moviesWithMultipleDirectors);

//Find the longest movie
const longestMovie = movie_catalogue.reduce((acc, cur) => {
    return cur.length > acc.length ? cur : acc;
  });
  
  console.log(longestMovie.title);


//Find a negative number in a series of numbers
const num = [1,2,3,4,5,-20,-63];

for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      console.log(`Negative number found: ${num[i]}`);
    }
  }

//Count even numbers in a series of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}

console.log(`There are ${count} even numbers in the series.`);

//gcd function
function gcd(a,b){
    if(b == 0){
        return a;
    } else{
        return gcd(b,a%b);
    }
}

console.log(gcd(12, 18)); // Output: 6
console.log(gcd(15, 25)); // Output: 5
console.log(gcd(35, 42)); // Output: 7

  
