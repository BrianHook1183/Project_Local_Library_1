const helper = require("./helpers");

// *returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return helper.returnAuthorById(authors, id);
}

// *returns the book object that has the matching ID
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

// *returns an array with two arrays inside of it. The first array contains books that have been loaned out, and are not yet returned while the second array contains books that have been returned.
function partitionBooksByBorrowedStatus(books) {
  return helper.partitionBooksByBorrowedStatus(books);
}

// *returns an array of ten transactions from the book's borrows key. Each transaction includes the related account information and the returned key.
function getBorrowersForBook(book, accounts) {
  const borrowLog = book.borrows.reduce((acc, transaction) => {
    let matchedAccount = accounts.find(
      (account) => account.id === transaction.id
    );
    acc.push({ ...transaction, ...matchedAccount });
    return acc;
  }, []);
  return borrowLog.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
