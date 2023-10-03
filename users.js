const {Sequelize,DataTypes} = require('sequelize')
const dbConnect = require ('./dbConnect')
const users = dbConnect.define('users',{
    id:{
        primaryKey:true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
users.sync({force:true})
module.exports= users