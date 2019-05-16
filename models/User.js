const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// const saltRounds = 10;

const UserSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        unique: true,
      
    },
    password: {
        type: String,
        select: false

    },

    signUpDate: {
        type: Date,
        default: Date.now()
    }, 

    network: []

});

// Password Comparison

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }

// Encrypt password

UserSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const user = this;
      bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
          next(err);
        }
        else {
          user.password = hash;
          next();
        }
      });
    }
     else {
      next();
    }
  });
  
  const User = mongoose.model('User', UserSchema);


  module.exports = User