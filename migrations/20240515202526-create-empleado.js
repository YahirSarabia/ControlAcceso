'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empleados', {
      Id_Empleado: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PIN: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HuellaD: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Id_Dpto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Departamentos'
          },
          key: 'Id_Dpto'
        },
        onUpdate: 'CASCADE'
      } //
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empleados');
  }
};