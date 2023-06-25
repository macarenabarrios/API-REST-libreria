// Importaciones
const userService = require('../services/user-service');

// Funciones
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

module.exports = { login };