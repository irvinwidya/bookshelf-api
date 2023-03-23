// const {
//   addBookHandler,
//   getAllBooksHandler,
//   getAllBooksByNameHandler,
//   getAllBooksByReadingHandler,
//   getBookDetailsByIdHandler,
//   editBookByIdHandler,
//   deleteBookByIdHandler,
// } = require('./BookHandlers');

const addBookHandler = require('./handlers/addBookHandler');
const getAllBooksHandler = require('./handlers/getAllBookHandler');
const getBookDetailsByIdHandler = require(
    './handlers/getBookDetailsByIdHandler',
);
const editBookByIdHandler = require('./handlers/editBookByIdHandler');
const deleteBookByIdHandler = require('./handlers/deleteBookByIdHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/books{?name}{?reading}{?finished}',
  //   handler: getAllBooksHandler,
  // },
  {
    method: 'GET',
    path: `/books/{bookId}`,
    handler: getBookDetailsByIdHandler,
  },
  {
    method: 'PUT',
    path: `/books/{bookId}`,
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: `/books/{bookId}`,
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
