const express = require('express');
const app = express();
const PORT = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const AllmyJokesRoutes = require('./routes/jokes.routes');
AllmyJokesRoutes(app);

app.listen(PORT, () => console.log(`the server is running on ${PORT}`));

