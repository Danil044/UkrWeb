const mongoose = require("mongoose")

const UkrLanguageTopicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("UkrLanguageTopic", UkrLanguageTopicSchema)