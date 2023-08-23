const { DataTypes } = require("sequelize");
const { sequelize } = require("..");
const Blog = require("./blog.model");

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Comment;
