const mongoose = require("mongoose")
const tennisSchema = mongoose.Schema({
Player_Name: String,
Player_Age : String,
No_Of_Matches_Played: Number
})
module.exports = mongoose.model("tennis",tennisSchema)