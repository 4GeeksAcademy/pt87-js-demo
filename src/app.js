import "bootstrap";
import "./style.css";

import Pagination from "./Pagination";

import json_data from "./data";

window.onload = () => {
  // Setting up pagination.
  let page_size = 3;
  let page_num = 0;

  // For next time: Set up the numbers between the special buttons.
  let special_buttons = [
    {
      text: "Previous",
      onclick: () => {
        if (page_num > 0) {
          page_num--;
          drawCards();
        }
      },
      isActive: () => (page_num > 0)
    },
    {
      text: "Next",
      onclick: () => {
        if (page_num < Math.floor(json_data.books.length / page_size)) {
          page_num++;
          drawCards();
        }
      },
      isActive: () => page_num < Math.floor(json_data.books.length / page_size)
    },
  ]

  const Button = (bg_color="primary", icon="fa-book-skull", isToggled=true) => {
    const button = document.createElement("button");
    button.classList.add(
      "btn",
      `btn-${bg_color}`,
      "bg-gradient",
      "text-dark",
    );

    const thumbsIcon = document.createElement("i");
    const decoIcon = document.createElement("i");

    button.appendChild(thumbsIcon);
    button.appendChild(decoIcon);
    
    thumbsIcon.classList.add(
      "fa-solid",
      isToggled ? "fa-thumbs-up" : "fa-thumbs-down",
    );

    decoIcon.classList.add(
      "fa-solid",
      icon,
    );

    return button
  }

  /**
   * Generates HTML for a book card based on a book object.
   *
   * @param {*} book
   * @returns str
   */
  const BookCard = (book) => {
    const hasReadButton = Button("info", "fa-book-skull", book.have_read)
    const isAwesomeButton = Button("danger", "fa-fire-burner", book.is_awesome)

    const bookCard = document.createElement("div");
    bookCard.classList.add(
      "card", "mx-auto", "mb-2"
    )

    bookCard.innerHTML = `<img src="${
          // Ternary operator!  AKA in-line if statement.
          // question ? what to show if true : what to show if false.
          book.cover ? book.cover : "https://placehold.co/300x500/888/888/"
        }" class="card-img-top" alt="...">
      
        <div class="card-body">
          <h5 class="card-title">${book.title} ${book.year_published ? "&mdash; " + book.year_published : ""}</h5>
          <ul class="list-group list-group-flush my-2">
            <li class="list-group-item">By: ${book.author}</li>
            ${book.num_pages ? `<li class="list-group-item">${book.num_pages} pgs</li>` : ""}
            ${book.year_published ? `<li class="list-group-item">Published ${book.year_published}</li>` : ""}
            ${book.isbn10 ? `<li class="list-group-item">ISBN-10: ${book.isbn10}</li>` : ""}
            ${book.isbn13 ? `<li class="list-group-item">ISBN-13: ${book.isbn13}</li>` : ""}
          </ul>
        </div>
        <div class="card-footer d-flex justify-content-between mt-auto mb-2">
          ${hasReadButton.outerHTML}
          ${isAwesomeButton.outerHTML}
        </div>
      `;

    return bookCard
  };

  /**
   * Draws book cards on the page, based on pagination.
   */
  const drawCards = () => {
    const booksDiv = document.querySelector("#books");
    const paginationDiv = document.querySelector("#page_controls");

    const book_slice = json_data.books.slice(
      page_num * page_size, // Index of page start.
      page_num * page_size + page_size // Index of page end.
    );

    paginationDiv.replaceChildren(Pagination(special_buttons));

    booksDiv.innerHTML = book_slice.map(book => `<div class="col">${BookCard(book).outerHTML}</div>`).join("");
    
    document.querySelector("#page-num-badge").innerHTML = page_num + 1;
  };

  drawCards();
};
