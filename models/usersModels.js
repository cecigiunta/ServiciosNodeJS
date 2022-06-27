const mongoose = require('../bin/mongodb');
const errorMessages = require('../utils/errorMessages');
const bcrypt = require ('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, errorMessages.General.obligatorio],
        index: true
    },
    lastName: {
        type: String,
        required: [true, errorMessages.General.obligatorio],
    },
    email: {
        type: String,
        required: [true, errorMessages.General.obligatorio],
        unique: true
    },
    password: {
        type: String,
        required: [true, errorMessages.General.obligatorio],
    },
    rol: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})

userSchema.pre("save", function (next){ 
    this.password = bcrypt.hashSync(this.password, 10)
    next ()
})
module.exports = mongoose.model("users", userSchema)