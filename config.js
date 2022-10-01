const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));
