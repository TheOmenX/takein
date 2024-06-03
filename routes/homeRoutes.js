/*
ROUTE FOR PAGES (/):
    - Home Screen (4):      /
    - Shopping Cart (5):    /cart
    - Seach Screen (13):    /search
    - Location (14):        /find
*/

const express = require('express')
const router = express.Router()
//const {  } = require('../middleware/authMiddleware')
const { homePage, cartPage, searchPage, findPage } = require('../controllers/homeController')

router.get('/', homePage)

router.get('/cart', cartPage)

router.get('/search', searchPage)

router.get('/find', findPage)


module.exports = router