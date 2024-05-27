const homePage = (req, res) => {
    res.render('./home/home', {nav: "home"})
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