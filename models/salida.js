'use strict';

const { DataTypes } = require("sequelize");

const Salida = Sequelize.define('Salida',{
  Id_Salida: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
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
  Fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  Hora: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {});