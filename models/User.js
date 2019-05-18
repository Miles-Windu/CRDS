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
    

});

// Password Comparison

UserSchema.methods.isCorrectPassword = function(password){
    return bcrypt.compare(password, this.password);
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
    // if(!this.password) {
    //   console.log('models/User.js =========No password provided=========')
    //   next()
    // } else {
    //   console.log('models/user.js =========Has password in pre save=========')
    //   this.password = this.hashPassword(this.password)
    // }
  });

  // UserSchema.methods = {
  //   isCorrectPassword: function (inputPassword) {
  //     return bcrypt.compareSync(inputPassword, this.password)
  //   },
  //   hashPassword: plainTexPassword => {
  //     return bcrypt.hashSync(plainTexPassword, 10)
  //   }
  // }

  const User = mongoose.model('User', UserSchema);


  module.exports = User