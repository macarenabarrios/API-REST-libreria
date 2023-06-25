// Importaciones
const { Library } = require('../models/library-model');
const { Book } = require('../models/book-model');

// Crear una librería
async function createLibrary(name, location, phonenumber) {
  try {
    const library = new Library();
    library.name = name;
    library.location = location;
    library.phonenumber = phonenumber;
    library.isDeleted = false;
    const newLibrary = await library.save();
    return newLibrary;
  } catch (error) {
    throw new Error("Error, librería no creada");
  }
};

// Eliminar una librería (AUTH)
async function deleteLibrary(id) {
  const library = await Library.findOne({
    where: {
      id: id,
      isDeleted: false
    }
  });
  if (library) {
    library.isDeleted = true;
    const deletedLibrary = await library.save();
    return deletedLibrary;
  } else {
    throw new Error("Error, librería no eliminada");
  }
};

// Modificar una librería (AUTH)
async function editLibrary(id, name, location, phonenumber) {
  const library = await Library.findOne({
    where: {
      id: id,
      isDeleted: false
    }
  });
  if (library) {
    try {
      library.name = name;
      library.location = location;
      library.phonenumber = phonenumber;
      const editedLibrary = await library.save()
      return editedLibrary
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Error, libreria no encontrada");
  }
};

// Obtener todas las librerías
async function getLibraries() {
  try {
    const libraries = await Library.findAll();
    const librariesAvailable = libraries.filter(library => library.isDeleted === false);
    if (librariesAvailable.length === 0) {
      throw new Error("Error, no existen librerias");
    }
    return librariesAvailable;
  } catch (error) {
    throw new Error(error);
  }
};

// Obtener una librería (Debe traer también todos los libros)
async function getLibrary(id) {
  try {
    const library = await Library.findByPk(id);
    if (library === null || library.isDeleted === true) {
      throw new Error("Libreria no encontrada");
    }
    const books = await Book.findAll({
      where: {
        library: id
      }
    });
    return {
      "library": library,
      "books": books
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createLibrary, deleteLibrary, editLibrary, getLibraries, getLibrary };