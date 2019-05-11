const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,

    },
    message: {
        type: String,

    },

});

  const Message = mongoose.model('Message', messageSchema);

  module.exports = Message