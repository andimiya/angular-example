
myApp.service('BookService', function () {
  this.books = [
    {title: 'Ready Player One', author: 'Ernest Cline'},
    {title: 'Enders Game', author: 'Orson Scott Card'},
    {title: 'Bladerunner', author: 'Harrison Ford'}
  ];
  this.getBooks = function() {
    return this.books
  }
  this.getBook = function(id) {
    return this.books[id]
  }
  this.addBook = function(book) {
    this.books.push({
      title: book.title,
      author: book.author
    })
  }
})
