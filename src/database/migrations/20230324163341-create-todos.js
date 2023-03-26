'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Todos', {
            id: {
                primaryKey: true,
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            completed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    key: 'id',
                    model: 'Users',
                },
                onDelete: 'CASCADE',
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Todos');
    }
};
