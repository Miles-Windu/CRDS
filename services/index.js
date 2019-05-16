// const jwt = require('jwt-simple');
// const moment = require('moment');
// const config = require('../config');

// function createToken(user) {
//     const payload = {
//         sub: user._id,
//         iat: moment().unix(),
//         exp: moment().add(1,'hours').unix()
//     }

//     return jwt.encode(payload, config.SECRET_TOKEN)

// }

// function decodeToken(token) {
//     const decoded = new Promise((resolve, reject) => {
//         try{
//             const payload = jwt.decode(token, config.SECRET_TOKEN);

//             if(payload.exp <= moment().unix()) {
//                 Reject({
//                     status: 401,
//                     message: "Token expired"
//                 })
//             }
//             resolve(payload.sub);
//         } catch(err) {
//             reject({
//                 status: 500,
//                 message: 'Invalid Token'
//             })
//         }
//     })
//     return decoded
// }

// module.exports = {
//     createToken,
//     decodeToken
// }