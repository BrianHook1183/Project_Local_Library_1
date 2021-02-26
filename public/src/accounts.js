// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns the account object that has the matching ID
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

// *returns a sorted array of objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
