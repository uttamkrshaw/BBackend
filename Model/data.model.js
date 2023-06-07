const mongoose = require('mongoose')
const dataschema = mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Country: String,
    State: String,
    City: String,
    Gender: String,
    Date_of_Birth: Date,
    Age: Number
})

const DataModel = mongoose.model("data", dataschema)
module.exports = {
    DataModel
}
