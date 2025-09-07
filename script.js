class Book {

    static capitalize(str) {
        return str.trim()
        .toLowerCase()
        .split(" ")
        .map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : "")
        .join(" ");
    }

    constructor(title, author, pages, read = false) {
     this.title = Book.capitalize(title);
     this.author = Book.capitalize(author);
     this.pages = pages;
     this.read = read;
     this.id = crypto.randomUUID();
    }

    get displayStatus () {
     return this.read? "(๑˃ᴗ˂)ﻭ Read" : "(｡•́‿•̀｡) Not Read";
    }

    get classStatus () {
     return this.read? "read" : "not-read";
    }

    toggleRead () {
     this.read = !this.read;
    }


}

class Library {
    constructor() {
     this.books = [];
    }

    addBook (book) {
     this.books.push(book);
    }

    removeBook (id) {
     this.books = this.books.filter(book => book.id !== id);
    }
}

const myLibrary = new Library();

// DOM 

function createBookElement (book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(`book`);
    bookDiv.setAttribute("book-id", book.id);
    bookDiv.innerHTML = `
            <div class="book-content">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Pages:</strong> ${book.pages}</p>
                    <div class="read-status ${book.classStatus}">${book.displayStatus}</div>
                </div>
                <div class="button-section">
                    <button class="status-button">Toggle Status</button>
                    <button class="remove-button">Remove</button>
                </div>
            </div>
  `;
  return bookDiv;
}

function addBookToLibrarySection (bookDiv) {
    const libSection = document.querySelector("#library-section");
    libSection.appendChild(bookDiv);
}

function removeBookFromDOM (bookDiv) { 
        bookDiv.remove();         
}

function changeStatusDisplay (bookDiv,isRead) {
    const statusDiv = bookDiv.querySelector(".read-status"); 
    console.log (statusDiv);
        if (isRead) {
            statusDiv.classList.replace("not-read", "read");
            statusDiv.textContent = "(๑˃ᴗ˂)ﻭ Read";      
        }   else {
            statusDiv.classList.replace("read", "not-read");
            statusDiv.textContent = "(｡•́‿•̀｡) Not Read";      
        }
}

// event listener

const newBtn = document.querySelector(".new-button");
newBtn.addEventListener("click", () => {
    const form = document.querySelector("#book-form");
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value; 
    const status = document.querySelector("#status").checked;
    if (!title || !author || !pages) {
        document.querySelector(".error-message").textContent = "Please insert valid value! (ಥ﹏ಥ)";        
        setTimeout (() => {
            document.querySelector(".error-message").textContent = "";    
        },500); 
    } else {  
        const newBook = new Book(title, author, pages, status);
        myLibrary.addBook(newBook);
        const newBookDiv = createBookElement(newBook);
        addBookToLibrarySection(newBookDiv);
        bookBtnInstance(newBookDiv, newBook);
        form.reset();
    }
});


function bookBtnInstance (bookDiv, book) {
    const removeBtn = bookDiv.querySelector(".remove-button");
    removeBtn.addEventListener("click", () => {
    myLibrary.removeBook(book.id);
    removeBookFromDOM (bookDiv);
});

    const statusBtn = bookDiv.querySelector(".status-button");
    statusBtn.addEventListener("click", () => {
    book.toggleRead();
    changeStatusDisplay(bookDiv,book.read);
    });
}

