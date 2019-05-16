const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user)
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, name,  email, password, signUpDate, done) =>{
    
    // Unique validation
    const user = await User.findOne({email: req.body.email});
    if(user) {
        console.log('Validation new user \n' + user);
        return done(null, false, req.flash('signupMessage', 'The email is already in use'));
    } else{
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.signUpDate = Date.now()
        await newUser.save();
        console.log(newUser);
        done(null, newUser)
    }
}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        return done(null, false, req.flash('loginMessage', 'No user found'));
    }
    if(!user.isCorrectPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Incorrect pasword'))
    }
    return done(null, user)

}))