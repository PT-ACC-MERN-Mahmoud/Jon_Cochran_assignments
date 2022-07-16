const PersonController = require('../controllers/person.controller');

modules.exports = (app) => {
    app.get('/api', PersonController.index);
}

