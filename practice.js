const book = {
  title: "Apples and Objects",
  author: "Grok",
  year: 2020,
  summary() {
    return `${this.title} was written in ${this.year} by ${this.author}.`;
  },
  updateYear(newYear) {
    this.year = newYear;
  },
  updateAuthorAndTitle(newAuth, newTitle) {
    this.author = newAuth;
    this.title = newTitle;
  },
  sayNewUpdates() {
    return `The Author is ${this.author}. The title is ${this.title}.`;
  },
  addGenre(genre) {
    this.genre = genre;
  },
  fullDetails() {
    if (!this.genre) {
      return `This doesn't include a genre.`;
    } else {
      return `The genre of the book is ${this.genre}.`;
    }
  },
};

book.genre = "Historical Fiction";
book.funny = "Yes, this is funny";
console.log("Logging book and its properties:", book);
delete book.genre;
delete book.funny;
console.log("Logging book and its properties after deletion:", book);

console.log("Before updating the year,", book.summary());
book.updateYear(3999);
console.log("After updating the year,", book.summary());

console.log("Before updating title and author: ", book.sayNewUpdates());
book.updateAuthorAndTitle("Balln", "The Great Filter");
console.log("After updating title and author: ", book.sayNewUpdates());

book.addGenre("Science");
console.log(book);

console.log(book.fullDetails());
delete book.genre;
console.log(book.fullDetails());
