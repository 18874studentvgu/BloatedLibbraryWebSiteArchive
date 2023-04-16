const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')
const mongoose = require('mongoose')

module.exports=(req,res)=>{
    const {userName,password}=req.body;
    Admin.findOne({userName: userName})
    .then((admin)=>{
        //console.log(User);
        if(admin){
            bcrypt.compare(password,admin.password)
       .then((same)=>{
                if(same){
                    //get username
                    user1 = admin.userName;
                    console.log('sucess')
                    console.log(user1)
                    req.session.userId = admin._id
                    res.redirect('/')
                    loggedInAdmin = admin._id
                }
                else{
                    console.log("Failed")
                    res.redirect('/auth/loginAdmin')
                }
            })
        }
    })
    .catch((error,admin) =>{
        console.log(error,admin)
    })
}