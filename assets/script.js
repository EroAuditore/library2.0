//Library Script

let library = [];
let book = {};
let book1 = {};

const addBook = (book) => {
    library.push(book);
}
const removeBook = (bookRemove) => {
    library = library.filter((book) => book.title !== bookRemove.title);
}


book.author = "JK Robin";
book.title = "Harry Potter";
addBook(book);

book1.author = "Robin";
book1.title = "Harry";
addBook(book1);




libraryDiv = document.getElementById('library');

// Book 1
divBook = document.createElement('div')
p = document.createElement('p') //Author
p.innerHTML = book.author;
p2= document.createElement('p') //Book
p2.innerHTML = book.title;
hr = document.createElement('hr')
btn = document.createElement('BUTTON');
btn.innerHTML = "Remove"

divBook.appendChild(p);
divBook.appendChild(p2);
divBook.appendChild(hr);
divBook.appendChild(btn);


libraryDiv.appendChild(divBook);


// Book 2
divBook = document.createElement('div')
p = document.createElement('p') //Author
p.innerHTML = book1.author;
p2= document.createElement('p') //Book
p2.innerHTML = book1.title;
hr = document.createElement('hr')
btn = document.createElement('BUTTON');
btn.innerHTML = "Remove"

divBook.appendChild(p);
divBook.appendChild(p2);
divBook.appendChild(hr);
divBook.appendChild(btn);

libraryDiv.appendChild(divBook);



console.log(libraryDiv);