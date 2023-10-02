const {Sequelize} = require('sequelize')
const DB_USER = process.env.DB_USER
const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const sequel = new Sequelize({DB_NAME,DB_USER,DB_PASSWORD,
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequel