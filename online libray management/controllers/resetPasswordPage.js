const jwt=require('jsonwebtoken')
const User=require('../models/User')

const {id,token}=req.params
    console.log('checking id')

module.exports = (req, res) => {
    User.findOne({id}) //check id, if id exists means that user exists
    .then(()=>{
        const secret=jwtSecret+User.password //this is from sendConfEmail.js
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