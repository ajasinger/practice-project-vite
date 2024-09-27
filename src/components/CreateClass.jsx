export default function CreateClass() {

    class Button {
        constructor() {
            this.clicked = false;
        }

        handleClick() {
            this.clicked = true;
        }

        render() {
            return this.clicked? "Clicked" : "Click me"
        }
    }

    const myButton = new Button();

    class Book {
        constructor(title, author, isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            this.isAvailable = true;
        }
    }

    class Library {
        constructor() {
            this.books = [];
        }

        addBook(book) {
            if(book instanceof Book) {
                this.books.push(book);
                console.log(`${book.title} added`)
            } else {
                console.log('not a Book')
            }
        }

        removeBook(isbn) {
            const index = this.books.findIndex(book => book.isbn === isbn)
            if(index !== -1) {
                this.books.splice(index, 1);
            } else {
                console.log('book not found')
            }
        }

        searchByTitle(title) {
            return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        }

        listAvailableBooks() {
            return this.books.filter(book => book.isAvailable).map(book => book.title);
        }

        displayBooks() {
            this.books.forEach(book => {
                console.log(`title: ${book.title}`)
            })
        }
    }



    return(
        <div>
            <h1>I made a class</h1>
        </div>
    )
}