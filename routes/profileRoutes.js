/*
ROUTE FOR PAGES(/profile/):
    - Favourites Page (15):     /favourites
    - Your Profile (17):        /
    - Settings (18):            /settings
*/

const express = require('express')
const router = express.Router()
const { checkAuthenticated } = require('../middleware/authMiddleware')
const { profilePage, favourites, settingsPage, settings } = require('../controllers/profileController')

router.get('/', profilePage)

router.get('/favourites', favourites)
router.delete('/favourites', favourites)

router.get('/settings', checkAuthenticated, settingsPage)
router.post('/settings', checkAuthenticated, settings)


module.exports = router