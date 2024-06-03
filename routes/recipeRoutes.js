/*
ROUTE FOR PAGES (/recipe/):
    - View Recipe Page (6):     /
    - Review Recipe Page (7):   /review
    - See Reviews (8):          /reviews
    - Submit Recipe Page (16):  /submit
*/


const express = require('express')
const router = express.Router()
const { checkAuthenticated } = require('../middleware/authMiddleware')
const { recipe, recipePage, reviewPage, review, reviewsPage, submitPage, submit } = require('../controllers/recipeController')

router.get('/', recipePage)

router.post('/recipe', recipe)

router.get('/review', reviewPage)
router.post('/review', review)

router.get('/reviews', reviewsPage)

router.get('/submit', submitPage)
router.post('/submit', submit)

module.exports = router