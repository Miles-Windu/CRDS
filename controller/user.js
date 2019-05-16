// const mongoose = require('mongoose');
// const User = require('../models/User');
// const service = require('../services')

// function signup(req, res) { 
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     })
//     user.save((err) => {
//         if(err) res.status(500).send({ message: `Error creating user: ${err}`})

//         return res.status(200).send({ token: service.createToken(user) })
//         console.log(token)

//     });
// };

// function login(req, res) {
//     User.find({ email: req.body.email }, (err, user) =>{
//         if(err) return res.status(500).send({ message: err});
//         if(!user) return res.status(404).send({ message: 'No user in database'});

//         req.user = user;
//         res.status(200).send({
//             message: 'Logged in',
//             token: service.createToken(user),
//         })
//         // res.redirect('')
//     })
// };

// module.exports = {
//     login,
//     signup
// }