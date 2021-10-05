const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Status extends Model { }

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    diary: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'status'
  }
);

module.exports = Status;