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

function displayArray () {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    };
}

displayArray();