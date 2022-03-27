'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('watchlists', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.addConstraint('watchlists', {
      type: 'foreign key',
      name: 'WATCHLISTS__MOVIE_ID',
      fields: ['movie_id'],
      references: {
        table: 'movies',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('watchlists');
  }
};
