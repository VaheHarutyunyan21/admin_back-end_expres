'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {foreignKey:'userId', key:'id'});
      Cart.belongsTo(models.Product, {foreignKey:'productId',as:"productData", key:'id'});
      
    }
  }
  Cart.init({
    userId:{type:DataTypes.INTEGER,allowNull:false},
    productId: {type:DataTypes.INTEGER,allowNull:false},
    quantity:{type:DataTypes.INTEGER}

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};