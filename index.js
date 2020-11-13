const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Api running');
});

const indexRoute = require('./routes/IndexRoute');

app.use('/', indexRoute);