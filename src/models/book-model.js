const { DataTypes, Model, Sequelize } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');

// Creación de entidad
class Book extends Model { };

// Inicialización de entidad
Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ISBN: {
    type: DataTypes.INTEGER
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING
  },
  library: {
    type: DataTypes.INTEGER
  },
  isDeleted: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize: dbInstance,
  modelName: "Books",
  createdAt: false,
  updatedAt: false
});

module.exports = { Book };