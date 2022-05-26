import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    password: {
        type: String,
        required: [true, 'you must enter a password'],
        minlength: 8,
        // this will make sure that the pass never show any where when we send requset or when we signup {this is for security}
        select: false,
    },
    email: {
        type: String,
        required: [true, 'you must enter an email'],
        unique: true,
        validate: [validator.isEmail, 'please provide a valid email'],
    },
    isAdim: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)


export default User
