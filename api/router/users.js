const router = require('express').Router()
const User = require("../models/userModels")
const LitUnderTheTopic = require("../models/ukrLiteratureUnderTheTopicModels")
const LanUnderTheTopic = require("../models/ukrLanguageUnderTheTopicModels")
const bcrypt = require("bcrypt")

router.put("/:id", async(req, res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json(updateUser)
    }catch (err){
        res.status(500).json(err);
    }
})

router.delete("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        try{
            await LitUnderTheTopic.deleteMany({userId: user._id})
            await LanUnderTheTopic.deleteMany({userId: user._id})
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been delete")
        }catch (err){
            res.status(500).json(err);
        }
    }catch (err){
        res.status(404).json("User not found!")
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router