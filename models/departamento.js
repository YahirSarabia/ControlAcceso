'use strict';

const { Sequelize, DataTypes } = require("sequelize");

const Departamento = 
Sequelize.define('Departamento', {
  Id_Dpto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre_Dpto: {
    tyoe: DataTypes.STRING,
    allowNull: false
  }
}, {});

module.exports = Departamento;