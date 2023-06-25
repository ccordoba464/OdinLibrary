let myLibrary = [];

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
  let library = document.getElementById("library");

  for (let book of myLibrary) {
    let tr = document.createElement("tr");

    for (let prop in book) {
      let td = document.createElement("td");
      td.textContent = book[prop];
      tr.appendChild(td);
    }

    library.appendChild(tr);
  }
}

let firstBook = new Book("Music", "Rimbo", 23, true);
addBookToLibrary(firstBook);
addBookToLibrary(firstBook);
addBookToLibrary(firstBook);
displayBooks();

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  let container = document.querySelector(".container");
  let form = document.createElement("form");
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  let input3 = document.createElement("input");
  let input4 = document.createElement("input");

  input1.type = "text";
  input1.name = "title";
  input1.placeholder = "Title";

  input2.type = "text";
  input2.name = "author";
  input2.placeholder = "Author";

  input3.type = "number";
  input3.name = "numPages";
  input3.placeholder = "Number of Pages";

  input4.type = "checkbox";
  input4.name = "readBook";

  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(input4);

  container.appendChild(form);
});
