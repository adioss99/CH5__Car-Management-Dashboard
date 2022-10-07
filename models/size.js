'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Size.hasMany(models.Car, {
        foreignKey: 'id_car_size',
        as: 'cars',
      });
    }
  }
  Size.init(
    {
      car_size: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Size',
    }
  );
  return Size;
};
