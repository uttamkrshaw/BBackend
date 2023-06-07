const express = require('express')
const dataRouter = express.Router()
const {DataModel} = require("../Model/data.model")

dataRouter.get('/get', async (req, res) => {
    try {
        const data = await DataModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})

dataRouter.post('/add', async (req, res) => {
    try {
        const {
            First_Name,
            Last_Name,
            Email,
            Country,
            State,
            City,
            Gender,
            Date_of_Birth,
            Age
        } = req.body
        const user = new DataModel({
            First_Name,
            Last_Name,
            Email,
            Country,
            State,
            City,
            Gender,
            Date_of_Birth,
            Age
        })
        await user.save()
        res.send(200).send("User Added In The Database")
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = {
    dataRouter
}
