'use strict';

const { QueryInterface, Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departamentos', [
      {
        Nombre_Dpto: 'Sistemas'
      },
      {
        Nombre_Dpto: 'Mantenimiento'
      },
      {
        Nombre_Dpto: 'Hostess'
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Departamentos', {},
      {});
  }
};
