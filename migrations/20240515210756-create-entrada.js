'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entradas', {
      Id_Entrada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Id_Empleado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Empleados'
          },
          key: 'Id_Empleado'
        },
        onUpdate: 'CASCADE'
      },
      Fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      Hora: {
        type: Sequelize.TIME,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entradas');
  }
};