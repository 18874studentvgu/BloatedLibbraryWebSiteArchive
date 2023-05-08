const WishList = require('../models/WishList')
module.exports=(req,res) =>{
    if(loggedIn){
        console.log(req.body)
        WishList.create(req.body)
        .then(()=>{
            res.send({
            text:"sucessfully send"
            });
        })
    } else {
        console.log(req.body)
        res.send({
            text:"please login bro"
            });
    }
}
