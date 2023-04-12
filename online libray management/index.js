const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');

//idk what this is 
app.use(expressSession({
    secret: 'keyboard cat'
}))

//controller
const homeController = require('./controllers/home')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const loginController = require('./controllers/login')
const authController = require('./controllers/authUser')
const registerController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const emailConfPageController = require('./controllers/emailConfPage')
const sendConfEmailController = require('./controllers/sendConfEmail')
const resetPasswordPageController = require('./controllers/resetPasswordPage')
const resetPasswordController=require('./controllers/resetPassword')


//check logged in and newuser
global.loggedIn = null;
global.user1= null;
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

//get
app.get('/about', aboutController)

//contact
app.get('/contact', contactController)

//login
app.get('/auth/login', loginController)

//authUser
app.post('/users/login', authController)

//register
app.get('/auth/register', registerController)

//storeUser
app.post('/users/register', storeUserController)

//email confirmation page
app.get('/reset', emailConfPageController)

//send confirmation email
app.post('/reset/sendEmail', sendConfEmailController)

//user clicks on the unique link, go to reset password page
app.get('/reset/:id/:token', resetPasswordPageController)

//after user types in the new password, click reset
app.post('/reset/:id/:token/change', resetPasswordController)

//error page
app.use((req, res) => res.render('404')); 
