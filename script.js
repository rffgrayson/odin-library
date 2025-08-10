const myLibrary = [];

function Book (title) {
    this.title = title;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title) {
    const book = new Book (title);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('Naruto');
addBookToLibrary('HarryPotter');

const bookBox = document.querySelector("#library-section");
   
function displayArray () {
     for (let i = 0; i < myLibrary.length; i++) {
        bookBox.innerHTML +=  `
            <div class="book">
                <h3>${myLibrary[i].title}</h3>
                <p>ID: ${myLibrary[i].id}</p>
            </div>
        `
        ;   
    };
}

displayArray();

const newBtn = document.querySelector(".new-button");
const inputValue = document.querySelector("#title");
const errorMessage = document.querySelector("#error-message");


newBtn.addEventListener ("click", (e)=> {
    e.preventDefault();
    console.log("Test");
        if (inputValue.value.trim() === "") {
            errorMessage.textContent = "Please insert a book title";
            inputValue.focus();
        } else {
            errorMessage.textContent = "";
            const newBook = addBookToLibrary(inputValue.value);
            console.log (myLibrary);
            console.log (newBook);    
            bookBox.innerHTML +=  
            `
            <div class="book">
                <h3>${newBook.title}</h3>
                <p>ID: ${newBook.id}</p>
            </div>
            `
        ;
        inputValue.value = '';
        }
}
);