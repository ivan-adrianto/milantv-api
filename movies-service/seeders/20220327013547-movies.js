"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("movies", [
      {
        id: 1,
        title: "Spider-Man: No Way Home",
        banner:
          "http://image.tmdb.org/t/p/w185/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        synopsis:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        release_date: "2021-12-15",
        youtube_link: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        category_id: 28,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
      },
      {
        id: 2,
        title: "Encanto",
        banner:
          "http://image.tmdb.org/t/p/w185/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        synopsis:
          "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        release_date: "2021-11-24",
        youtube_link: "https://www.youtube.com/watch?v=CaimKeDcudo",
        category_id: 16,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
