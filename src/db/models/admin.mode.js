const { DataTypes } = require("sequelize");
const { sequelize } = require("..");

const Admin= sequelize.define(
    'admin',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            unique:true,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        role:{
            type: DataTypes.ENUM("ADMIN","MODERATOR"),
            defaultValue:"ADMIN",
            allowNull:false
        }
    }
,{
    timestamps:true,
    freezeTableName: true
});

module.exports=Admin;