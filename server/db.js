const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, //Название бд
  process.env.DB_USER, //Пользователь бд
  process.env.DB_PASSWORD, //Пароль бд
  {
    host: process.env.DB_HOST, //Хост бд
    port: process.env.DB_PORT, //Порт бд
    dialect: "postgres",
  }
);
