"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movie_actors", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      actor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("movie_actors", {
      type: "foreign key",
      name: "MOVIE_ACTORS__MOVIE_ID",
      fields: ["movie_id"],
      references: {
        table: "movies",
        field: "id",
      },
    });
    await queryInterface.addConstraint("movie_actors", {
      type: "foreign key",
      name: "MOVIE_ACTORS__ACTOR_ID",
      fields: ["actor_id"],
      references: {
        table: "actors",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movie_actors");
  },
};
