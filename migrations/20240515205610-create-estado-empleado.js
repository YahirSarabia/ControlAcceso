'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EstadoEmpleados', {
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
      Estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EstadoEmpleados');
  }
};