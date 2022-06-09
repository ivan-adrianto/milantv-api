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
      {
        id: 3,
        title: "The Dark Knight",
        banner:
          "http://image.tmdb.org/t/p/w185/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        synopsis:
          "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        release_date: "2008-07-14",
        youtube_link: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        category_id: 18,
        rating: 0,
        total_rating: 0,
        total_reviews: 0,
        total_comments: 0,
      },
      {
        id: 4,
        title: "Turning Red",
        banner:
          "http://image.tmdb.org/t/p/w185/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        synopsis:
          "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        release_date: "2022-03-01",
        youtube_link: "https://www.youtube.com/watch?v=XdKzUbAiswE",
        category_id: 10751,
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
