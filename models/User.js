const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassrword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  const User = mongoose.model('user', userSchema);

  module.exports = User