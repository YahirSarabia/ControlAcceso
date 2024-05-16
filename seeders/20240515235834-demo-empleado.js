'use strict';

const { QueryInterface, Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empleados', [
      {
        Id_Empleado: 123,
        Nombre: 'Mario Alberto',
        Apellido: 'Rosas Ala',
        PIN: '1234',
        HuellaD: 'jdiiw2i9',
        Id_Dpto: 1
      },
      {
        Id_Empleado: 213,
        Nombre: 'Pepe',
        Apellido: 'Gutierrez',
        PIN: '1234',
        HuellaD: 'jdiiw2i9',
        Id_Dpto: 1
      },
      {
        Id_Empleado: 321,
        Nombre: 'Juanito ',
        Apellido: 'Rosas Ala',
        PIN: '1234',
        HuellaD: 'jdiiw2i9',
        Id_Dpto: 1
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empleados', {},
      {});
  }
};