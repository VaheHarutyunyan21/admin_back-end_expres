//   'use strict';
// const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//     }
//   }
//   User.init({
//     email: {type:DataTypes.STRING,unique:true},
//     password: {type:DataTypes.STRING,allowNull:false},
//     isAdmin: {type:DataTypes.BOOLEAN,allowNull:true,defaultValue:0}
//   }, {
//     sequelize,
//     modelName: 'User',
//   }
//   );
//   return User;
// };

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {type:DataTypes.STRING,allowNull:false,unique:true},
    password: {type:DataTypes.STRING,allowNull:false},
    isAdmin: {type:DataTypes.BOOLEAN,allowNull:true,defaultValue:0}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


