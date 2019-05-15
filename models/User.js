const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crd = require('./Crds')

const { Schema } = mongoose;

const saltRounds = 10;

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
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });  const User = mongoose.model('User', UserSchema);


  module.exports = User