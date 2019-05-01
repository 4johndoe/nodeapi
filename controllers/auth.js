const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

exports.signup = async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(403).json({
        error: "Email is already taken"
    });
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ message: "Signup success! Please login."});
};

exports.signin = (req, res) => {
//    find user based on email

//    if error or no user - handle error

//    if found - authenticate

//    generate a token with user id and secret

//    persist the token as 't' in cookie with expiry date

//    return response with user and token to frontend client
};