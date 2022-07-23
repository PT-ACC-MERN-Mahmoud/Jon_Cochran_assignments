const movieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/api/movies', movieController.findAllMovies);
    app.get('/api/movies/:id', movieController.findOneMovie);
    app.post('/api/movies', movieController.createMovie);
    app.put('/api/movies/:id', movieController.updateAMovie);
    app.delete('/api/movies:/:id', movieController.deleteOneMovie)
}