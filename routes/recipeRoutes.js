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
const { recipePage, reviewPage, review, reviewsPage, submitPage, submit } = require('../controllers/recipeController')

router.get('/', recipePage)

router.get('/review', reviewPage)
router.post('/review', checkAuthenticated, review)

router.get('/reviews', reviewsPage)

router.get('/submit', checkAuthenticated, submitPage)
router.post('/submit', checkAuthenticated, submit)

module.exports = router