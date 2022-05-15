// Book Class : represents a book

class Book{
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

// UI class : Handles UI changes

class UI{
    static displayBooks(){
        const storedBooks = Store.getBooks();

        const books = storedBooks;

        books.forEach((book) => UI.addBook(book));
    }

    static addBook(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>

        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000)
    }

    static clearFields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

}

// Store Class : Manages the storage i.e using browser storage

class Store{

    static getBooks(){
        let books;

        if(localStorage.getItem('books') === null){books = []}
        else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books;
    }

    static addBook(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach( (book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }

}

// Event : Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

        e.preventDefault();
        // get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // validate
        if(title === "" || author === "" || isbn === ""){
            UI.showAlert("Please fill all the blanks","danger")
        }else{

            const book = new Book(title, author, isbn);
 
            UI.addBook(book);

            Store.addBook(book);

            UI.showAlert("book added", "success")

            UI.clearFields();

        }
 
})

// Event : Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.innerHTML)
    UI.showAlert("book removed", "success")
})
