import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import json_data from "./data";

window.onload = () => {
  // Setting up pagination.
  let page_size = 3;
  let page_num = 0;

  const Button = (bg_color="primary", icon="fa-book-skull", isToggled=true) => {
    return `
    <button class="btn bg-${bg_color} bg-gradient text-dark">
      ${
        isToggled ? '<i class="fa-solid fa-thumbs-up"></i>'
        : '<i class="fa-solid fa-thumbs-down"></i>'
      }
      <i class="fa-solid ${icon}"></i>
    </button>`
  }

  /**
   * Generates HTML for a book card based on a book object.
   *
   * @param {*} book
   * @returns str
   */
  const BookCard = (book) => {
    return `
      <div class="card mx-auto mb-2">
        <img src="${
          // Ternary operator!  AKA in-line if statement.
          // question ? what to show if true : what to show if false.
          book.cover ? book.cover : "https://placehold.co/300x500/888/888/"
        }" class="card-img"  style="max-height: 75dvh" alt="...">
      <div class="card-img-overlay text-bg-dork">
        <div class="card-body">
          <h5 class="card-title">${book.title} ${book.year_published ? "&mdash; " + book.year_published : ""}</h5>
        </div>
        <ul class="list-group my-2">
          <li>By: ${book.author}</li>
          ${book.num_pages ? `<li>${book.num_pages} pgs</li>` : ""}
          ${book.year_published ? `<li>Published ${book.year_published}</li>` : ""}
          ${book.isbn10 ? `<li>ISBN-10: ${book.isbn10}</li>` : ""}
          ${book.isbn13 ? `<li>ISBN-13: ${book.isbn13}</li>` : ""}
        </ul>
        <div class="card-footer d-flex justify-content-between mt-auto mb-2">
          ${Button("info", "fa-book-skull", book.have_read)}
          ${Button("danger", "fa-fire-burner", book.is_awesome)}
        </div>
      </div>
    </div>`;
  };

  const page_up_button = document.querySelector("#page_up");
  const page_down_button = document.querySelector("#page_down");

  /**
   * Draws book cards on the page, based on pagination.
   */
  const drawCards = () => {
    const booksDiv = document.querySelector("#books");

    booksDiv.innerHTML = "";

    const book_slice = json_data.books.slice(
      page_num * page_size, // Index of page start.
      page_num * page_size + page_size // Index of page end.
    );

    for (const book of book_slice) {
      booksDiv.innerHTML += BookCard(book);
    }

    document.querySelector("#page-num-badge").innerHTML = page_num + 1;

    if (page_num <= 0) {
      page_down_button.disabled = true;
      page_down_button.classList.replace("btn-primary", "btn-secondary");
    } else if (page_num < Math.floor(json_data.books.length / page_size)) {
      page_down_button.disabled = false;
      page_down_button.classList.replace("btn-secondary", "btn-primary");
      page_up_button.disabled = false;
      page_up_button.classList.replace("btn-secondary", "btn-primary");
    } else {
      page_up_button.disabled = true;
      page_up_button.classList.replace("btn-primary", "btn-secondary");
    }
  };

  // Adding interactivity to the pagination buttons.
  page_up_button.addEventListener("click", () => {
    page_num++;
    if (page_num > Math.floor(json_data.books.length / page_size)) {
      page_num = Math.floor(json_data.books.length / page_size);
    }
    drawCards();
  });

  // Adding interactivity to the pagination buttons.
  page_down_button.addEventListener("click", () => {
    page_num--;
    if (page_num < 0) {
      page_num = 0;
    }
    drawCards();
  });

  drawCards();
};
