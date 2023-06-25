// Importaciones
const { Book } = require('../models/book-model');
const { Library } = require('../models/library-model');

// Crear libro (AUTH)
async function createBook(ISBN, titulo, autor, year, libraryId) {
  const library = await Library.findOne({
    where: {
      id: libraryId,
      isDeleted: false
    }
  });
  if (library) {
    const book = new Book();
    book.ISBN = ISBN;
    book.titulo = titulo;
    book.autor = autor;
    book.year = year;
    book.library = libraryId;
    book.isDeleted = false;
    const newBook = await book.save();
    return newBook;
  } else {
    throw new Error(`Libro no creado, libreria con id ${libraryId} inexistente`);
  }
};

// Eliminar un libro (AUTH)
async function deleteBook(id) {
  const book = await Book.findOne({
    where: {
      id: id,
      isDeleted: false
    }
  });
  if (book) {
    book.isDeleted = true;
    const editedBook = await book.save();
    return editedBook;
  } else {
    throw new Error("Error, el libro no existe");
  }
};

// Modificar un libro (AUTH)
async function editBook(id, ISBN, titulo, autor, year, library) {
  const book = await Book.findOne({
    where: {
      id: id,
      isDeleted: false
    }
  });
  if (book) {
    try {
      if (ISBN) {
        book.ISBN = ISBN;
      }
      if (titulo) {
        book.titulo = titulo;
      }
      if (autor) {
        book.autor = autor;
      }
      if (year) {
        book.year = year;
      }
      if (library) {
        book = library = library;
      }
      const editedBook = await book.save()
      return editedBook;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Error, libro no encontrado");
  }
};

// Obtener un libro en particular
async function getBook(id) {
  try {
    const book = await Book.findByPk(id);
    if (book === null || book.isDeleted === true) {
      throw new Error("Libro no encontrado");
    }
    return book;
  } catch (error) {
    throw new Error(error);
  }
};

// Obtener todos los libros
async function getBooks() {
  try {
    const books = await Book.findAll();
    const booksAvailable = books.filter(book => book.isDeleted === false);
    if (booksAvailable.length === 0) {
      throw new Error("Error, no hay libros");
    }
    return booksAvailable;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createBook, deleteBook, editBook, getBook, getBooks };