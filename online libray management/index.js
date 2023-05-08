const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');

var http = require('http').createServer(app);
var io = require('socket.io')(http);

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
const storeReviewController = require('./controllers/storeReview')
const loginAdminController = require('./controllers/loginAdmin')
const authAdminController = require('./controllers/authAdmin')
const regisAdminController = require('./controllers/regisAdmin')
const storeAdminController = require('./controllers/storeAdmin')
const emailConfPageController = require('./controllers/emailConfPage')
const sendConfLinkController = require('./controllers/sendConfLink')
const resetPasswordPageController = require('./controllers/resetPasswordPage')
const resetPasswordController=require('./controllers/resetPassword')
const userProfileController=require('./controllers/userProfile')
const userProfileSettingController=require('./controllers/userProfileSetting')
const bookInfoController=require('./controllers/bookInfo')
const logout=require('./controllers/logout')
const wishlist = require('./controllers/AddToWishlist')
const updateAccount = require('./controllers/updateAccount')
const adminDashboard = require('./controllers/admin/dashboard')
const adminUserDashboard = require('./controllers/admin/usersList')
const adminBookDashboard = require('./controllers/admin/booksList')

//check logged in and newuser
global.loggedIn = null;
global.user1= null;
global.loggedInAdmin= null;
app.use('*', (req, res, next) => {    
    loggedIn = req.session.userId;
    next()

});



    


//cookies
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 


app.set('view engine','ejs')

io.on("connection", function(socket){
    console.log("user connected");
    socket.on("new_comment", function(reviews, userName, body, rating){
        io.emit("new_comment", reviews, userName, body, rating);
    })
});

app.use(express.static('public'))

http.listen(3000, () => {
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

//loginAdmin
app.get('/auth/loginAdmin', loginAdminController)

//authAdmin
app.post('/admins/loginAdmin', authAdminController)

//regisAdmin
app.get('/auth/regisAdmin', regisAdminController)

//storeAdmin
app.post('/admins/regisAdmin', storeAdminController)

//email confirmation page
app.get('/reset', emailConfPageController)

//send confirmation link to email
app.post('/reset/sendLink', sendConfLinkController)

//check token, id, user, then redirect to reset password
app.get('/reset/:id/:token', resetPasswordPageController)

//after user types in the new password, click reset
app.post('/reset/:id/:token', resetPasswordController)

//userprofile
app.get('/user_profile', userProfileController)
app.get('/user_profile_setting', userProfileSettingController)

//update account
app.post('/users/change', updateAccount)

//logout
app.get('/auth/logout', logout)

//bookInfo
app.get('/book-info', bookInfoController)

//store user review
app.post('/users/review', storeReviewController)

//add to wishlist
app.post('/users/wishlist', wishlist)

//admin dashboard
app.get('/adminDashboard', adminDashboard)

//admin users dashboard
app.get('/adminUsersList', adminUserDashboard)

//admin books dashboard
app.get('/adminBooksList', adminBookDashboard)

//error page
app.use((req, res) => res.render('404')); 