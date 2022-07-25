const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')
const authRouter = require("./router/auth")
const userRoute = require('./router/users')
const LanTopicRouter = require("./router/LanguageTopic")
const LitTopicRouter = require("./router/LiteratureTopic")
const LanUnderTheTopicRouter = require("./router/LanguageUnderTheTopic")
const LitUnderTheTopicRouter = require("./router/LiteratureUnderTheTopic")
const path = require("path");
const multer = require("multer");

app.use(cors())

dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRoute)
app.use("/api/LanTopic", LanTopicRouter)
app.use("/api/LitTopic", LitTopicRouter)
app.use("/api/LanUnderTheTopic", LanUnderTheTopicRouter)
app.use("/api/LitUnderTheTopic", LitUnderTheTopicRouter)

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Backend is running")
})