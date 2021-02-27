// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns the account object that has the matching ID
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

// *returns a sorted array of objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

// *returns a number that represents the number of times the account's ID appears in any book's borrow array.
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    // forEach allows checking for multiple borrows of the same book
   book.borrows.forEach(borrow => {
     if (borrow.id === account.id) acc += 1;
    });
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
