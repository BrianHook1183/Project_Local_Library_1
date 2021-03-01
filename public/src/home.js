const booksFunctions = require("./books");

// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// *returns a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// *returns a number that represents the number of books that are currently checked out of the library.
function getBooksBorrowedCount(books) {
  // reuses function from books.js that partitions books into borrowed and available
  return booksFunctions.partitionBooksByBorrowedStatus(books)[0].length;
}
//* returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
// *2nd solution - less ugly
function getMostCommonGenres(books) {
  let count = 0;
  const genreTotals = books.reduce((acc, { genre }) => {
    acc[genre] ? (count = acc[genre].count + 1) : (count = 1);
    acc[genre] = { name: genre, count };
    return acc;
  }, []);
  return Object.values(genreTotals)
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}
// *1st solution - ugly
// function getMostCommonGenres(books) {
//   const topGenres = books.reduce((accumulator, { genre }) => {
//     if (!accumulator.some(acc => acc.name === genre)) {
//       let name = genre;
//       let count = 1;
//       const newGenre = { name, count};
//       accumulator.push(newGenre);
//     } else {
//       accumulator.forEach(acc => {
//         if (acc.name == genre) {
//           acc.count++ ;
//         }
//       }) ;
//     }
//     return accumulator;
//   }, [])
//   return topGenres
//   .sort((a, b) => (a.count < b.count ? 1 : -1))
//   .slice(0, 5);
// }

// *returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books) {
  const borrowedTotals = books.reduce((accumulator, { title, borrows }) => {
    let count = borrows.length;
    accumulator[title] = { name: title, count };
    return accumulator;
  }, []);
  return Object.values(borrowedTotals)
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

// *returns an array containing five objects or fewer that represents the most popular authors whose books have been borrowed the most.
function getMostPopularAuthors(books, authors) {
  let count = 0;
  const idTotals = books.reduce((acc, { authorId, borrows }) => {
    acc[authorId]
      ? (count = acc[authorId].count + borrows.length)
      : (count = borrows.length);
    acc[authorId] = { name: authorId, count };
    return acc;
  }, []);

  const idTotalsSorted = Object.values(idTotals)
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);

  return idTotalsSorted.map((idTotal) => {
    const findId = idTotal.name;
    const name = booksFunctions.findAuthorById(authors, findId).name;
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
