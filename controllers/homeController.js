const Recipe = require("../models/recipe");
const Review = require("../models/review")
const fs = require("fs")

const homePage = async (req, res) => {  
    var data = await Recipe.find({});
    res.render('./home/home', {nav: "home", test: data})
}

const cartPage = (req, res) => {
    res.render('./home/cart', {nav: ""})
}

const searchPage = async (req, res) => {
    rating = await Review.aggregate(
        [{ $group: { _id: '$_id', rating: {$avg: "$rating"} } }]
    ).exec()
    console.log(rating)

    res.render('./home/search', {nav: "search"})
}

const findPage = (req, res) => {
    res.render('./home/find', {nav: "location"})
}



module.exports = { homePage, cartPage, searchPage, findPage }