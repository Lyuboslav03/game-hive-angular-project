const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    game: {
        type: ObjectId,
        ref: 'Game',
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema);