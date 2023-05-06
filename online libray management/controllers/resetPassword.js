const User = require("../models/User")
const jwt=require('jsonwebtoken')
const config=require('../controllers/config')
const userid=require('../controllers/resetPasswordPage')
//user clicks "reset password"
module.exports=(req,res)=>{
    console.log(userid.userid)
    console.log(config.secret)
    const{password,password2}=req.body
    User.findOne({_id:userid})
    .then((user)=>{
        console.log('User exist')
        const secret=config.secret+user.password
        try{
            const verify=jwt.verify(token,secret)
            if(password==password2){
                const encryptedPassword = bcrypt.hash(password, 10)
                User.updateOne(
                    {_id:id},
                    {$set:{password:encryptedPassword}}
                )
                res.redirect('/login')
            }
            else{
                console.log('Password not match, try again')
                res.render('resetPasswordPage')
            }
        }
        catch{
            console.error()
        }
    })
    .catch(()=>{
        console.log('User not exist')
    })
}