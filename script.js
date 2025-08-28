class Book {
    constructor(title) {
     this.title = title.trim();
     this.author = author.trim();
     this.read = false;
     this.id = crypto.randomUUID();
    }

    get displayStatus () {
     return this.read? "✅ Read" : "📖 Unread";
    }

    toggleRead () {
     this.read = !this.read;
    }

    markasRead () {
        this.read = true;
        console.log(`marked ${this.title} as read`);
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
     this.books.filter(book => book.id !== id);
    }

    findBookbyTitle (title) {
    this.books.find(book => book.title === title);
    }
    
    get stats () {
        return {
            total: this.books.length,
            read: this.books.filter(book => book.read).length,
            unread: this.books.filter(book => !book.read).length,
        };
    }
}

class LibraryUI {
    constructor(libraryInstance) {
     this.library = libraryInstance;
     this.titleBar = document.querySelector("#title");
     this.addBtn = document.querySelector(".new-button");
     this.errorMsg = document.querySelector("#error-message");
     this.libSection = document.querySelector("#library-section");

     this.initializeEventListener();
    }

    displayBook (book) {
        this.libSection.innerHTML +=  `
            <div class="book" data-book-id = "${book.id}">
             <div class="book-content">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>ID: ${book.id}</p>
                    <div class="read-status">${book.read? "既読 Read" : "未読 - Unread" }</div>
                </div>
                <div class="button-section">
                    <button class="status-button"data-book-id="${book.id}">Change Status</button>
                    <button class="remove-button" data-book-id="${book.id}">Remove</button>
                </div>
             </div>
            </div>
        `;
    }


}



        // this.status = document.querySelector(`[data-book-id="${bookId}"] .read-status`);
        // this.statusBtn = document.querySelector(`[data-book-id="${bookId}"] .status-button`);
        // this.removeBtn = document.querySelector(`[data-book-id="${bookId}"] .remove-button`);
// class LibraryUI {
//     constructor () {
//         this.Library = this.boo

//     }


//     changeStatus() {

//     }
// }

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

   
// function displayBook 
//     }

// function originalDisplay () {
//     for ( let i=0; i < myLibrary.length; i++) {
//         book = myLibrary[i];
//         console.log(book);
//         displayBook (book);
//     } 
// }





// newBtn.addEventListener ("click", (e)=> {
//     e.preventDefault();
//         if (inputValue.value.trim() === "") {
//             errorMessage.textContent = "Please insert a book title";
//             inputValue.focus();
//         } else {
//             errorMessage.textContent = "";
//             const newBook = addBookToLibrary(inputValue.value);
//             displayBook(newBook);
//         ;
//         inputValue.value = '';
//         }
// }
// );

// bookBox.addEventListener("click",(e)=> {
//     const bookId = e.target.getAttribute("data-book-id");
//         if (e.target.classList.contains("remove-button")) {
//             removeBook(bookId);
//         } if (e.target.classList.contains("status-button")) {
//             console.log("first touch");
//             changeStatus(bookId);
//         }
// })



// changeStatus (bookId) {
//     const 
//     if (targetBook) {
//         targetBook.statusChange();
//         const 
//         statusDiv.textContent = targetBook.read? "Read" : "Not Read";
//          if (targetBook.read) {
//             statusDiv.classList.remove("not-read");
//             statusDiv.classList.toggle("read");
//          } else {
//             statusDiv.classList.remove("read");
//             statusDiv.classList.toggle("not-read");}
//     }
//     }
