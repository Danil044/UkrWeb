const mongoose = require("mongoose")

const UkrLanguageUnderTheTopicSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    textOne:{
        type: String,
        required: true,
    },
    photoOne:{
        type: String,
        required: false,
    },
    textTwo:{
        type: String,
        required: false,
    },
    photoTwo:{
        type: String,
        required: false,
    },
    textThree:{
        type: String,
        required: false,
    },
    photoThree:{
        type: String,
        required: false,
    },
    linksURL:{
        type: String,
        required: false,
    },
    exercise:{
        type: String,
        required: false,
    },
    topic:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: false,
    }
}, {timestamps: true})

module.exports = mongoose.model("UkrLanguageUnderTheTopic", UkrLanguageUnderTheTopicSchema)