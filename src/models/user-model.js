const { DataTypes, Model, Sequelize } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');

// Creación de entidad
class User extends Model { };

// Inicialización de entidad
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInstance,
    modelName: "Users",
    createdAt: false,
    updatedAt: false
});

module.exports = { User };