const express = require('express');
const app = express();
const morgan = require('morgan/');
const bodyParser = require('body-parser');

const ActualTotalLoadRoutes = require('./api/routes/ActualTotalLoad')
const AGPTRoutes = require('./api/routes/AggregatedGenerationPerType')
const DATLFRoutes = require('./api/routes/DayAheadTotalLoadForecast')
const ActualvsForecastRoutes = require('./api/routes/ActualvsForecast')
const usersRoutes = require('./api/routes/Login')
const userslogoutroutes = require('./api/routes/Logout')
//const adminsRoutes = require('./api/routes/users')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/ActualTotalLoad', ActualTotalLoadRoutes);
app.use('/AggregatedGenerationPerType', AGPTRoutes);
app.use('/DayAheadTotalLoadForecast', DATLFRoutes);
app.use('/ActualvsForecast', ActualvsForecastRoutes);
app.use('/Login', usersRoutes);
app.use('/Logout', userslogoutroutes);
//app.use('/users', adminsRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});



module.exports = app;