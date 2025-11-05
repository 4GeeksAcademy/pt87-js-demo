import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let laundryFiles = [
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
];

/**
 * We have two special objects that we will be using:
 * window - which gives us an interface to interact with
 * the browser window
 * document - which gives us an interface to interact with
 * the HTML document (aka the Document Object Model.)
 */

window.onload = function() {
  document.body.innerHTML = "<h1>Hello world (from JS).</h1>";
};
