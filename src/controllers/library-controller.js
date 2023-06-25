// Importaciones
const libraryService = require('../services/library-service');

// Funciones
async function createLibrary(req, res, next) {
  const { name, location, phonenumber } = req.body;
  try {
    const library = await libraryService.createLibrary(name, location, phonenumber);
    res.status(201).send(library);
  } catch (error) {
    next(error);
  }
};

async function deleteLibrary(req, res, next) {
  const { id } = req.params;
  try {
    await libraryService.deleteLibrary(id);
    res.status(201).send(`Libreria con id ${id} eliminada con exito`);
  } catch (error) {
    next(error);
  }
};

async function editLibrary(req, res, next) {
  const { id } = req.params;
  const { name, location, phonenumber } = req.body;
  try {
    const library = await libraryService.editLibrary(id, name, location, phonenumber);
    res.status(201).send(library);
  } catch (error) {
    next(error);
  }
};

async function getAllLibraries(req, res, next) {
  try {
    const libraries = await libraryService.getLibraries();
    res.status(200).send(libraries);
  } catch (error) {
    next(error);
  }
};

async function getLibraryById(req, res, next) {
  const { id } = req.params;
  try {
    const library = await libraryService.getLibrary(id);
    res.status(200).send(library);
  } catch (error) {
    next(error);
  }
};

module.exports = { createLibrary, deleteLibrary, editLibrary, getAllLibraries, getLibraryById };