const  express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const ejs = require('ejs')
const dbConnect = require('./dbConnect')
const dbModel = require('./users')

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/register',(req,res)=>{

})
const startServer=async()=>{
    await dbConnect.authenticate()
    try {
    app.listen(port, () => console.log(`Example app listening on port http://localhost:${port} !`))

    } catch (error) {
        console.log(error);
    }
} 

startServer()
