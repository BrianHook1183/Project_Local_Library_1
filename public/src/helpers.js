function returnAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // declare the two conditions as arrays so I only have to loop through books once and sort them into correct variable at the same time
  let unavailableBooks = [];
  let availableBooks = [];
  books.forEach((book) => {
    if (book.borrows.some((transaction) => !transaction.returned)) {
      unavailableBooks.push(book);
    } else {
      availableBooks.push(book);
    }
  });
  return [unavailableBooks, availableBooks];
}

function topFive(array) {
  return array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  returnAuthorById,
  partitionBooksByBorrowedStatus,
  topFive,
};
