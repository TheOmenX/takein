const Recipe = require("../models/recipe");
const Review = require("../models/review");

const homePage = async (req, res) => {  
    let hotRecipes = [];

    let filterDate = new Date()
    filterDate.setDate(filterDate.getDate() - 14);
    let ratings = await Review.aggregate([
        { $match: { createdAt: {$gte: filterDate}}},
        { $group: { _id: '$recipeID', rating: {$avg: "$rating"}, count: {$count: {}}} }
    ]).exec()

    ratings.sort((a,b) => b.count - a.count)
    ratings.sort((a,b) => b.rating - a.rating)
    for(rating of ratings.slice(0,2)){
        let recipe = await Recipe.findById(rating)
        recipe["rating"] = rating.rating
        recipe["no_ratings"] = rating.count
        hotRecipes.push(recipe)
    }
    let newRecipes = await Recipe.find({}, {}, {sort: {createdAt: -1}}).limit(2)

    res.render('./home/home', {nav: "home", hotRecipes, newRecipes})
}

const cartPage = (req, res) => {
    res.render('./home/cart', {nav: ""})
}

const searchPage = async (req, res) => {

    rating = await Review.aggregate(
        [
            { $group: { _id: '$recipeID', rating: {$avg: "$rating"}} }
        ]
    ).exec()

    res.render('./home/search', {nav: "search"})
}

const findPage = (req, res) => {
    res.render('./home/find', {nav: "location"})
}



module.exports = { homePage, cartPage, searchPage, findPage }