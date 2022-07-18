const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('../server/config/mongoose.config');
require('../server/routes/products.routes')(app);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`listening at PORT on ${PORT}`)
})