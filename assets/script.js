//Library Script

let library = [];


const addBook = () => {
    let book = {};
    book.author = document.getElementById('Author').value;;
    book.title = document.getElementById('Title').value;
    library.push(book);
    displayBooks();
}

const removeBook = (title) => {
    console.log(title);
    library = library.filter((book) => book.title !== title);
    displayBooks();
}

const displayBooks= ()=>{

    libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = "";
    library.map((book)=>{
        divBook = document.createElement('div')
        p = document.createElement('p') //Author
        p.innerHTML = book.author;
        p2= document.createElement('p') //Book
        p2.innerHTML = book.title;
        hr = document.createElement('hr')
        btn = document.createElement('BUTTON');
        btn.innerHTML = "Remove";
        btn.addEventListener('click', function() {
            removeBook(book.title);
        })
        divBook.appendChild(p);
        divBook.appendChild(p2);
        divBook.appendChild(hr);
        divBook.appendChild(btn);
        libraryDiv.appendChild(divBook);
    })

};
