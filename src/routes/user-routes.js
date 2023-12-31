// Importaciones
const express = require('express');
const userController = require('../controllers/user-controller');

// Creamos un objeto de la clase router que nos brinda Express
const router = express.Router();

// Rutas (endpoints)
router.post("/login", userController.login);

module.exports = router;