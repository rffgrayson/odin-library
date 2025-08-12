const myLibrary = [];

function Book (title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.read = false;
}

Book.prototype.statusChange = function () {
    this.read = !this.read;
};

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
            <div class="book" data-book-id = "${book.id}">
               <div class="info-section">
                  <h3>${book.title}</h3>
                  <p>ID: ${book.id}</p>
               </div>
               <div class="button-section">
                <button class="status-button" data-book-id="${book.id}">Change Status:</button>
                <p class="read-status">${book.read? "Read" : "Not Yet" }</p>
                <button class="remove-button" data-book-id="${book.id}">Remove</button>     
               </div>   
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
    const bookId = e.target.getAttribute("data-book-id");
        if (e.target.classList.contains("remove-button")) {
            removeBook(bookId);
        } if (e.target.classList.contains("status-button")) {
            console.log("first touch");
            changeStatus(bookId);
        }
})


function removeBook (bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) 
        {
        myLibrary.splice(bookIndex, 1);
        }
    const bookDiv = document.querySelector(`[data-book-id="${bookId}"]`);
    bookDiv.remove();
};


function changeStatus (bookId) {
    console.log ("touch");
    const targetBook = myLibrary.find(book => book.id === bookId);
    console.log (targetBook);
    console.log("try");
    if (targetBook) {
        targetBook.statusChange();
        const statusDiv = document.querySelector(`[data-book-id="${bookId}"] .read-status`);
        console.log (statusDiv);
        statusDiv.textContent = targetBook.read? "Read" : "Not Yet";
    }


}
