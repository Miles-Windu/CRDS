const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSessionSchema = new Schema({
    userId: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
});

const Sesh = mongoose.model('userSession', userSessionSchema);

module.exports = Sesh