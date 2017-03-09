
myApp.service('BookService', function () {
  var books = [
    {title: 'Ready Player One', author: 'Ernest Cline'},
    {title: 'Enders Game', author: 'Orson Scott Card'},
    {title: 'Bladerunner', author: 'Harrison Ford'}
  ];
  this.getBooks = function() {
    return books
  }
  this.getBook = function(id) {
    return books[id]
  }
})
