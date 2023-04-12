const mongoose = require('mongoose')
const User = require('../models/User')
module.exports = (req, response) => {
        console.log(req.session)
        response.render('index')
        
        //get user1 after login
        var id = mongoose.Types.ObjectId(loggedIn)
        User.findOne({_id : id})
        .then((user)=>{
            if(user){
                user1 = user.username;
                console.log('sucess')
                console.log(user1)
            }
            else {
                console.log('failed')
            }
        })
        .catch((error,user) =>{
            console.log(error,user)
        })   
}
