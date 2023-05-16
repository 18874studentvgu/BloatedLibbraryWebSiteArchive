const WishList = require('../models/WishList')
module.exports=(req,res) =>{
    if(loggedIn){
        console.log(req.body)
        // WishList.create(req.body)
        // .then(()=>{
        //     res.send({
        //     text:"sucessfully send"
        //     });
        let uid= req.body.userID;
        console.log(req.body.userID);
        let book = {
            'bookID': req.body.bookID,
            'bookName': req.body.bookName,
            'Author': [req.body.Author]
        }
        console.log(req.body.Author);
        console.log(book);
        WishList.findOneAndUpdate({'userID': uid}, {$push: {'books': book}},{upsert:true})
        .catch((error)=> console.log(error))
        .then((book)=>{
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
