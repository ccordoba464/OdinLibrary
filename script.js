class Book {
  constructor(title, author, numPages, readBook) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readBook = readBook;
    this.index;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length > 20) {
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value.length > 20) {
      return;
    }
    this._author = value;
  }

  get numPages() {
    return this._numPages;
  }

  set numPages(value) {
    if (value < 1) {
      return;
    }
    this._numPages = value;
  }

  get readBook() {
    return this._readBook;
  }

  set readBook(value) {
    this._readBook = value;
  }
}

class library {
  constructor() {
    this.myLibrary = [];
    this.bookContainer = document.getElementById("book-container");
    this.addButton = document.getElementById("addButton");
    this.addForm();
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
  }

  displayBooks() {
    while (this.bookContainer.firstChild) {
      this.bookContainer.removeChild(this.bookContainer.firstChild);
    }

    for (let i = 0; i < this.myLibrary.length; i++) {
      this.myLibrary[i].index = i;
      let aBook = document.createElement("div");
      aBook.classList.add("book");

      let desiredProps = ["_title", "_author", "_numPages", "_readBook"];

      for (let prop in this.myLibrary[i]) {
        if (desiredProps.includes(prop)) {
          let aProp = document.createElement("div");
          aProp.classList.add("prop");
          aProp.textContent = this.myLibrary[i][prop];
          aBook.appendChild(aProp);
        }
      }

      let removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      aBook.appendChild(removeButton);

      removeButton.addEventListener("click", () => {
        this.removeBook(this.myLibrary[i].index);
      });

      let readButton = document.createElement("button");
      readButton.textContent = "Read";
      aBook.appendChild(readButton);

      readButton.addEventListener("click", () => {
        this.myLibrary[i].readBook = !this.myLibrary[i].readBook;
        this.displayBooks();
      });

      this.bookContainer.appendChild(aBook);
    }
  }

  removeBook(bookIndex) {
    console.log(bookIndex);
    this.myLibrary.splice(bookIndex, 1);
    this.displayBooks();
  }

  addForm() {
    this.addButton.addEventListener("click", () => {
      let form = document.createElement("form");

      let label1 = document.createElement("label");
      label1.for = "title";
      label1.textContent = "Title:";

      let input1 = document.createElement("input");
      input1.type = "text";
      input1.name = "title";
      input1.id = "title";
      input1.placeholder = "Title";
      input1.minLength = 1;

      let label2 = document.createElement("label");
      label2.for = "author";
      label2.textContent = "Author:";

      let input2 = document.createElement("input");
      input2.type = "text";
      input2.name = "author";
      input2.id = "author";
      input2.placeholder = "Author";
      input2.minLength = 1;

      let label3 = document.createElement("label");
      label3.for = "numPages";
      label3.textContent = "# of pages:";

      let input3 = document.createElement("input");
      input3.type = "text";
      input3.name = "numPages";
      input3.id = "numPages";
      input3.placeholder = "Number of Pages";
      input3.minLength = 1;

      let label4 = document.createElement("label");
      label4.for = "readBook";
      label4.textContent = "Read?";

      let input4 = document.createElement("input");
      input4.type = "checkbox";
      input4.name = "readBook";
      input4.id = "readBook";
      input4.min = 1;

      let submitButton = document.createElement("button");
      submitButton.type = submitButton;
      submitButton.textContent = "Submit Book";
      submitButton.style.gridColumn = "1 / 3";
      submitButton.id = submitButton;

      form.append(
        label1,
        input1,
        label2,
        input2,
        label3,
        input3,
        label4,
        input4,
        submitButton
      );

      this.bookContainer.appendChild(form);

      submitButton.addEventListener("click", () => {
        event.preventDefault();

        let titleInput = document.getElementById("title").value;
        let authorInput = document.getElementById("author").value;
        let pagesInput = document.getElementById("numPages").value;
        let readInput = document.getElementById("readBook").checked;

        let newBook = new Book(titleInput, authorInput, pagesInput, readInput);

        this.addBookToLibrary(newBook);

        console.log(newBook.index);
        this.displayBooks();
      });
    });
  }
}

const myLibrary = new library();

let firstBook = new Book("Music to my ears", "Rimbo", 23, true);
let secondBook = new Book("Music to my nose", "Rimbo", 23, true);
let thirdBook = new Book("Music to my eyes", "Rimbo", 23, true);

myLibrary.addBookToLibrary(firstBook);
myLibrary.addBookToLibrary(secondBook);
myLibrary.addBookToLibrary(thirdBook);
myLibrary.displayBooks();
