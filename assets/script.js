/* eslint no-use-before-define:["error",{"functions":false}] */

class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
  }

  addBook(book) {
    this.library.push(book);
  }

  removeBook(title) {
    this.library = this.library.filter((book) => book.title !== title);
  }

  saveLibrary() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }
}

let myLibrary = new Library();

// eslint-disable-next-line no-unused-vars

function addBook() {
  const book = {};
  book.author = document.getElementById('Author').value;
  book.title = document.getElementById('Title').value;
  myLibrary.addBook(book);
  displayBooks();
  SaveLibrary();
}

function removeBook(title) {
  myLibrary.removeBook(title);
  displayBooks();
  SaveLibrary();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';
  myLibrary.library.map((book) => {
    const divBook = document.createElement('div');
    const p = document.createElement('p'); // Author
    p.innerHTML = book.author;
    const p2 = document.createElement('p'); // Book
    p2.innerHTML = book.title;
    const hr = document.createElement('hr');
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Remove';
    btn.addEventListener('click', () => {
     removeBook(book.title);
    });
    divBook.appendChild(p);
    divBook.appendChild(p2);
    divBook.appendChild(hr);
    divBook.appendChild(btn);
    libraryDiv.appendChild(divBook);
    return book;
  });
}

window.onload = function () {
    displayBooks();
};

function SaveLibrary() {
  myLibrary.saveLibrary();
}