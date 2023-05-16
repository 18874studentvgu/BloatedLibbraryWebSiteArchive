const mongoose = require('mongoose');

const BorrowRecordSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        //required: true
    },
    bookID: {
        type: mongoose.Types.ObjectId,
        //required: true
    },
    inventoryID: {
        type: mongoose.Types.ObjectId,
        //required: true
    },

    leaseDate: {
        type: Date,
        default:mongoose.now,
        //required: true
    },
    dueDate: {
        type: Date,
        //required: true
    },
    returnDate: {
        type: Date,
        default:null
    },
    paymentAmount: {
        type: Number,
        min: [0,'Payment cannot be <0, got {VALUE}.']
    },

    hasReturned: {type:Boolean, default:false}
},
{ timestamps: true});

BorrowRecordSchema.virtual('status')
    .get(function(){
        let today = new Date();
        if(this.returnDate == null)
            // if((new Date()).getTime() > Date(this.dueDate).getTime()){
            if((today) > Date(this.dueDate)){
                //Overdue!
                return 'overdue'
            } else {
                //ok?
                return 'borrowing'
            }
        else //book has been returned or soething went wrong?
            if(Date(this.leaseDate) > today)// this if - else might not be necessary
                return 'returned'
                else return 'canceled?'
    })
    .set(function (v) {
        switch (v.toLowerCase()) {
            case 'borrowing','overdue':
                this.set('returnDate',null);
                break;
            
                case 'returned','canceled?':
                    this.set('returnDate',new Date(),Date);
                    break;
        
            default:
                //unexpected value?!
                console.log("[db] BorrowRecords.status: Unexpected value: %s",v);
                break;
        }
    })

const BorrowRecord = mongoose.model('BorrowRecord',BorrowRecordSchema);
module.exports = BorrowRecord;
