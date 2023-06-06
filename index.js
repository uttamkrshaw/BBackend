require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {connection} = require('./Connection/connection')
const {dataRouter} = require('./Router/data.router')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/data", dataRouter)

app.get("/", (req, res) => res.send('<h1 style="text-align:center;color:black">Welcome to BlackCoffer Backend</h1>'))

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log(`Server is Running at ${
            process.env.port
        }`);
    } catch (error) {
        console.log(error);
    }
})
