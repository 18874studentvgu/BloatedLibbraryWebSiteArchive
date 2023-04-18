const User=require('../models/User')
const jwt=require('jsonwebtoken')
const jwtSecret='secret secret'
const sendEmail=require('../controllers/sendEmail')


module.exports=(req,res)=>{
    const{email}=req.body
    console.log(email)
    User.findOne({email:email})
    .then((user)=>{
        console.log(user.email)
        const token=jwt.sign({email:user.email,_id:user.id},jwtSecret,{expiresIn:'1m'})
        const link=`http://localhost:3000/reset/${user.id}/${token}`
        res.send(`Password reset link has been sent to ${user.email}`)
        console.log(link)
        /*sendEmail(user.email,
        'Password reset link',
        `Here is your password reset link: ${link}`)*/
    })
    .catch(()=>{
        console.log('User not exist')
        res.redirect('/reset')
    })
}