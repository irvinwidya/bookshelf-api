const books = require('../books');

const getBookDetailsByIdHandler = (request, h) => {
  const {bookId} = request.params;

  const bookVar = books.filter((b) => b.id === bookId)[0];

  const idFound = (bookVar !== undefined);

  if (idFound) {
    const response = h.response({
      status: 'success',
      data: {
        book: bookVar,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookDetailsByIdHandler;
