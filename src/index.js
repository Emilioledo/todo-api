const morgan = require('morgan');
const express = require('express');
const connected = require('./database');
const initialSetup = require('./libs/initialSetup');
//1:48:30
/*set up*/
const app = express();
initialSetup.createRoles();

/*database*/
connected();

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*Routes*/
app.use('/auth', require('./routes/auth-routes'));
app.use('/users', require('./routes/user-routes'));
app.use('/tasks', require('./routes/task-routes'));

/*setting*/
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connected on port: ${port}`);
});

