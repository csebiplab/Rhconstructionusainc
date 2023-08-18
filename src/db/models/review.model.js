const { DataTypes } = require("sequelize");
const { sequelize } = require("..");

const Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT, // Use TEXT for longer content
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  
  module.exports = Review;