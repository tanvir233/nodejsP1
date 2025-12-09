'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home', {});
});

// Bind to 0.0.0.0 to make it accessible outside the container
app.listen(8081, '0.0.0.0', () => {
    console.log('Server running on 0.0.0.0:8081');
});

module.exports.getApp = app;
