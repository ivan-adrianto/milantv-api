"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      synopsis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      poster: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      release_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      youtube_link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: Sequelize.DECIMAL(10, 1),
        allowNull: true,
      },
      total_rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_reviews: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_comments: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });

    await queryInterface.addConstraint("movies", {
      type: "foreign key",
      name: "MOVIES__CATEGORY_ID",
      fields: ["category_id"],
      references: {
        table: "categories",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  },
};
