const Recipe = require("../models/recipe");
const User = require("../models/user")

const profilePage = async (req, res) => {
    if(!req.query.id && !req.session?.passport?.user?._id) res.redirect("/entry")
    else {
        try {
            let id = req.query.id ? req.query.id : req.session.passport.user._id
            let isOwner = (req.query.id == req.session?.passport?.user?._id || !req.query.id)
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

const settingsPage = async (req, res) => {
    let user = await User.findById(req.session.passport.user._id, {password: 0, favouriteRecipes: 0, friends: 0})
    res.render('./profile/settings', {user})
}

const settings = async (req, res) => {

    let data = req.body;
    let id = data.id
    delete data.id;
    if(req.files){
        data["picture"] = req.files.photo.data;
    }
    try {
        console.log(data)
        let result = await User.findByIdAndUpdate(id, data);
        console.log(result)
        res.redirect("/profile")
    } catch{
        res.status(500).send("An error occured")
    }

}



module.exports = { profilePage, favourites, settingsPage, settings }