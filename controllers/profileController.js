const Recipe = require("../models/recipe");
const User = require("../models/user")

const profilePage = async (req, res) => {
    if(!req.query.id && !req.session?.passport?.user?._id) res.redirect("/entry")
    else {
        try {
            let id = req.query.id ? req.query.id : req.session.passport.user._id
            let isOwner = (req.query.id == req.session?.passport?.user?._id);
            let user = await User.findById(id)

            let favouriteRecipes = [];
            for(recipe of user.favouriteRecipes){
                favouriteRecipes.push(await Recipe.findById(recipe));
            }
            let leftovers = [];

            res.render('./profile/profile', {user, isOwner, favouriteRecipes, leftovers})
        } catch (error) {
            res.status(401).send("An error occured.")
            console.log(error)
        }
    }
}

const favourites = (req, res) => {
    res.render('./profile/favourites')
}

const settingsPage = (req, res) => {
    res.render('./profile/settings')
}

const settings = (req, res) => {
    res.status(200).send("Succes")
}



module.exports = { profilePage, favourites, settingsPage, settings }