const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt")

// @desc    Render login page
// @route   GET /login
// @acces   Public
const loginPage = (req, res) => {
    res.render('./auth/login')
}


// @desc    Login user and authenticate then using session
// @route   POST /login
// @acces   Public
const login = 
    (passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }))


// @desc    Render register page
// @route   GET /register
// @acces   Public
const registerPage = (req, res) => {
    res.render('./auth/register')
}


// @desc    Register new user
// @route   POST /register
// @acces   Public
const register = async (req, res) => {
    console.log("registering")
    User.create({
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(user => {
        console.log("Succesfull");
        res.redirect("/login")
    }).catch(err => {
        console.log(err)
        req.flash('error', 'An user with that email already exits.')
        res.redirect("/register")
    })
}

// @desc    Render entry page
// @route   GET /entry
// @acces   Public
const entryPage = (req, res) => {
    res.render('./auth/entry')
}


module.exports = {loginPage, login, registerPage, register, entryPage}