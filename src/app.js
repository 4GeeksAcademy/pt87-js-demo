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
- ${book.pages} pgs`

  return bookDescription;
}

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
`
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
    yield book
  }
}

window.onload = function() {
  const booksDiv = document.querySelector("#books");
  const randomBook = books[
    Math.floor(Math.random() * books.length)
  ];
  booksDiv.innerHTML += makeBookCard(randomBook);
  // This is logging the aria-description property.
  console.log(booksDiv.ariaDescription);
};
