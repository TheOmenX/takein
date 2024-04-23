const Recipe = require("../models/recipe");

const profilePage = async (req, res) => {
    console.log(req.user)

    for(recipeId of req.user.favouriteRecipes) {
        recipe = await Recipe.findById(recipeId);
        console.log(recipe)
    }

    res.render('./profile/profile', { nav: "profile"})
}

const favouritesPage = (req, res) => {
    res.render('./profile/favourites')
}

const settingsPage = (req, res) => {
    res.render('./profile/settings')
}

const settings = (req, res) => {
    res.status(200).send("Succes")
}



module.exports = { profilePage, favouritesPage, settingsPage, settings }