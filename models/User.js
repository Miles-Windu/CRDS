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