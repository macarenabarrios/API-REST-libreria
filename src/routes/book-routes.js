// Importaciones
const express = require('express');
const bookController = require('../controllers/book-controller');
const { isAuthenticated } = require('../middlewares/authentication');

// Creamos un objeto de la clase router que nos brinda Express
const router = express.Router();

// Rutas (endpoints)
router.post("/create-book", isAuthenticated, bookController.createBook);
router.get("/get-book/:id", bookController.getBookById);
router.get("/get-books", bookController.getAllBooks);
router.put("/edit-book/:id", isAuthenticated, bookController.editBook);
router.delete("/delete-book/:id", isAuthenticated, bookController.deleteBook);

module.exports = router;