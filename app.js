const  express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const ejs = require('ejs')
const dbConnect = require('./dbConnect')
const dbModel = require('./users')
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.get('/',async(req,res)=>{
    const users = await dbModel.findAll()
    const records =users.map((v)=>{return v.dataValues})
    res.render('index',{records})
})
app.post('/register',async(req,res)=>{
    const {first_name,last_name,age}= req.body
    await dbModel.create({first_name,last_name,age})
    res.redirect('/')
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
