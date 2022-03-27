"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("actors", [
      {
        id: 1,
        movie_id: 1,
        name: "Tom Holland",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/640px-Tom_Holland_by_Gage_Skidmore.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        movie_id: 1,
        name: "Zendaya",
        photo:
          "https://static.republika.co.id/uploads/images/inpicture_slide/zendaya-_180815133142-761.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        movie_id: 1,
        name: "Benedict Cumberbacth",
        photo:
          "https://static.republika.co.id/uploads/images/inpicture_slide/zendaya-_180815133142-761.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        movie_id: 1,
        name: "Jacob Batalon",
        photo:
          "http://image.tmdb.org/t/p/w185/53YhaL4xw4Sb1ssoHkeSSBaO29c.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        movie_id: 1,
        name: "Jamie Foxx",
        photo:
          "http://image.tmdb.org/t/p/w185/hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        movie_id: 1,
        name: "Willem Dafoe",
        photo:
          "http://image.tmdb.org/t/p/w185/ui8e4sgZAwMPi3hzEO53jyBJF9B.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        movie_id: 1,
        name: "Alfred Molina",
        photo:
          "http://image.tmdb.org/t/p/w185/nJo91Czesn6z0d0pkfbDoVZY3sg.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        movie_id: 1,
        name: "Benedict Wong",
        photo:
          "http://image.tmdb.org/t/p/w185/ukmfsl59Isvn9odgzMWBidA3cmt.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        movie_id: 2,
        name: "Stephanie Beatriz",
        photo:
          "http://image.tmdb.org/t/p/w185/7gNPOlsVIdg7QQOv1gRfHjv1Sdb.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        movie_id: 2,
        name: "María Cecilia Botero",
        photo:
          "http://image.tmdb.org/t/p/w185/nH6eBBgv1PI9J6Ftkn01ny1TMt1.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        movie_id: 2,
        name: "John Leguizamo",
        photo:
          "http://image.tmdb.org/t/p/w185/kEbXDtcPJ46GEhj5QlCTLZS6PWE.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        movie_id: 2,
        name: "Mauro Castillo",
        photo:
          "/qGNGBRyy9LumdFw32M7elnHP4IJ.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        movie_id: 2,
        name: "Jessica Darrow",
        photo:
          "http://image.tmdb.org/t/p/w185/rJojc1ZUasEnUxSk7lL42RxyQbP.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        movie_id: 2,
        name: "Angie Cepeda",
        photo:
          "http://image.tmdb.org/t/p/w185/57OE4acJypRTey5OQlQjkpv14pQ.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        movie_id: 2,
        name: "Carolina Gaitán",
        photo:
          "http://image.tmdb.org/t/p/w185/c7UPkmhIXYWmlqaQK250L8GTsPQ.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 16,
        movie_id: 2,
        name: "Diane Guerrero",
        photo:
          "http://image.tmdb.org/t/p/w185/5LXvRYdxKLWROAD2KDSXzRNNSdE.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actors", null, {});
  },
};
