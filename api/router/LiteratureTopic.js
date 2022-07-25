const router = require("express").Router()
const LiteratureTopic = require("../models/ukrLiteratureTopicModels")
const LitUnderTheTopic = require("../models/ukrLiteratureUnderTheTopicModels");
const LanguageTopic = require("../models/ukrLanguageTopicModels");

router.post("/", async(req, res, next)=>{
    const newTopic = new LiteratureTopic(req.body)
    try{
        const saveTopic = await newTopic.save()
        res.status(200).json(saveTopic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res, next)=>{
    try{
        const topic = await LiteratureTopic.findById(req.params.id)
        res.status(200).json(topic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/", async(req, res, next)=>{
    try{
        const topic = await LiteratureTopic.find()
        res.status(200).json(topic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/", async(req, res, next)=>{
    const name = req.query.name
    try{
        let topic
        if(name){
            topic = await LiteratureTopic.find({name})
        }else{
            topic =await LiteratureTopic.find()
        }
        res.status(200).json(topic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.put("/:id", async(req, res, next)=>{
    try{
        try{
            const updateTopic = await LiteratureTopic.findByIdAndUpdate(req.params.id,{
                $set: req.body
            }, {new: true})
            res.status(200).json(updateTopic)
        }catch (err){
            res.status(500).json(err)
        }
    }catch (err){
        res.status(500).json(err)
    }
})

router.delete("/:id", async(req, res, next)=>{
    try{
        const topic = await LiteratureTopic.findById(req.params.id)
        try{
            await LitUnderTheTopic.deleteMany({topic: topic._id})
            await LiteratureTopic.findByIdAndDelete(req.params.id)
            res.status(200).json("Topic has been delete")
        }catch (err){
            res.status(500).json(err);
        }
    }catch (err){
        res.status(404).json("Topic not found!")
    }
})

module.exports = router