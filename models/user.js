const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true, dropDups: true},
    password: {type: String, required: true},                                   // ENCRYPTED PASSWORD
    permissions: {type: [String]},                                              // ALL PERMISSIONS A USER HAS
    
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},

    description: {type: String, required: false},                       
    adress: {type: String, required: false},                                    // ADRESS AS STRING             // ID'S OF CREATED RECIPES
    favouriteRecipes: {type: [mongoose.Types.ObjectId], ref: "Recipe", required: true},        // ID'S OF FAVOURITE RECIPES
    picture: {}
}, { versionKey: false })

module.exports = mongoose.model("user", userSchema)