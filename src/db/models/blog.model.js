const { DataTypes } = require("sequelize");
const { sequelize } = require("..");
const Comment = require("./Comment.model");
const Category = require("./category.model");

const Blog = sequelize.define(
  "Blogs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    categoryId:{
      type:DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
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
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
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

Blog.hasMany(Comment,{foreignKey:"blog_id"})
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Blog.belongsTo(Category, {
  foreignKey: 'categoryId', // The foreign key column in the Blog table
  onDelete: 'NO ACTION',    // Prevent any action on deletion
  onUpdate: 'CASCADE',      // When a category is updated, update the categoryId in the Blog table
});

module.exports=Blog;