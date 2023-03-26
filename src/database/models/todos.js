const {DataTypes} = require("sequelize");

const db = require("../index");
const Users = require("./users");

const Todos = db.define('Todos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    paranoid: true
});

Todos.belongsTo(Users, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

module.exports = Todos;