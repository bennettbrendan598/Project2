const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Crypto extends Model {}


Crypto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
    
  },
  {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Crypto',
  }
);

module.exports = Crypto;
