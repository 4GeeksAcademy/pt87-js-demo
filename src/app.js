import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import json_data from "./data";

window.onload = () => {
  let page_size = 3;
  let page = 0;

  function makeBookCard(book) {
    const bookHTML = `
<div class="card mx-auto mb-2" style="max-width: 18rem;">
  <img src="${
    book.cover ? book.cover : "https://placehold.co/300x500/888/888/"
  }" class="card-img" alt="...">
  <div class="card-img-overlay text-bg-dork">
    <h5 class="card-title">${book.title} - ${book.year_published}</h5>
    <p>
      By: ${book.author} <br />
      ${book.num_pages} pgs
    </p>
  </div>
</div>
`;
    return bookHTML;
  }

  const drawCards = () => {
    const booksDiv = document.querySelector("#books");

    booksDiv.innerHTML = "";

    const book_slice = json_data.books.slice(
      page * page_size,
      page * page_size + page_size
    );

    for (const book of book_slice) {
      booksDiv.innerHTML += makeBookCard(book);
    }

    document.querySelector("#page-badge").innerHTML = page + 1;
  };

  document.querySelector("#incr").onclick = () => {
    page++;
    if (page > Math.floor(json_data.books.length / page_size)) {
      page = Math.floor(json_data.books.length / page_size);
    }
    drawCards();
  };

  // Event listeners just allow you more flexibility!
  document.querySelector("#decr").addEventListener("click", () => {
    page--;
    if (page < 0) {
      page = 0;
    }
    drawCards();
  });

  drawCards();
};
