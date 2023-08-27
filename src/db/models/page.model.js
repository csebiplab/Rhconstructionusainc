const { DataTypes } = require("sequelize");
const { sequelize } = require("..");

const Page = sequelize.define('page', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keywords: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    freezeTableName:true,
    timestamps:true,
  });
  module.exports=Page;