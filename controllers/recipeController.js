const Recipe = require("../models/recipe");
const Review = require("../models/review");
const mongoose = require("mongoose");


const recipe = async (req, res) => {
    const ids = req.body.ids 
    
    let recipes = []
    if(ids.length > 0){
    for(id of ids){
            recipes.push(await Recipe.findById(id))
        }
    }

    res.send(recipes)

}

const recipePage = async (req, res) => {
    let id = req.query.id
    let data = await Recipe.findById(id)
    if(!id || !data) res.redirect("/");

    let user = req.session?.passport?.user
    let userReview;
    let canEdit = false;
    if(user) {
        let userID = user._id
        userReview = await Review.findOne({userID, recipeID: id})
        if(data.owner = user._id || user.permissions.contains("ADMIN")){
            canEdit = true;
        }
    }



    data.no_ratings = await Review.countDocuments({recipeID: id})
    let recipeID = new mongoose.Types.ObjectId(id)
    data.rating = (await Review.aggregate([
        { $match: {recipeID}},
        { $group: {_id:"$recipeID", average: {$avg: '$rating'}}}
    ]))[0].average
    res.render('./recipe/recipe', {data, userReview, canEdit})
}

const reviewPage = (req, res) => {

    res.render('./recipe/review')
}

const review = (req, res) => {
    let data = req.body;
    try {
        if(!req.session?.passport?.user) {
            res.statusMessage ='User not logged in'
            res.status(403).send()
        }
        data["userID"] = req.session.passport.user
        Review.create(data)
            .then(() => {
                console.log("succes")
                res.status(200).send("Succes")
            }).catch((err) =>{
                console.log(err)
                res.status(500).statusText("An internal error occured")
            })

    } catch (error) {
        console.log(error)
    }
}

const reviewsPage = (req, res) => {
    res.render('./recipe/reviews')
}

const submitPage = async (req, res) => {
    let id = req.query.id
    let data = await Recipe.findById(id)
    if(!id || !data) res.redirect("/");


    res.render('./recipe/submit', {data})
}

const submit = async (req, res) => {
    let data = {
        title: req.body.title,
        description: req.body.description,
        ingredients: [],
        steps: []
    }

    
    for(key in req.body){
        if(key.includes("name")){
            if(req.body[key]) data.ingredients.push({
                name: req.body[key],
                link: req.body[`link-${key.split("-")[1]}`]
            })
        }else if(key.includes("step")){
            if(req.body[key]) data.steps.push(req.body[key])

        }
    }

    if(req.files){
        data["image"] = req.files.photo.data;
    }

    console.log(data);
    await Recipe.findByIdAndUpdate(req.body.id, data);


    res.status(200).redirect(`/recipe?id=${req.body.id}`)
}


module.exports = { recipe, recipePage, reviewPage, review, reviewsPage, submitPage, submit }