const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')
const mongoose = require('mongoose')

module.exports=(req,res)=>{
    const {username,password}=req.body
    Admin.findOne({username: username})
    .then((admin)=>{
        //console.log(User);
        if(admin){
            bcrypt.compare(password,admin.password)
       .then((same)=>{
                if(same){
                    //get username
                    const admin1 = admin.username;
                    console.log('sucess')
                    console.log(admin1)
                    req.session.adminId = admin._id
                    //console.log("Successful")
                    res.redirect('/')
                   
                }
                else{
                    //console.log("Failed")
                    res.redirect('/auth/loginAdmin')
                }
            })
        }
    })
    .catch((error,admin) =>{
        console.log(error,admin)
    })
}