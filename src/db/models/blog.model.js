const { DataTypes } = require("sequelize");
const { sequelize } = require("..");

const Blog = sequelize.define(
  "Blogs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    keywords: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    banner: {
      type: DataTypes.STRING,
    },
    blog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);


module.exports=Blog;