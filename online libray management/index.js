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
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const loginController = require('./controllers/login')
const authController = require('./controllers/authUser')
const registerController = require('./controllers/register')
const storeUserController = require('./controllers/storeUser')
const adminBooksListController = require('./controllers/admin/booksList')
const adminUsersListController = require('./controllers/admin/usersList')
const adminDashboardController = require('./controllers/admin/dashboard')

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

//get
app.get('/about', aboutController)

//contact
app.get('/contact', contactController)

//login
app.get('/login', loginController)

//authUser
app.get('/login/auth', authController)

//register
app.get('/register',registerController)

//storeUser
app.get('/register', storeUserController)

//get admin dashboard
app.get('/adminDashboard', adminDashboardController)

//get admin's list of total books
app.get('/adminBooksList', adminBooksListController)

//get admin's list of total users
app.get('/adminUsersList', adminUsersListController)