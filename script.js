const myLibrary = [];



class Book {
    constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.read = false;
    }

    statusChange () {
    this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.book = [];
    }

    addBook (title) {
    const book = new Book (title);
    myLibrary.push(book);
    return book;
    }

    removeBook (bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
     this.book.splice(bookIndex, 1);
     }
    }
    
}


// class LibraryUI {
//     constructor () {
//      this.bookBox = document.querySelector("#library-section");
//      this.newBtn = document.querySelector(".new-button");
//      this.inputValue = document.querySelector("#title");
//      this.errorMessage = document.querySelector("#error-message");
//      const bookDiv = document.querySelector(`[data-book-id="${bookId}"]`);
//      bookDiv.remove();
//     }
// }

function addBookToLibrary (title) {
    
    
}

addBookToLibrary('Naruto');
addBookToLibrary('HarryPotter');

   
function displayBook (book) {
        bookBox.innerHTML +=  `
            <div class="book" data-book-id = "${book.id}">
               <div class="info-section">
                  <h3>${book.title}</h3>
                  <p>ID: ${book.id}</p>
               </div>
               <div class="button-section">
                <button class="status-button" data-book-id="${book.id}">Change Status:</button>
                <div class="read-status">${book.read? "Read" : "Not Read" }</div>
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

const 



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



changeStatus (bookId) {
    const targetBook = myLibrary.find(book => book.id === bookId);
    if (targetBook) {
        targetBook.statusChange();
        const statusDiv = document.querySelector(`[data-book-id="${bookId}"] .read-status`);
        statusDiv.textContent = targetBook.read? "Read" : "Not Read";
         if (targetBook.read) {
            statusDiv.classList.remove("not-read");
            statusDiv.classList.toggle("read");
         } else {
            statusDiv.classList.remove("read");
            statusDiv.classList.toggle("not-read");}
    }
    }