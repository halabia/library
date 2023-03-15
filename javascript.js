let title = prompt("Enter the book title")
let author = prompt("Enter the book author")
let pages = parseInt(prompt("Enter the book pages"))
let read = prompt("Have you read the book")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function () {
    return "Book title:\n" + title + "\nBook author:\n" + author + "\nBook pages:\n" + pages + "\nHave you read it:\n" + read
}
const hobbit = new Book("hobbit", "jk", "24", "yes")
let myLibrary = [hobbit];
//   myLibrary.push(hobbit);


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    var toAdd = document.createDocumentFragment();

    for (let i = 0; i < myLibrary.length; i++) {
        // const div = document.createElement('div');   
        var newDiv = document.createElement('p');
        newDiv.id = 'r' + i;
        newDiv.className = 'ansbox';
        newDiv.textContent = myLibrary[i].info()
        toAdd.appendChild(newDiv);

        // let container = document.querySelector('#container');

        // let p = document.createElement('p');
        // p.style.cssText = 'color: white; background: black;'; 
        // p.textContent = myLibrary[i].info()
        // container.appendChild(p);
        // // container.setAttribute('style', 'color: blue; background: white;'); 
        // console.log(myLibrary[i])
        // // console.log(newBook.info())
    }
    //   document.appendChild(toAdd);
    document.getElementById('container').appendChild(toAdd);
}

addBookToLibrary(title, author, pages, read)


