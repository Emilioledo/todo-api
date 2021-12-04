const morgan = require('morgan');
const express = require('express');
const connected = require('./database');
const app = express();

/*database*/
connected();

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*Routes*/
app.use(require('./routes/auth-routes'));
app.use(require('./routes/user-routes'));

/*setting*/
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connected on port: ${port}`);
});

