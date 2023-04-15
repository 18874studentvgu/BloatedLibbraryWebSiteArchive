const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret='secret secret'

module.exports=(req,res)=>{
    const {email}=req.body
    User.findOne({email:'17000@student.vgu.edu.vn'})
    .then((user)=>{
        const payload={email:user.email,id:user._id}
        console.log(user.email)
        const token=jwt.sign(payload,jwtSecret,{expiresIn:'5s'})
        const link=`http://localhost:3000/reset/${user.id}/${token}`
        res.send(`Password reset link has been sent to ${user.email}`)
        console.log(link)
        const secret=jwtSecret+user.password
    })
    .catch(()=>{
        console.log('User not exist')
        res.redirect('/reset')
    })
}