const mongoose=require('mongoose')
const schema=mongoose.Schema
const bcrypt=require('bcrypt')

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const user=mongoose.model('user',userSchema)
module.exports=user