'use strict';

const { QueryInterface, Sequelize, DATEONLY, TIME } = require('sequelize');

// Obtiene la fecha y hora actual
const Fecha_Dato = new Date();
const fechaActual = Fecha_Dato.toISOString().slice(0, 10); // Formato YYYY-MM-DD
const horaActual = Fecha_Dato.toLocaleTimeString('en-US', { hour12: false }); // Formato HH:MM:SS

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Salidas', [
      {
        Id_Empleado: 123,
        Fecha: fechaActual,
        Hora: horaActual
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Salidas', {},
      {});
  }
};