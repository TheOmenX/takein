const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String, required: false},
}, { versionKey: false, _id: false })


const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    nutriscore: {type: Number, required: false, min: [1, "Nutriscore cannot be less than 1."], max: [5, "Nutriscore cannot be more than 5."]},

    ingredients: {type: [productSchema], required: true, 
        validate: [(val) => val.length > 0, 'Ingredients cannot be empty.']
    },
    steps: {type: [String], required: true, 
        validate: [(val) => val.length > 0, 'Steps cannot be empty.']
    },
    verified: {type: Boolean}


}, { versionKey: false})

module.exports = mongoose.model("recipe", recipeSchema)
