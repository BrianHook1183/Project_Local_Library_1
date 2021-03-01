const booksFunctions = require('./books');

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
  return booksFunctions.partitionBooksByBorrowedStatus(books)[0].length
  
}

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

// *First solution - ugly
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

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
