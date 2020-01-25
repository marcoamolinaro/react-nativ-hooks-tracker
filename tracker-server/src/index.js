const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRotes');

const app = express();

app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:admin@cluster0-0tf2v.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
   useNewUrlParser: true,
   useCreateIndex: true 
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo instance', err);
});

app.get('/', (req, res) => {
    res.send('Hi There!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
