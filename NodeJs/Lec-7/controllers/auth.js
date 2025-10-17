const User = require('../models/authSchema');
const bcrypt = require('bcrypt');

const signupUser = async (req, res) => {
    const { username, password } = req.body;
    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: "User already exists" });
    const hasedPassword = await bcrypt.hash(password,10);
    const user = await User.create({username,password : hasedPassword});
    res.status(201).json({ message: "Signup success", user });
};

const signinUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Signin success', user });
};

const signupGetUser = async (req, res) => {
    res.json({ message: 'Signup Here!' });
};

const signinGetUser = async (req, res) => {
    res.json({ message: 'Signin Here!' });
};

module.exports = {
    signinUser,
    signupUser,
    signinGetUser,
    signupGetUser,
};