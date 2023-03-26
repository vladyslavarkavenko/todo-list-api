const {NODE_ENV, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_DIALECT, DATABASE_HOST} = require("../config");

// This file is only used by sequelize migrator
module.exports = {
    [NODE_ENV]: {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        dialect: DATABASE_DIALECT,
        host: DATABASE_HOST,
    }
}