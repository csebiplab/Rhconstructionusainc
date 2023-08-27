const { DataTypes } = require("sequelize");
const { sequelize } = require("..");

const Category= sequelize.define('Category',  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps:true,
    freezeTableName:true,
  });

  module.exports=Category;