const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (_id, done) => {
    const user = await User.findById(_id);
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
        return done(null, false, req.flash('signupMessage', 'The email is already in use'));
    } else{
        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email
        user.password = req.body.password;
        user.signUpDate = Date.now()
        console.log(user);
        await user.save();
        // done(null, user)
    }
}));

passport.use('local-signin', new LocalStrategy(
    ({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (email, password, done) => {
        User.findOne({email: email}, function (err, user) {
            if(err) {return done(err); }
            if(!user) {return done(null, false);}
            if(!user.isCorrectPassword(password)) {return done(null, false); }
            return done(null, user);
        })
    })
))


// passport.use('local-signin', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (email, password, done) => {
//     const user = await User.findOne({email: remail});
//     if(!user) {
//         return done(null, false, req.flash('signinMessage', 'No User Found'));
//         }
//     if(!user.isCorrectPassword(password)) {
//         console.log('user: ' + user)
//         return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
//     }
//     return done(null, user)
// }));