const recipePage = (req, res) => {
    res.render('./recipe/recipe')
}

const reviewPage = (req, res) => {
    res.render('./auth/review')
}

const review = (req, res) => {
    res.status(200).send("Succes")
}

const reviewsPage = (req, res) => {
    res.render('./auth/reviews')
}

const submitPage = (req, res) => {
    res.render('./auth/submit')
}

const submit = (req, res) => {
    res.status(200).send("Succes")
}


module.exports = { recipePage, reviewPage, review, reviewsPage, submitPage, submit }