  'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    email: {type:DataTypes.STRING,unique:true},
    password: {type:DataTypes.STRING,allowNull:false},
    isAdmin: {type:DataTypes.BOOLEAN,allowNull:true,defaultValue:0}
  }, {
    sequelize,
    modelName: 'User',
  }
  );
  return User;
};

// const { Model, DataTypes,Sequelize } = require('sequelize');



// class User extends Model {}

// User.init({
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true
//     }
//   },
//   password: {
//     type: DataTypes.STRING,
//     validate: {
//       allowNull: false
//     }
    
//   }
// }, {
//   sequelize,
//   modelName: 'User'
// });

// module.exports = User;


