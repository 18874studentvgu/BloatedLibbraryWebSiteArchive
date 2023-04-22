//user clicks the link
const jwt=require('jsonwebtoken')
const User=require('../models/User')
const jwtSecret='secret secret'

//before redirecting to the page, check first
module.exports = (req,res) => {
    const {id,token}=req.params
    console.log(req.params)
    User.findOne({_id:id}) //check id, if id exists means that user exists
    .then((user)=>{
        console.log("Id match, user exist")
        console.log("checking token")
        const secret=jwtSecret+user.password
        //validate jwt token
        try{
            const verify=jwt.verify(token,secret)
            res.render('resetPasswordPage',{email:verify.email})
            console.log('Verified token')
        }
        catch(error){
            console.log("Invalid token")
            console.log("Error: "+error.message)
            res.render('404')
        }
    })
    .catch(()=>{
        console.log("Invalid id, no user found")
    })
}