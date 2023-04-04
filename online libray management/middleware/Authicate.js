const User = require('../models/User')
module.exports = (req, res, next) => {

    User.findById(req.session.userId)
        .then((user)=>{
            next()
        })
        .catch((error, user)=>{
            if (error || !user){
                return res.redirect('/')
            }
            next()
        })
}