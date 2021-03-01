function returnAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function partitionBooksByBorrowedStatus(books) {
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
