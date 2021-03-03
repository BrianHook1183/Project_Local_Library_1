const helper = require("./helpers");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// *returns a number that represents the number of books that are currently checked out of the library.
function getBooksBorrowedCount(books) {
  return helper.partitionBooksByBorrowedStatus(books)[0].length;
}

//* returns an array containing top five or fewer most common occurring genres.
function getMostCommonGenres(books) {
  let count = 0;
  const genreTotals = books.reduce((acc, { genre }) => {
    count = acc[genre] ? acc[genre].count + 1 : 1;
    acc[genre] = {
      name: genre,
      count,
    };
    return acc;
  }, []);
  return helper.topFive(Object.values(genreTotals));
}

// *returns a top five or fewer array that represents the most popular books in the library.
function getMostPopularBooks(books) {
  const borrowedTotals = books.reduce((accumulator, { title, borrows }) => {
    let count = borrows.length;
    accumulator[title] = {
      name: title,
      count,
    };
    return accumulator;
  }, []);
  return helper.topFive(Object.values(borrowedTotals));
}

// *returns a top five or fewer array of the most popular authors whose books have been borrowed the most.
function getMostPopularAuthors(books, authors) {
  let count = 0;
  const idTotals = books.reduce((acc, { authorId, borrows }) => {
    count = acc[authorId]
      ? acc[authorId].count + borrows.length
      : borrows.length;
    acc[authorId] = {
      name: authorId,
      count,
    };
    return acc;
  }, []);

  const idTotalsSorted = helper.topFive(Object.values(idTotals));

  return idTotalsSorted.map((idTotal) => {
    const findId = idTotal.name;
    const name = helper.returnAuthorById(authors, findId).name;
    return { ...idTotal, name: `${name.first} ${name.last}` };
  });
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
