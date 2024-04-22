const homePage = (req, res) => {
    res.render('./home/home', {nav: "home"})
}

const cartPage = (req, res) => {
    res.render('./home/cart')
}

const searchPage = (req, res) => {
    res.render('./home/search')
}

const findPage = (req, res) => {
    res.render('./home/find')
}



module.exports = { homePage, cartPage, searchPage, findPage }