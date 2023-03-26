const {Sequelize} = require("sequelize");

const {DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_DIALECT, DATABASE_HOST} = require("../config");

const db = new Sequelize({
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    dialect: DATABASE_DIALECT,
    host: DATABASE_HOST,
});

module.exports = db;