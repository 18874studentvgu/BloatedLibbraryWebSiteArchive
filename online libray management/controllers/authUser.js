const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports=(req,res)=>{
    const {username,password}=req.body
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            bcrypt.compare(password,user.password, (error,same)=>{
        //    .then((same)=>{
                if(same){
                    req.session.userId = user._id
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
            console.log("Failed")
            res.redirect('/auth/login')
        }
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
}