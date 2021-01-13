'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Manga.belongsToMany(User, {through: 'User_Manga'});
    }
  };
  manga.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    resume: DataTypes.STRING,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    tome: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manga',
  });
  return Manga;
};