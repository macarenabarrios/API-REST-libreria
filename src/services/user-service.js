// Importaciones
const { User } = require('../models/user-model');
const jwt = require('jsonwebtoken');

// Crear un usuario
async function createUser(name, lastname, email, password) {
  try {
    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    const userCreated = await user.save();
    return userCreated;
  } catch (error) {
    throw new Error("Error, usuario no creado");
  }
};

// Editar usuario
async function editUser(id, name, lastname, email) {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error("Error, usuario no encontrado");
    }
    // Manejar error si !user
    if (name) {
      user.name = name;
    }
    if (lastname) {
      user.lastname = lastname;
    }
    if (email) {
      user.email = email;
    }
    const userEdited = await user.save();
    return userEdited;
  } catch (error) {
    throw new Error(error);
  }
};

// Obtener un usuario
async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
    if (user === null) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(error);
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

module.exports = { createUser, editUser, login };