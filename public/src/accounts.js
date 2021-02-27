const booksFunction = require('./books');

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

// *returns an array of books and authors that represents all books currently checked out by the given account. Look carefully at the object below, as it's not just the book object; the author object is embedded inside of it.
// Example Output: getBooksPossessedByAccount(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
function getBooksPossessedByAccount(account, books, authors) {
  // searches entire library and adds books that match criteria to new array
  let booksPossessedByAccount = books.filter(book =>
    // for each book, searches through borrow transactions and stops the first time criteria is met
    book.borrows.find(transaction =>
      // checks that book is currently taken out AND by the given account
      transaction.returned === false && transaction.id === account.id
  ));
  // inserts the author object into the book object as a new key/value pair
  return booksPossessedByAccount.map(book => {
    // finds the author object with matching id
      // ?using function from books.js as a helper function
    let author = booksFunction.findAuthorById(authors, book.authorId);
      // ?if I didn't use the helper functions:
    // *let author = authors.find(author => author.id === book.authorId);
    // object shorthand and spread operator. Takes each book and adds new key "author" with the value that was just stored.
    return {...book, author};
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
