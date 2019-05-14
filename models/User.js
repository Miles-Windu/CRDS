const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        
    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    }
});



userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  
  const User = mongoose.model('User', userSchema);

  module.exports = User