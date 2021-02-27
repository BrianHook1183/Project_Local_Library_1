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

// *returns an array of all the transactions from the book's borrows key. However, each transaction should include the related account information and the returned key.
function getBorrowersForBook(book, accounts) {
  const borrowLog = book.borrows.reduce((acc, transaction) => {
    // finds the account object with matching id
    let matchedAccount =  accounts.find(account => account.id === transaction.id);
    // spreads objects together, id key is shared between both so it's overwritten but nothing is affected
    acc.push({...transaction, ...matchedAccount});
    return acc;
  }, []);
  // Limit to 10 results
  return borrowLog.slice(0, 10);
}
/* Example Output:  getBorrowersForBook(book, accounts);
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
