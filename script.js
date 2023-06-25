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
  let label1 = document.createElement("label");
  let input2 = document.createElement("input");
  let label2 = document.createElement("label");
  let input3 = document.createElement("input");
  let label3 = document.createElement("label");
  let input4 = document.createElement("input");
  let label4 = document.createElement("label");
  let submitButton = document.createElement("button");

  label1.for = "title";
  label1.textContent = "Enter title:";

  input1.type = "text";
  input1.name = "title";
  input1.id = "title";
  input1.placeholder = "Title";

  label2.for = "author";
  label2.textContent = "Enter author:";

  input2.type = "text";
  input2.name = "author";
  input2.id = "author";
  input2.placeholder = "Author";

  label3.for = "numPages";
  label3.textContent = "Enter number of pages:";

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

  container.appendChild(form);

  submitButton.addEventListener("click", () => {
    event.preventDefault();

    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("numPages").value;
    let readInput = document.getElementById("readBook").checked;

    let book = new Book(titleInput, authorInput, pagesInput, readInput);
    let tr = document.createElement("tr");
    for (let prop in book) {
      let td = document.createElement("td");
      td.textContent = book[prop];
      tr.appendChild(td);
    }
    library.appendChild(tr);

    container.removeChild(form);
  });
});
