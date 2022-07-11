const mongoose = require('mongoose');
require('dotenv').config()
const Username = process.env.User_ID
const Pass = process.env.Password
const uri = `mongodb+srv://${Username}:${Pass}@mernprojects.blegnam.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Established a connection to the database')).catch(err => console.log('Something went wrong when connecting to the database ', err));