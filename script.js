const myLibrary = [];

function Book (title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.remove = false;
}

function addBookToLibrary (title) {
    const book = new Book (title);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('Naruto');
addBookToLibrary('HarryPotter');

const bookBox = document.querySelector("#library-section");
   
function displayBook (book) {
        bookBox.innerHTML +=  `
            <div class="book">
                <h3>${book.title}</h3>
                <p>ID: ${book.id}</p>
                 <button class="remove-button" data-book-id="${book.id}">Remove</button>
                 </div>
        `;
    }

function originalDisplay () {
    for ( let i=0; i < myLibrary.length; i++) {
        book = myLibrary[i];
        console.log(book);
        displayBook (book);
    } 
}

originalDisplay();

const newBtn = document.querySelector(".new-button");
const inputValue = document.querySelector("#title");
const errorMessage = document.querySelector("#error-message");


newBtn.addEventListener ("click", (e)=> {
    e.preventDefault();
        if (inputValue.value.trim() === "") {
            errorMessage.textContent = "Please insert a book title";
            inputValue.focus();
        } else {
            errorMessage.textContent = "";
            const newBook = addBookToLibrary(inputValue.value);
            displayBook(newBook);
        ;
        inputValue.value = '';
        }
}
);

bookBox.addEventListener("click",(e)=> {
    if (e.target.classList.contains("remove-button")) {
        console.log (e);
        console.log (e.target);
        const removeBtn = e.target.getAttribute("data-book-id");
        console.log (removeBtn);
    }
})