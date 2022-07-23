const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {type: String,
    required: [true, 'movie title is required'],
    maxlength: [40, 'length max is 40 chars']},
    boxArt: {type: String},
    duration: {type: String, 
    default: 'N/A'
    },
    rating: {
        type: String,
        required: [true, 'movie rating is needed'],
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
    },
    actors: {type: [String]},
    isKidFriendly: {
        type: Boolean,
        default: false,
      },
      releaseYear: {
        type: Number,
        min: [1922, 'TOO OLD'],
      }
    
}, {timestamps: true},)

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;