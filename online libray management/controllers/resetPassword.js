const User = require("../models/User")

module.exports=(req,res)=>{
    const{is,token}=req.params

    const secret=jwtSecret+User.password
}