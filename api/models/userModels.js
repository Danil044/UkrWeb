const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    mail:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        defaultValue: 'USER',
    }
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)