const homePage = (req, res) => {
    res.render('./home/home', {nav: "home", test: [{name: "Lasanga", desc: "stack", rating: 5, no_rating: 582, nutriscore: 4}]})
}

const cartPage = (req, res) => {
    res.render('./home/cart', {nav: ""})
}

const searchPage = (req, res) => {
    res.render('./home/search', {nav: "search"})
}

const findPage = (req, res) => {
    res.render('./home/find', {nav: "location"})
}



module.exports = { homePage, cartPage, searchPage, findPage }