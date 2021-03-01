const helper = require("./helpers");

// *returns the account object that has the matching ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

// *returns a sorted array of objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

// *returns a number that represents the number of times the account's ID appears in any book's borrow array.
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) acc += 1;
    });
    return acc;
  }, 0);
}

// *returns an array of books and authors that represents all books currently checked out by the given account.
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessedByAccount = books.filter((book) =>
    book.borrows.find(
      (transaction) =>
        transaction.returned === false && transaction.id === account.id
    )
  );
  return booksPossessedByAccount.map((book) => {
    let author = helper.returnAuthorById(authors, book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
