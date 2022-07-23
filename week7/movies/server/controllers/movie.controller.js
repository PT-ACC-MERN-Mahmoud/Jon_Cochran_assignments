const Movie = require('../models/movie.model');

//seperate modules for each function
//find all movies 
module.exports.findAllMovies = (req, res) => {
    Movie.find() //empty object
    .then((allMovies) => {
        res.json({movies: allMovies})
    })
    .catch((err) => {
        res.json({message: 'error in get all function', err});
        res.status(400).json({message: 'something went wrong in find all movies', error: err});
    });
}
//find one
module.exports.findOneMovie = (req, res) => {
    Movie.findOne({_id: req.params.id})
    .then((movie) => {
        res.json({movie: movie})
    })
    .catch((err) => {
        res.json({message: 'error in get one function', err});
        res.status(400).json({message: 'something went wrong in find one movie', error: err});
    })
}
//create 
module.exports.createMovie = (req, res) => {
    Movie.create(req.body)
    .then((newMovie) => {
        res.json(201).json(newMovie)
    })
    .catch((err) => {
        res.json({message: 'error in create function', err});
        res.status(400).json({message: 'something went wrong in create a movie', error: err});
    })
}
//update
module.exports.updateAMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        res.json({message: 'error in update function', err});
        res.status(400).json({message: 'something went wrong in updating a movie', error: err});
    })
}
//delete
module.exports.deleteOneMovie = (req, res) => {
    Movie.deleteOne({_id: req.params.id})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        res.json({message: 'error in delete function', err});
        res.status(400).json({message: 'something went wrong in deleting a movie', error: err});
    })
}


