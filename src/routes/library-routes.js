// Importaciones
const express = require('express');
const libraryController = require('../controllers/library-controller');
const { isAuthenticated } = require('../middlewares/authentication');

// Creamos un objeto de la clase router que nos brinda Express
const router = express.Router();

// Rutas (endpoints)
router.post("/create-library", isAuthenticated, libraryController.createLibrary);
router.get("/get-library/:id", libraryController.getLibraryById);
router.get("/get-libraries", libraryController.getAllLibraries);
router.put("/edit-library/:id", isAuthenticated, libraryController.editLibrary);
router.delete("/delete-library/:id", isAuthenticated, libraryController.deleteLibrary);

module.exports = router;