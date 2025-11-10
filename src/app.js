import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let books = [
  {
    title: "A Conventional Boy",
    author: "Charles Stross",
    pages: 211,
    year_published: 2024,
  },
  {
    title: "Dead Not Dreaming",
    author: "Charles Stross",
    pages: 211,
    year_published: 2022,
  },
  {
    title: "The Fuller Memorandum",
    author: "Charles Stross",
    pages: 211,
    year_published: 2015,
  },
  {
    title: "Where's Waldo",
    author: "Martin Hanford",
    pages: 211,
    year_published: 2015,
  },
  {
    title: "The Visual Display of Quantitaive Information",
    author: "Edward R. Tufte",
    pages: 211,
    year_published: 2015,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 687,
    year_published: 2015,
  },
];

/**
 * We have two special objects that we will be using:
 * window - which gives us an interface to interact with
 * the browser window
 * document - which gives us an interface to interact with
 * the HTML document (aka the Document Object Model.)
 */

// Arrow/Anonymous function
/**
 * This function accepts a book object
 * and return a string describing the book
 * in this format:
 *
 * {title} - {year_published}
 * - By: {author}
 * - {pages} pgs
 */
const describeBook = (book) => {
  // Any code you write in the squiggly braces
  // is part of the function.
  const bookDescription = `${book.title} - ${book.year_published}
- By: ${book.author}
- ${book.pages} pgs`;

  return bookDescription;
};

function makeBookCard(book) {
  const bookHTML = `
<div class="card mx-auto mb-2" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${book.title} - ${book.year_published}</h5>
    <ul>
      <li>
        By: ${book.author}
      </li>
      <li>
        ${book.pages} pgs
      </li>
    </ul>
  </div>
</div>
`;
  return bookHTML;
}

/*
 * These are really cool, and we'll probably talk about
 * them later on in the course (but only for a bit.)
 */
function* generatorFunc(books) {
  // This is a special type of function
  // You can iterate over these (but they are more work.)
  for (const book of books) {
    yield book;
  }
}

// For loops:
// Loops are a way to repeat code.

// For...of loop
// for (const book of books) {
//   console.log(book.title);
// }

// For loop
// This is an old style of for loop.
// Gives a bit more control over iteration
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
// }

// For...in loop
// Instead of iterating over the values
// this iterates over the identifiers for those values.
// for (const key in books[0]) {
//   console.log(key);
// }

// While loop
// These are kinda dangerous (and will lead to infinite loops.)
// let exitLoop = false;
// let timesIterated = 0

// while (!exitLoop) {
//   timesIterated++

//   if (timesIterated > 13) {
//     console.log(`You are really unlucky, and rolled the dice 13 times without getting a 6...`);
//     break;
//   }

//   const diceRoll = Math.ceil(Math.random() * 6);
//   console.log(`You have rolled a ${diceRoll}!`);

//   if (diceRoll == 6) {
//     exitLoop = true;
//     console.log(`The dice was rolled ${timesIterated} times before you got a 6!`)
//   }
// }

// Some other ways to iterate:
// books.forEach((book) => console.log(book));

// Map is one the most useful tools you will use!
// console.log(books.map((book) => book.title.toLocaleUpperCase()));

window.onload = () => {
  const booksDiv = document.querySelector("#books");

  for (const book of books) {
    booksDiv.innerHTML += makeBookCard(book);

    // Any valid code can go into a loop, even other loops.
    // for (const key in book) {
    //   console.log(`${book.title} - ${key}`);
    // }
  }

  // const randomBook = books[
  //   Math.floor(Math.random() * books.length)
  // ];
  // booksDiv.innerHTML += makeBookCard(randomBook);
  // This is logging the aria-description property.
  // console.log(booksDiv.ariaDescription);
};
