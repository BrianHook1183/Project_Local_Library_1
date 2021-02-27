// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
