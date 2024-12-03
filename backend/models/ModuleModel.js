import { DataTypes } from 'sequelize';
import sequelize from '../config/connDb.js';

const Module = sequelize.define('Module', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  materials: {
    type: DataTypes.JSON,
  },
  quiz: {
    type: DataTypes.JSON,
  },
  topics: {
    type: DataTypes.JSON,
  },
  sequence: {
    type: DataTypes.JSON,
  },
}, {
  timestamps: true,
});

export default Module;
