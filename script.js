class Book {
    constructor(title, author, pages,) {
     this.title = title.trim();
     this.author = author.trim();
     this.pages = pages;
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
     this.books = this.books.filter(book => book.id !== id);
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

const newBtn = document.querySelector(".new-button");
const myLibrary = new Library();

newBtn.addEventListener("click", () => {
    const form = document.querySelector("#book-form");
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value; 
    if (!title || !author || !pages) {
        document.querySelector(".error-message").textContent = "Please insert valid value! (ಥ﹏ಥ)";        
        setTimeout (() => {
            document.querySelector(".error-message").textContent = "";    
        },500); 
    } else {  
        const newBook = new Book(title, author, pages);
        console.log(newBook);
        myLibrary.addBook(newBook);
        renderBook(newBook);
        form.reset();
    }
});

function renderBook (book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(`book`);
    bookDiv.setAttribute("book-id", book.id);
    bookDiv.innerHTML = `
            <div class="book-content">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Pages:</strong> ${book.pages}</p>
                    <div class="read-status not-read">${book.read ? "(๑˃ᴗ˂)ﻭ Read" : "(｡•́‿•̀｡) Not Read"}</div>
                </div>
                <div class="button-section">
                    <button class="status-button">Toggle Status</button>
                    <button class="remove-button">Remove</button>
                </div>
            </div>
  `;

   const libSection = document.querySelector("#library-section");
   libSection.appendChild(bookDiv);

   const removeBtn = bookDiv.querySelector(".remove-button");
    removeBtn.addEventListener("click", () => {
        myLibrary.removeBook(book.id);  
        bookDiv.remove();         
        console.log("Library after removal:", myLibrary.books);    
    });
}
