const Admin = require('../models/Admin')
module.exports=(req,res) =>{
    User.create(req.body)
    .then(()=>{
        console.log(req.body)
        res.redirect('/auth/login')
    })
}