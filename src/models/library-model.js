const { DataTypes, Model, Sequelize } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');

// Creación de entidad
class Library extends Model { };

// Inicialización de entidad
Library.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  phonenumber: {
    type: DataTypes.STRING
  },
  isDeleted: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize: dbInstance,
  modelName: "Library",
  createdAt: false,
  updatedAt: false
});

module.exports = { Library };