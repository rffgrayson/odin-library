const myLibrary = [];

function Book (title) {
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
const bookBox = document.querySelector("#library-section");

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
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

newBtn.addEventListener ("click", (e)=> {
    e.preventDefault();
    console.log("Test");
        if (inputValue.value === "") {
            console.log("error");
        } else {
            console.log(`${inputValue.value}`);
        }
}
);