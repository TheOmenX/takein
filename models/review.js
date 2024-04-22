const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    userID: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    recipeID: {type: mongoose.Types.ObjectId, ref: "Recipe", required: true},
    rating: {type: Number, min: 1, max: 5, required: true},
    description: {type: String}
}, { versionKey: false})

module.exports = mongoose.model("recipe", recipeSchema)
