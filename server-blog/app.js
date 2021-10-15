const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')
const logger = require('morgan');
const mainRoutes = require('./routes/main');
const dotenv = require('dotenv')
// const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});
// app.use(cors);
dotenv.config();

connectDB();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Project with Nodejs Express and MongoDB',
    });
});

app.listen(port, () => {
    console.log(`Our server is running on http://localhost:${port}`);
});

app.use('/api', mainRoutes);