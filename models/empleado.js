'use strict';

const { Sequelize, DataTypes } = require("sequelize");

// Importar el modelo del Departamento
const Departamento = require('./Departamentos');

const Departamento = sequelize.define('Departamento', {
  Id_Empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  Nombre: {
    tyoe: DataTypes.STRING,
    allowNull: false
  },
  Apellido: {
    tyoe: DataTypes.STRING,
    allowNull: false
  },
  PIN: {
    type: DataTypes.STRING,
    allowNull: false
  },
  HuellaD: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true   
  },
  Id_Dpto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
    model: {
        tableName: 'Departamentos'
      },
      key: 'Id_Dpto'
    },
    onUpdate: 'CASCADE'
  }
}, {});

// Definir la relación
Empleado.belongsTo(Departamento, { foreignKey: 'Id_Dpto' });

module.exports = Empleado;