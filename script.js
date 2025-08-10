const myLibrary = [];

function Book (title, id) {
    this.title = title;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title) {
    const book = new Book (title);
    myLibrary.push(book);
}

addBookToLibrary('Naruto');
addBookToLibrary('HarryPotter');

console.log (myLibrary);