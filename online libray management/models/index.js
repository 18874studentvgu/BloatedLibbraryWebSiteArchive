const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');
//idk what this is 
app.use(expressSession({
    secret: 'keyboard cat'
}))

//controller

const homeController = require('./controllers/home')


//check logged in and newuser
global.loggedIn = null;
app.use('*', (req, res, next) => {    
    loggedIn = req.session.userId;    
    next()
});

//middleware

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 


app.set('view engine','ejs')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
}) 




//home and post preview
app.get('/', homeController)
app.get('/index', homeController)

