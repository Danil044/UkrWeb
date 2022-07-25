const mongoose = require("mongoose")

const UkrLiteratureTopicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("ukrLiteratureTopic", UkrLiteratureTopicSchema)