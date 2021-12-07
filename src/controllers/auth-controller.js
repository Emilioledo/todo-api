const User = require('../models/User');

const signUp = async (req, res) => {
    res.json('Hola!');
}

const signIn = async (req, res) => {
    res.json('Chau!')
}


module.exports = { signUp, signIn };
