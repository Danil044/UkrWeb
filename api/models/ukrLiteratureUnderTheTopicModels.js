const mongoose = require("mongoose")

const UkrLiteratureUnderTheTopicSchema = new mongoose.Schema({
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
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("ukrLiteratureUnderTheTopic", UkrLiteratureUnderTheTopicSchema)