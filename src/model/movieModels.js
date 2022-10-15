const mongoose  = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'a movie need to have a tittle'],
        trim: true,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    casts: [{
        type: String
    }],
    poster: {
        type: String,
        required: [true, 'a movie need to have a poster']
    },
    description: {
        type: String,
        required: [true, 'a movie need to a description'],
        min: [20, 'movie description should have at least 20 characters for description']
    },
    earning: {
        type: Number,
        default: 0
    }
})

const movie = mongoose.model('Movie', movieSchema);

module.exports = movie;