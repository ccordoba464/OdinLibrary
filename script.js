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
    if (value.length > 20 || value.length < 0) {
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value.length > 20 || value.length < 0) {
      return;
    }
    this._author = value;
  }

  get numPages() {
    return this._numPages;
  }

  set numPages(value) {
    if (value.length > 20 || value.length < 0) {
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

  toggleReadStatus() {
    this._readBook = !this._readBook;
  }
}

// function Book(title, author, numPages, readBook) {
//   this.title = title;
//   this.author = author;
//   this.numPages = numPages;
//   this.readBook = readBook;
//   this.index;
// }

// Book.prototype.toggleReadStatus = function () {
//   this.readBook = !this.readBook;
// };

class library {
  constructor() {
    this.myLibrary = [];
    this.bookContainer = document.getElementById("book-container");
    this.addButton = document.getElementById("addButton");
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

      let desiredProps = ["title", "author", "numPages", "readBook"];

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
        removeBook(this.myLibrary[i].index);
      });

      let readButton = document.createElement("button");
      readButton.textContent = "Read";
      aBook.appendChild(readButton);

      readButton.addEventListener("click", () => {
        this.myLibrary[i].readBook = !this.myLibrary[i].readBook;
        displayBooks();
      });

      this.bookContainer.appendChild(aBook);
    }
  }

  removeBook(bookIndex) {
    console.log(bookIndex);
    this.myLibrary.splice(bookIndex, 1);
    displayBooks();
  }

  addForm() {
    this.addButton.addEventListener("click", () => {
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

      this.bookContainer.appendChild(form);

      submitButton.addEventListener("click", () => {
        event.preventDefault();

        let titleInput = document.getElementById("title").value;
        let authorInput = document.getElementById("author").value;
        let pagesInput = document.getElementById("numPages").value;
        let readInput = document.getElementById("readBook").checked;

        let newBook = new Book(titleInput, authorInput, pagesInput, readInput);

        addBookToLibrary(newBook);

        console.log(newBook.index);
        displayBooks();
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

// addBookToLibrary(firstBook);
// addBookToLibrary(secondBook);
// addBookToLibrary(thirdBook);
// displayBooks();

// addBookToLibrary(book) {
//   myLibrary.push(book);
// }

// function displayBooks() {
//   while (bookContainer.firstChild) {
//     bookContainer.removeChild(bookContainer.firstChild);
//   }

//   for (let i = 0; i < myLibrary.length; i++) {
//     myLibrary[i].index = i;
//     let aBook = document.createElement("div");
//     aBook.classList.add("book");

//     let desiredProps = ["title", "author", "numPages", "readBook"];

//     for (let prop in myLibrary[i]) {
//       if (desiredProps.includes(prop)) {
//         let aProp = document.createElement("div");
//         aProp.classList.add("prop");
//         aProp.textContent = myLibrary[i][prop];
//         aBook.appendChild(aProp);
//       }
//     }

//     let removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     aBook.appendChild(removeButton);

//     removeButton.addEventListener("click", () => {
//       removeBook(myLibrary[i].index);
//     });

//     let readButton = document.createElement("button");
//     readButton.textContent = "Read";
//     aBook.appendChild(readButton);

//     readButton.addEventListener("click", () => {
//       myLibrary[i].readBook = !myLibrary[i].readBook;
//       displayBooks();
//     });

//     bookContainer.appendChild(aBook);
//   }
// }

// function removeBook(bookIndex) {
//   console.log(bookIndex);
//   myLibrary.splice(bookIndex, 1);
//   displayBooks();
// }

// addButton.addEventListener("click", () => {
//   let form = document.createElement("form");
//   let input1 = document.createElement("input");
//   let label1 = document.createElement("label");
//   let input2 = document.createElement("input");
//   let label2 = document.createElement("label");
//   let input3 = document.createElement("input");
//   let label3 = document.createElement("label");
//   let input4 = document.createElement("input");
//   let label4 = document.createElement("label");
//   let submitButton = document.createElement("button");

//   label1.for = "title";
//   label1.textContent = "Title:";

//   input1.type = "text";
//   input1.name = "title";
//   input1.id = "title";
//   input1.placeholder = "Title";

//   label2.for = "author";
//   label2.textContent = "Author:";

//   input2.type = "text";
//   input2.name = "author";
//   input2.id = "author";
//   input2.placeholder = "Author";

//   label3.for = "numPages";
//   label3.textContent = "# of pages:";

//   input3.type = "text";
//   input3.name = "numPages";
//   input3.id = "numPages";
//   input3.placeholder = "Number of Pages";

//   label4.for = "readBook";
//   label4.textContent = "Read?";

//   input4.type = "checkbox";
//   input4.name = "readBook";
//   input4.id = "readBook";

//   submitButton.type = submitButton;
//   submitButton.textContent = "Submit Book";
//   submitButton.style.gridColumn = "1 / 3";
//   submitButton.id = submitButton;

//   form.appendChild(label1);
//   form.appendChild(input1);
//   form.appendChild(label2);
//   form.appendChild(input2);
//   form.appendChild(label3);
//   form.appendChild(input3);
//   form.appendChild(label4);
//   form.appendChild(input4);
//   form.appendChild(submitButton);

//   bookContainer.appendChild(form);

//   submitButton.addEventListener("click", () => {
//     event.preventDefault();

//     let titleInput = document.getElementById("title").value;
//     let authorInput = document.getElementById("author").value;
//     let pagesInput = document.getElementById("numPages").value;
//     let readInput = document.getElementById("readBook").checked;

//     let newBook = new Book(titleInput, authorInput, pagesInput, readInput);

//     addBookToLibrary(newBook);

//     console.log(newBook.index);
//     displayBooks();
//   });
// });
