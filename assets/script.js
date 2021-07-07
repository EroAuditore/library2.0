/* eslint no-use-before-define:["error",{"functions":false}] */

class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this.id = 0;
  }

  addBook(book) {
    this.id += 1;
    book.id = this.id;
    this.library.push(book);
  }

  removeBook(id) {
    this.library = this.library.filter((book) => book.id !== id);
  }

  saveLibrary() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }
}

const myLibrary = new Library();

// eslint-disable-next-line no-unused-vars
function addBook() {
  const book = {};
  book.author = document.getElementById('Author').value;
  book.title = document.getElementById('Title').value;
  myLibrary.addBook(book);
  displayBooks();
  SaveLibrary();
}

function removeBook(id) {
  myLibrary.removeBook(id);
  displayBooks();
  SaveLibrary();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';
  myLibrary.library.map((book) => {
    const divBook = document.createElement('div');
    divBook.classList.add('list-group-item');
    divBook.classList.add('list-group-item-action');

    const h2 = document.createElement('h4');
    h2.innerHTML = 'Author: ';
    const bookName = document.createElement('h4');
    bookName.innerHTML = 'Title: ';
    const p = document.createElement('p'); // Author
    p.innerHTML = book.author;
    const p2 = document.createElement('p'); // Book
    p2.innerHTML = book.title;
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Remove';
    btn.classList.add('btn');
    btn.classList.add('btn-danger');
    btn.addEventListener('click', () => {
      removeBook(book.id);
    });
    divBook.appendChild(h2);
    divBook.appendChild(p);
    divBook.appendChild(bookName);
    divBook.appendChild(p2);
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