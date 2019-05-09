const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        // required: true
        default: " "
    },
    email: {
        type: String,
        // required: true 
        default: " "
    },
    password: {
        type: String,
        // required: true
        default: " "
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

});

userSchema.methods.encryptPassrword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);

  module.exports = User