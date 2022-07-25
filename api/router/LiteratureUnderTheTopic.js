const router = require("express").Router()
const LiteratureUnderTheTopic = require("../models/ukrLiteratureUnderTheTopicModels")

router.post("/", async(req, res, next)=>{
    const newLanguageUnderTheTopic = new LiteratureUnderTheTopic(req.body)
    try{
        const saveLanguageUnderTheTopic = await newLanguageUnderTheTopic.save()
        res.status(200).json(saveLanguageUnderTheTopic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/", async(req, res, next)=>{
    const title = req.query.title
    try {
        let uderthetopic;
        if(title){
            uderthetopic = await LiteratureUnderTheTopic.find({title})
        }else{
            uderthetopic = await LiteratureUnderTheTopic.find()
        }
        res.status(200).json(uderthetopic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res, next)=>{
    try{
        const UnderTheTopic = await LiteratureUnderTheTopic.findById(req.params.id)
        res.status(200).json(UnderTheTopic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/:userId", async (req, res, next)=>{
    try{
        const UnderTheTopic = await LiteratureUnderTheTopic.findById(req.params.id)
        res.status(200).json(UnderTheTopic)
    }catch (err){
        res.status(500).json(err)
    }
})

router.put("/:id", async (req, res, next)=>{
    try{
        const UnderTheTopic = await LiteratureUnderTheTopic.findById(req.params.id)
        try{
            const updateLanguageUnderTheTopic = await LiteratureUnderTheTopic.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})
            res.status(200).json(updateLanguageUnderTheTopic)
        }catch (err){
            res.status(500).json(err)
        }
    }catch (err){
        res.status(500).json(err)
    }
})

router.delete("/:id", async (req, res, next)=>{
    try{
        const UnderTheTopic = await LiteratureUnderTheTopic.findById(req.params.id)
        try{
            await UnderTheTopic.delete()
            res.status(200).json("Post has been delete")
        }catch (err){
            res.status(500).json(err)
        }
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router