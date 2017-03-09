
myApp.service('BookService', function () {
  var books = [
    'Ready Player One',
    'Enders Game',
    'Bladerunner'
  ];
  this.getBooks = function() {
    return books
  }
  this.getBook = function(id) {
    return books[id]
  }
})
