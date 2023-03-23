const books = require('../books');

const getAllBooksHandler = (request, h) => {
  let bookList;
  const {name, reading, finished} = request.query;
  console.log('name=' + name, 'reading=' + reading, 'finished=' + finished);

  bookList = books.map((book) => {
    const {id, name, publisher} = book;
    return {id, name, publisher};
  });

  if (name !== undefined) {
    bookList = books
        .filter((book) =>
          new RegExp('\\b' + name.toLowerCase() + '\\b')
              .test(book.name.toLowerCase()))
        .map((book) => {
          const {id, name, publisher} = book;
          return {id, name, publisher};
        });
  }
  if (reading !== undefined) {
    bookList = books
        .filter((book) =>
          ((reading === 0) ? book.reading === false : book.reading === true),
        )
        .map((book) => {
          const {id, name, publisher} = book;
          return {id, name, publisher};
        });
  }
  if (finished !== undefined) {
    bookList = books
        .filter((book) =>
          ((finished === 0) ? book.finished === false : book.finished === true),
        )
        .map((book) => {
          const {id, name, publisher} = book;
          return {id, name, publisher};
        });
  }

  const response = h.response({
    status: 'success',
    data: {
      books: bookList,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
