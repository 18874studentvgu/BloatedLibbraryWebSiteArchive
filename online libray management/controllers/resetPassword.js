const User = require("../models/User")
const jwtScr=require('./sendConfLink')

module.exports=(req,res)=>{
    const{id,token}=req.params
    const {password,password2}=req.body
    module.exports = (req, res) => {
        const {id,token,email}=req.params
        console.log(req.params)
        console.log('checking id')
        User.findOne({id}) //check id, if id exists means that user exists
        .then((user)=>{
            console.log("id match")
            const secret=jwtScr.jwtSecret+User.password //this is from sendConfEmail.js
            //validate jwt token
            try{
                const payload=jwt.verify(token,secret)
                console.log('token match')
                user.password=password
                console.log(user)
            }
            catch(error){
                console.log("Error: "+error.message)
                res.render('404')
            }
        })
        .catch(()=>{
            console.log("invalid id")
        })
    }
}