var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Let express know we have more files with code to handle more routes
// const carsRoutes =require('./routes/cars-routes');
// app.use('/cars', carsRoutes);
app.use('/cars', require('./routes/cars-routes'));


// Let express know we have more files with code to handle more routes
// const peopleRoutes =require('./routes/people-routes');
// app.use('/people', peopleRoutes);
app.use('/people', require('./routes/people-routes'));


//=================================================
const server = app.listen(2189, '127.0.0.1', function () {
    var host = server.address().address
    var port = server.address().port
    console.log("My app is listening at http://%s:%s", host, port)
});