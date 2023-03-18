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
    this.info = function() {
        return "Book title:\n" + title + "\nBook author:\n" + author + "\nBook pages:\n" + pages + "\nHave you read it:\n" + read
    }
}

// creates book item on screen
let createBook = (count) => {
        const content = document.createElement('div');
        content.classList.add("book-card")
        content.innerHTML = myLibrary[count].info()
        container.append(content)
        // console.log(content.innerHTML)
}

// triggers user prompt to enter book info everytime the button is clicked, adding items to library and increasing count
const newBookButton = document.querySelector('#newbie')
newBookButton.addEventListener('click', () => {
    let title = prompt("What's the name of the book?")
    let author = prompt("What's the name of the author?")
    let pages = parseInt(prompt("How many pages are in the book?"))
    let read = prompt("Have you read the book? Please enter yes or no.")

    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)

    createBook(count)
    count++
});