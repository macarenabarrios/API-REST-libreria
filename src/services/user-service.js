// Importaciones
const { User } = require('../models/user-model');
const jwt = require('jsonwebtoken');

// Crear un usuario
async function createUser() {
  try {
    const user = new User();
    user.name = "admin";
    user.password = "admin";
    const userCreated = await user.save();
    return userCreated;
  } catch (error) {
    throw new Error("Error, usuario admin no creado");
  }
};

// Login
async function login(name, password) {
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  });
  if (!user) {
    throw new Error("Email y/o password incorrectos");
  }
  // El usuario existe ==> Crea token de acceso con método sign
  const token = jwt.sign({
    // Payload, secretOrPrivateKey (clave que utilizamos para encriptar)
    id: user.id,
    name: user.name
  }, 'ClaveUltraSecreta');
  return {
    accessToken: token
  };
};

module.exports = { createUser, login };