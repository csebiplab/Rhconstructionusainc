import { DataTypes }  from "sequelize";

const Blogs = sequelize.define("Blogs",{
    id:{
        type:DataTypes.INTEGER,
    }
})