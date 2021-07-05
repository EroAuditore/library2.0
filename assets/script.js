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


removeBook(book);

console.log(library);