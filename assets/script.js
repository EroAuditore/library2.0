/* eslint no-use-before-define:["error",{"functions":false}] */

class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this._id= 0;
  }

  addBook(book) {
    this._id +=1;
    book._id = this._id
    this.library.push(book);
  }

  removeBook(_id) {
    this.library = this.library.filter((book) => book._id !== _id);
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

function removeBook(_id) {
  myLibrary.removeBook(_id);
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
      removeBook(book._id);
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