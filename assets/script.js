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
  document.getElementById('Author').value = '';
  document.getElementById('Title').value = '';
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
    const divListElm = document.createElement('div');
    const divBtn = document.createElement('div');
    const divBook = document.createElement('div');

    divListElm.classList.add('list-group-item');
    divListElm.classList.add('list-group-item-action');
    divListElm.classList.add('d-flex');
    divListElm.classList.add('justify-content-between');

    const bookText = document.createElement('h4');
    bookText.innerHTML = `"${book.title}" by ${book.author}`;
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'Remove';
    btn.classList.add('btn');
    btn.classList.add('btn-danger');

    btn.addEventListener('click', () => {
      removeBook(book.id);
    });

    divListElm.appendChild(divBook);
    divListElm.appendChild(divBtn);

    divBook.appendChild(bookText);
    divBtn.appendChild(btn);
    libraryDiv.appendChild(divListElm);

    return book;
  });
}

function setDateTime() {
  const currentDate = document.getElementById("currentDate");
  let DateTime = luxon.DateTime;
  currentDate.innerHTML = DateTime.now().toFormat("MMM dd yyyy, t");
}

window.onload = function () {
  displayBooks();
  setDateTime();
};

function SaveLibrary() {
  myLibrary.saveLibrary();
}

function displaySection(section) {
  switch(section){
    case"list":
        listSection = document.getElementById("listSection");
        listSection.classList.remove('d-none');
        formSection = document.getElementById("formSection");
        formSection.classList.add('d-none');
        contactSection = document.getElementById("contactSection");
        contactSection.classList.add('d-none');
        break;
    
        case"new":
        listSection = document.getElementById("listSection");
        listSection.classList.add('d-none');
        formSection = document.getElementById("formSection");
        formSection.classList.remove('d-none');
        contactSection = document.getElementById("contactSection");
        contactSection.classList.add('d-none');
        break;

        case"contact":
        listSection = document.getElementById("listSection");
        listSection.classList.add('d-none');
        formSection = document.getElementById("formSection");
        formSection.classList.add('d-none');
        contactSection = document.getElementById("contactSection");
        contactSection.classList.remove('d-none');
        break;
        
        default: break;
  }
}