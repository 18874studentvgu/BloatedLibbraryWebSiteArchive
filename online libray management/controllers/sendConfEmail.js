const User=require('../models/User')
const jwtSecret='secret secret'

module.exports=(req,res)=>{
    const {email}=req.body

    User.findOne({email})
    .then((user)=>{
        // const secret=jwtSecret+user.password
        // const payload={email:user.email,id:user.id}
        console.log(email)
    })
}