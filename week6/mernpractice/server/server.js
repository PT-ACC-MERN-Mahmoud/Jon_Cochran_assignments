const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

require('./routes/person.routes')(app);

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));