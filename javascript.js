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

// book input fields for overlay
var titleInput = document.createElement("INPUT");
titleInput.setAttribute("type", "text");

var authorInput = document.createElement("INPUT");
authorInput.setAttribute("type", "text");

var pagesInput = document.createElement("INPUT");
pagesInput.setAttribute("type", "text");

var readInput = document.createElement("INPUT");
readInput.setAttribute("type", "text");



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
    overlay.append(titleInput)
    closeButton.addEventListener('click', () => {
        document.getElementById("overlay").style.display = "none";
        let x = `${titleInput.value}`
        console.log(x)
    })

    // user prompts for book info
    let title = prompt("What's the name of the book?")
    let author = prompt("What's the name of the author?")
    let pages = parseInt(prompt("How many pages are in the book?"))
    let read = prompt("Have you read the book? Please enter yes or no.")

    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    createBook(count)
    count++
});