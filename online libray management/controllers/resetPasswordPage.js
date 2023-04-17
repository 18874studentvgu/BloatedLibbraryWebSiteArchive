//user clicks the link
const jwt=require('jsonwebtoken')
const User=require('../models/User')
const jwtScr=require('./sendConfLink')
console.log(jwtScr.jwtSecret)
module.exports = (req, res) => {
    const {id,token,email}=req.params
    console.log(req.params)
    console.log('checking id')
    User.findOne({id,email}) //check id, if id exists means that user exists
    .then(()=>{
        const secret=jwtScr.jwtSecret+User.password //this is from sendConfEmail.js
        //validate jwt token
        try{
            const payload=jwt.verify(token,secret)
            res.render('resetPasswordPage')
            console.log('token match')
        }
        catch(error){
            console.log(error.message)
            res.render('404')
        }
    })
}