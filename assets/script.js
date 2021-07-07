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
    const divBtn = document.createElement('div');
    const divBook = document.createElement('div');

    libraryDiv.classList.add('list-group-item');
    libraryDiv.classList.add('list-group-item-action');
    libraryDiv.classList.add('row');
    libraryDiv.classList.add('d-flex');
    libraryDiv.classList.add('justify-content-between');
    
    divBtn.classList.add('flex-row-reverse');
    divBook.classList.add('d-flex');
    
    const bookName = document.createElement('h4');
    bookName.innerHTML = `Title: ${book.title}`;
    const h2 = document.createElement('h4');
    h2.innerHTML = `Author: ${book.author}`;
    const p = document.createElement('p'); // Author
    const p2 = document.createElement('p'); // Book
    h2.classList.add('mx-3');
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
    divBtn.appendChild(btn);
    libraryDiv.appendChild(divBook);
    libraryDiv.appendChild(divBtn);
    return book;
  });
}

window.onload = function () {
  displayBooks();
};

function SaveLibrary() {
  myLibrary.saveLibrary();
}