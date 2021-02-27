// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

// *returns the book object that has the matching ID
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

// returns an array with two arrays inside of it. The first array contains books that have been loaned out, and are not yet returned while the second array contains books that have been returned.
function partitionBooksByBorrowedStatus(books) {
  // declare the two conditions as arrays so I only have to loop through books once and sort them into correct variable at the same time
  let unavailableBooks = [];
  let availableBooks = [];
  books.forEach(book => {
    if (book.borrows.some(transaction => !transaction.returned)) {
      unavailableBooks.push(book);
    } else {
      availableBooks.push(book);
    }
  })
  return [unavailableBooks, availableBooks];
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
