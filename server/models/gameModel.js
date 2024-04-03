const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    gamemode: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    programmer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    userId: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: { createdAt: 'createdAt' } });

module.exports = mongoose.model('Game', gameSchema);
