'use strict';

const { Sequelize } = require("sequelize");

const EstadoEmpleado = sequelize.define('EstadoEmpleado',{
  Id_Empleado: {
    type: DataTypes.INTEGER,
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
    type:DataTypes.BOOLEAN,
    allowNull: false
  }
}, {});