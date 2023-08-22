const { Sequelize } = require("sequelize")
const { development } = require("./config")

const sequelize = new Sequelize({
    ...development,
    logging:false,
    dialect:"mysql"
})

module.exports={
    sequelize,
    async connectDB(req,res,next){
        try {
            await sequelize.sync();
            await sequelize.authenticate();
            console.log("\t\tDB CONNECTED");
            next()
        } catch (error) {
            res.status(500).json({message:"Failed to connect database."})
        }
    }
}