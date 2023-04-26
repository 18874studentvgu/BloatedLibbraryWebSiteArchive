const User = require("../models/User")
const jwt=require('jsonwebtoken')
const config=require('../controllers/config')

module.exports=(req,res)=>{
    const{id,token}=req.params
    console.log(req.params)
    const{password,password2}=req.body
    User.findOne({_id:id})
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
                res.redirect('/reset/:id/:token')
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