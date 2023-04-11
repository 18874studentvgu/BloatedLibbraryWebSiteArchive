const User=require('../models/User')
const jwtSecret='secret secret'

module.exports=(req,res)=>{
    const {email}=req.body

    //User.findOne({email})
    //.then((user)=>{
        //const secret=jwtSecret+user.password
        const payload={email:user.email,id:user.id}
        console.log(email)
        const token=jwt.sign(payload,secret,{expiresIn:'5m'})
        const link='http://localhost:3000/reset/${user.id}/${token}'
        res.send('Password reset link has been sent')
    //})
}