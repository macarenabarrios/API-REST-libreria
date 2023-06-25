// Importaciones
const userService = require('../services/user-service');

// Funciones
async function createUser(req, res, next) {
  const { name, lastname, email, password } = req.body;
  try {
    const user = await userService.createUser(name, lastname, email, password);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

async function editUser(req, res, next) {
  const { id } = req.params;
  const { name, lastname, email } = req.body;
  try {
    const user = await userService.editUser(id, name, lastname, email);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

async function login(req, res, next) {
  const { name, password } = req.body;
  try {
    // Result: token de acceso
    const result = await userService.login(name, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, editUser, login };