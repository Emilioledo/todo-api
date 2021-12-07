const User = require('../models/User');

const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        password
    });
    try {
        const userSave = await newUser.save();
        res.status(201).json(userSave);
    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

const signIn = async (req, res) => {
    res.json('Chau!')
}


module.exports = { signUp, signIn };
