const mongoose = require('mongoose')
const dataschema = mongoose.Schema({
    end_year:Number,
    intensity: Number,
    secto: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year:Number,
    impact: Number,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: Number,
    likelihood: Number
})

const DataModel = mongoose.model("data", dataschema)
module.exports = {
    DataModel
}
