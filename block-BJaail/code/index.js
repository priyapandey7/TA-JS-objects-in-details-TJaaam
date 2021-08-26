let form = document.querySelector(".form");
let bookList = document.querySelector(".bookList");

const nameElm = document.getElementById("author");
const titleElm = document.getElementById("title");
const isbnElm = document.getElementById("isbn");
const bookImgElm = document.getElementById("book-img");

class BookList {
  constructor(root, list = []) {
    this.books = list;
    this.root = root;
  }
  add(title, author, bookImg, isbn) {
    let book = new Book(title, author, bookImg, isbn);
    this.books.push(book);
    this.createUI();
    return this.books.length;
  }
  handleDelete(id) {
    let index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
    this.createUI();
    return this.books.length;
  }
  createUI() {
    this.root.innerHTML = "";
    this.books.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector("span").addEventListener(
        "click",
        this.handleDelete.bind(this, book.id)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(title, author, bookImg, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.bookImg = bookImg;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
    new BookList(bookList, library.books).createUI();
  }
  createUI() {
    let li = document.createElement("li");
    let deleteElm = document.createElement("span");
    deleteElm.innerText = "❌";
    let bookCover = document.createElement("img");
    bookCover.src = this.bookImg;
    let coverContainer = document.createElement("div");
    coverContainer.append(bookCover);
    let title = document.createElement("h3");
    title.innerText = this.title;
    let author = document.createElement("p");
    author.innerText = this.author;
    let isbn = document.createElement("p");
    isbn.innerText = `ISBN: ${this.isbn}`;
    let button = document.createElement("button");
    button.addEventListener("click", this.toggleIsRead.bind(this));
    button.innerText = this.isRead ? "Read Already" : "Yet to Read";
    button.style.background = this.isRead ? "green" : "red";

    li.append(deleteElm, coverContainer, title, author, isbn, button);
    return li;
  }
}

let library = new BookList(bookList);

library.add(
  "When Breath Becomes Air",
  "Paul Kalanithi",
  "https://images3.penguinrandomhouse.com/cover/9780812988406"
);
library.add(
  "The Adventures of Tom Sawyer",
  "Mark Twain",
  "https://images1.penguinrandomhouse.com/cover/9780143107330"
);
library.add(
  "The Adventures of Tom Sawyer",
  "Mark Twain",
  "https://images1.penguinrandomhouse.com/cover/9780143107330"
);
