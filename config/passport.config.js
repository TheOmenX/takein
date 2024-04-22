const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt");
const User = require("../models/user");

async function initialize(passport){
    passport.use(new LocalStrategy({usernameField: "email"}, 
        async (email, password, done) => {
            const user = await User.findOne({email: email}) 
            if (!user) return done(null, false, {message: "No user with that email"});
            if (!await bcrypt.compare(password, user.password)) return done(null, false, {message: "Incorrect password"})
            return done(null, user);
        }));
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser(async (id, done) => {
        done(null, await User.findById(id));
    })
}

module.exports = initialize;