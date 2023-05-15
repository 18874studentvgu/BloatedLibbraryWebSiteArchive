const BorrowedBookSchema = require('../models/BorrowedBook')
module.exports=(req,res) =>{
    BorrowedBookSchema.findByIdAndUpdate(req.session.userId, { paymentAmount : 0 })
    .then((remain)=>{
        console.log(req.body)
        console.log(remain)
        console.log('Pay success')
        res.redirect('paySuccess')
    })
}