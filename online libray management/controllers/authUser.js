const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports=(req,res)=>{
    const {username,password}=req.body
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            bcrypt.compare(password,user.password)
            .then((same)=>{
                if(same){
                    console.log("Successful")
                    res.redirect('/')
                }
                else{
                    console.log("Failed")
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
}