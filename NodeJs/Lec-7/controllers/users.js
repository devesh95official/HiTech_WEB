const users = require('../models/usersSchema');

const getUsers = async (req, res) => {
    const user = await users.find();
    res.json(user);
};

const postUsers = async (req, res) => {
    const user = await users.create(req.body);
    res.json(user);
};

const getUserById = async (req, res) => {
    const { id: userID } = req.params;
    const user = await users.findOne({ id: userID });
    if (user) res.send({ user });
    else {
        res.status(404).json({
            "response": "user not found"
        })
    }
};

const updateUserById = async (req, res) => {
    const { id: userID } = req.params;
    const user = await users.findOneAndUpdate({ id: userID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!user) {
        return res.status(404).json({
            message: `No User with Id: ${userID}`
        });
    }
    res.status(200).json({
        message: "User Updated",
        user
    });
};

const deleteUserById = async (req, res) => {
    const { id: userID } = req.params;
    const user = await users.findOneAndDelete({ id: userID });
    if (user) res.send({ user });
    else {
        res.status(404).json({
            "response": "user not found"
        })
    }
};

module.exports = {
    getUsers,
    postUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};