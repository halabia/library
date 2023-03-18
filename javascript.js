// set initial variables
const container = document.querySelector('#container');
var myLibrary = [];
var count = 0;

// book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return "Book title:\n" + title + "\nBook author:\n" + author + "\nBook pages:\n" + pages + "\nHave you read it:\n" + read
    }
}

const closeButton = document.createElement("BUTTON");
const submitButton = document.createElement("BUTTON");

// book input fields for overlay
var titleInput = document.createElement("INPUT");
titleInput.classList.add("input-field")
titleInput.setAttribute("type", "text");
titleInput.setAttribute("placeholder", "What's the title of the book?");

var authorInput = document.createElement("INPUT");
authorInput.classList.add("input-field")
authorInput.setAttribute("type", "text");
authorInput.setAttribute("placeholder", "What's the author of the book?");

var pagesInput = document.createElement("INPUT");
pagesInput.classList.add("input-field")
pagesInput.setAttribute("type", "number");
pagesInput.setAttribute("placeholder", "How many pages does it have?");

var readInput = document.createElement("INPUT");
readInput.classList.add("input-field")
readInput.setAttribute("type", "text");
readInput.setAttribute("placeholder", "Have you read this book?");

// create book item on screen
let createBook = (count) => {
    const content = document.createElement('div');
    content.classList.add("book-card")
    content.innerHTML = myLibrary[count].info()

    // delete button on each book
    var deleteButton = document.createElement("BUTTON");
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = "Delete"
    content.append(deleteButton)

    // delete book when button is clicked
    deleteButton.addEventListener('click', () => {
        content.remove();
    })

    container.append(content)
}

// triggers user prompt to enter book info everytime the button is clicked, adding items to library and increasing count
const newBookButton = document.querySelector('#newbie')
newBookButton.addEventListener('click', () => {

    // creates modal overlay for form inputs
    overlay = document.getElementById("overlay")
    overlay.style.display = "block";

    // button to close overlay
    closeButton.classList.add("close-button")
    closeButton.innerHTML = "CLOSE"
    overlay.append(closeButton)

    // user prompts for book info
    overlay.append(titleInput)
    overlay.append(authorInput)
    overlay.append(pagesInput)
    overlay.append(readInput)


    closeButton.addEventListener('click', () => {
        document.getElementById("overlay").style.display = "none";
    })

    overlay.append(submitButton)
    submitButton.innerHTML = "SUBMIT"
    submitButton.addEventListener('click', () => {
        let title = `${titleInput.value}`
        let author = `${authorInput.value}`
        let pages = `${pagesInput.value}`
        let read = `${readInput.value}`
        const newBook = new Book(title, author, pages, read)
        myLibrary.push(newBook)
        createBook(count)
        count++
    })

});