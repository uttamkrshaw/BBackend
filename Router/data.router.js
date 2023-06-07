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
        console.log("payload",req.params)
        res.send(200).send("Testing")
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = {
    dataRouter
}
