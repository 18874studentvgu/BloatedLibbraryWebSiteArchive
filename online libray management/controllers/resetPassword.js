const User = require("../models/User")
const jwt=require('jsonwebtoken')
const config=require('../controllers/config')
const userid=require('../controllers/resetPasswordPage')
const bcrypt=require('bcrypt')
//user clicks "reset password"
module.exports=(req,res)=>{
    console.log(global.userid)
    const{password,password2}=req.body
    User.findOne({_id:global.userid})
    .then((user)=>{
        console.log('User exist')
        const secret=config.secret+user.password
        console.log(secret)
        try{
            //const verify=jwt.verify(token,secret)
            if(password==password2){
                console.log('comparing')
                const encryptedPassword = bcrypt.hash(password, 10)
                User.updateOne(
                    {_id:global.userid},
                    {$set:{password:encryptedPassword}}
                )
                res.redirect('/auth/login')
            }
            else{
                console.log('Password not match, try again')
                res.render('resetPasswordPage')
            }
        }
        catch(error){
            console.log(error)
        }
    })
    .catch(()=>{
        console.log('User not exist')
    })
}