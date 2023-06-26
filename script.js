let myLibrary = [];
let bookContainer = document.getElementById("book-container");

function Book(title, author, numPages, readBook) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readBook = readBook;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }

  for (let book of myLibrary) {
    let aBook = document.createElement("div");
    aBook.classList.add("book");

    for (let prop in book) {
      let aProp = document.createElement("div");
      aProp.classList.add("prop");
      aProp.textContent = book[prop];
      aBook.appendChild(aProp);
    }

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    aBook.appendChild(removeButton);
    let readButton = document.createElement("button");
    readButton.textContent = "Read";
    aBook.appendChild(readButton);

    bookContainer.appendChild(aBook);
  }
}

let firstBook = new Book("Music to my ears", "Rimbo", 23, true);
addBookToLibrary(firstBook);
addBookToLibrary(firstBook);
addBookToLibrary(firstBook);
displayBooks();

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  let form = document.createElement("form");
  let input1 = document.createElement("input");
  let label1 = document.createElement("label");
  let input2 = document.createElement("input");
  let label2 = document.createElement("label");
  let input3 = document.createElement("input");
  let label3 = document.createElement("label");
  let input4 = document.createElement("input");
  let label4 = document.createElement("label");
  let submitButton = document.createElement("button");

  label1.for = "title";
  label1.textContent = "Title:";

  input1.type = "text";
  input1.name = "title";
  input1.id = "title";
  input1.placeholder = "Title";

  label2.for = "author";
  label2.textContent = "Author:";

  input2.type = "text";
  input2.name = "author";
  input2.id = "author";
  input2.placeholder = "Author";

  label3.for = "numPages";
  label3.textContent = "# of pages:";

  input3.type = "text";
  input3.name = "numPages";
  input3.id = "numPages";
  input3.placeholder = "Number of Pages";

  label4.for = "readBook";
  label4.textContent = "Read?";

  input4.type = "checkbox";
  input4.name = "readBook";
  input4.id = "readBook";

  submitButton.type = submitButton;
  submitButton.textContent = "Submit Book";
  submitButton.style.gridColumn = "1 / 3";
  submitButton.id = submitButton;

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(label4);
  form.appendChild(input4);
  form.appendChild(submitButton);

  bookContainer.appendChild(form);

  submitButton.addEventListener("click", () => {
    event.preventDefault();

    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("numPages").value;
    let readInput = document.getElementById("readBook").checked;

    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);

    addBookToLibrary(newBook);
    displayBooks();
  });
});
