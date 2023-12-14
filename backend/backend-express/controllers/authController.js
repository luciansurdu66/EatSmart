const db = require('../models/index');

exports.registerUser = async (req, res) => {
    const fullName = req.body.fullName;
    const password = req.body.password;
    const email = req.body.email;

    try {
        const user = await db.User.create({fullName, password, email});
        res.status(200).json({user, message: 'User created successfully'});
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message: 'User could not be created'});
    }
}

exports.loginUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await db.User.findOne({where: {username}});

        if (user && user.password === password) {
            res.status(200).json({user, message: 'User logged in successfully'});
        } else {
            res.status(400).json({err, message:'Incorrect username or password'});
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({err, message:'Internal server error'});
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.status(200).json({users});
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}