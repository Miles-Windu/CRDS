// const User = require('../../models/User');
// const bcrypt = require('bcrypt');

// module.exports = (app) => {
// //  signup here
// app.post('/api/users', (req, res, next) => {
//     const { body } = req; 
//     const {
//         fullName,
        
//         password
//     } = body;
//     let {
//         email
//         } = body;

//     if (!fullName){
//        return res.send({
//             success: false,
//             message: 'Error: You must provide a full name'
//         })
//     }
//     if (!email){
//         return res.send({
//             success: false,
//             message: 'Error: You must provide an email'
//         })
//     }
//     if (!password){
//         return res.send({
//             success: false,
//             message: 'Error: You must provide a password'
//         })
//     }
//     email = email.toLowerCase();

//     User.find({
//         email: email
//     }, (err, previousUsers) => {
//         if(err) {
//             return res.send({
//                 success: false,
//                 message: 'Error: server error'
//             })
//         } else if (previousUsers.length > 0){
//             return res.send({
//                 success: false,
//                 message: 'Error: Account already exists'
//             })
//         } 

//         // create new user
//         const newUser = new User()

//         newUser.fullName = fullName;
//         newUser.email = email;
//         newUser.password = newUser.encryptPassrword(password);
//         newUser.save((err, user) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server error'
//                 })
//             } else {
//                 return res.send({
//                     success: true,
//                     message: 'Signed up!'
//                 })
//             }
//         })

        
//     })
// })
// }