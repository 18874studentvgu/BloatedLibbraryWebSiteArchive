const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret='secret secret'
const sendEmail=require('../controllers/sendEmail')
module.exports={jwtSecret}

module.exports=(req,res)=>{
    const{email}=req.body
    console.log(email)
    User.findOne({email:email})
    .then((user)=>{
        const payload={email:user.email,id:user._id}
        console.log(user.email)
        const token=jwt.sign(payload,jwtSecret,{expiresIn:'30s'})
        const link=`http://localhost:3000/reset/${user.id}/${token}`
        res.send(`Password reset link has been sent to ${user.email}`)
        sendEmail(user.email,
        'Password reset link',
        `Here is your password reset link: ${link}`)
    })
    .catch(()=>{
        console.log('User not exist')
        res.redirect('/reset')
    })
}