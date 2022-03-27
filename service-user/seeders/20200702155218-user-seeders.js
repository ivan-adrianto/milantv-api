'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [
      {
        fullname: "Ivan Adrianto",
        username: "ivan",
        role: "admin",
        email: "ivanadrianto64@gmail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: "Retno Rohma Asih",
        username: "retno",
        role: "user",
        email: "retno@mail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('users', null, {});
  }
};
