const { Sequelize } = require('sequelize');

const dbInstance = new Sequelize(
  {
    host: "localhost",
    database: "API-REST",
    username: "root",
    password: "Melody10",
    port: 3306,
    dialect: "mysql"
  }
);

module.exports = { dbInstance };