const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
      user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignkey: true
      },
      diary: {
        type: DataTypes.STRING,
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
      
      },
      // date:{
      //   type: DataTypes.DATE,
      //   allowNull: false
      // },
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: false,
      modelName: 'status'
    }
  )

module.exports = Status;