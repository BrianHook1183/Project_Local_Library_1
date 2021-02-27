// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

// *returns the book object that has the matching ID
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
