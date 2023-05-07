const WishList = require('../models/WishList')
module.exports=(req,res) =>{
    if(loggedIn){
        WishList.create(req.body)
        .then(()=>{
            res.send({
            text:"sucessfully send"
            });
        })
    } else {
        res.send({
            text:"please login bro"
            });
    }
}
