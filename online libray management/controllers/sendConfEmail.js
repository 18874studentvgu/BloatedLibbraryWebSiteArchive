const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret='secret secret'


module.exports=(req,res)=>{
    const {email}=req.body
    User.findOne({email})
    .then((user)=>{
        const payload={email:user.email,id:user.id}
        console.log(user.email)
        const token=jwt.sign(payload,jwtSecret,{expiresIn:'5m'})
        const link=`http://localhost:3000/reset/${user.id}/${token}`
        res.send(`Password reset link has been sent to ${user.email}`)
        console.log(link)
    })
    .catch(()=>{
        console.log('User not exist')
        res.redirect('/reset')
    })

    //valid id
    const secret=jwtSecret+user.password
    try{
        const payload=jwt.verify(token,secret)
        res.render('passwordResetPage')
    }
    catch(error){
        console.log(error.message)
    }
}