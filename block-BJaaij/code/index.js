class Book {
  constructor(title, categeory, author) {
    this.title = title;
    this.categeory = categeory;
    this.author = author;
    this.isRead = false;
    this.finishedDate = finishedDate;
  }
  markedbookAsRead() {
    this.isRead = true;
  }
}
class BookList {
  constructor() {
    this.books = [];
    this.curretiIndexBook = 0;
  }
  add(books = []) {
    this.books = this.books.concat(books);
    return this.books;
  }
  getCurrentBook() {
    return this.books[this.curretiIndexBook];
  }

  getNextBook() {
    return this.books[this.curretiIndexBook + 1];
  }
  getPrevBook() {
    return this.books[this.curretiIndexBook - 1];
  }
  changeCurrentBook(index) {
    return this.curretiIndexBook;
  }
}

// create 5 book object and add it to list. Test all the methods in Book and BookList class.
let book1 = new Book("The Alchemist,,ffff");
let book2 = new Book(
  "Girl Power: Indian Women Who Broke The Rules,ff,Neha J Hiranandani"
);
let book3 = new Book("“Lessons Life Taught Me Unknowingly”.,ff,Anupam Kher");
let book4 = new Book("My Journey,ff,Dr. A.P.J. Abdul Kalamf");
let book5 = new Book("The Goat Thief,ff,Perumal Murugan");
