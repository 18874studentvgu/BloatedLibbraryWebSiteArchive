const User = require("../models/User")

module.exports=(req,res)=>{
    const{id,token}=req.params
    User.findOne({id})
    .then((user)=>{
        console.log(user)
    })
    .catch(()=>{
        console.log('invalid id')
    })
}