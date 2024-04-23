function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    req.session.redirectTo = req.originalUrl;
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
}

module.exports = {checkAuthenticated, checkNotAuthenticated}