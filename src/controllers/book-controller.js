// Importaciones
const bookService = require('../services/book-service');

// Funciones
async function createBook(req, res, next) {
  const { ISBN, titulo, autor, year, library } = req.body;
  try {
    const book = await bookService.createBook(ISBN, titulo, autor, year, library);
    res.status(201).send(book);
  } catch (error) {
    next(error);
  }
};

async function deleteBook(req, res, next) {
  const { id } = req.params;
  try {
    await bookService.deleteBook(id);
    res.status(201).send(`Libro con id ${id} eliminado con exito`);
  } catch (error) {
    next(error);
  }
};

async function editBook(req, res, next) {
  const { id } = req.params;
  const { ISBN, titulo, autor, year, library } = req.body;
  try {
    const book = await bookService.editBook(id, ISBN, titulo, autor, year, library);
    res.status(201).send(book);
  } catch (error) {
    next(error);
  }
};

async function getAllBooks(req, res, next) {
  try {
    const books = await bookService.getBooks();
    res.status(200).send(books);
  } catch (error) {
    next(error);
  }
};

async function getBookById(req, res, next) {
  const { id } = req.params;
  try {
    const book = await bookService.getBook(id);
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBook, deleteBook, editBook, getAllBooks, getBookById };