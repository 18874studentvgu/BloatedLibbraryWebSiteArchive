const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret='secret secret'

let user={
    id:"jreodd",
    email:"dodinhdong28092002@gmail.com",
    password:"1111"
}
module.exports=(req,res)=>{
    const payload={email:user.email,id:user.id}
    console.log(user.email)
    const token=jwt.sign(payload,jwtSecret,{expiresIn:'5m'})
    const link='http://localhost:3000/reset/${user.id}/${token}'
    res.send('Password reset link has been sent')
    console.log(user.id,token)

    //valid id
    const secret=jwtSecret+user.password
    try{
        const payload=jwt.verify(token,secret)
        res.render('passwordResetPage')
    }
}