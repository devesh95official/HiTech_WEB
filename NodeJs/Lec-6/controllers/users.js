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
    const user = await userSchema.findOne({ id: userID });
    if (user) res.send({ user });
    else {
        res.status(404).json({
            "response": "user not found"
        })
    }
};

const updateUserById = async (req, res) => {
    const { id: userID } = req.params;
    const task = await Task.findOneAndUpdate({ id: userID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return res.status(404).json({
            message: `No task with Id: ${taskID}`
        });
    }
    res.status(200).json({
        message: "Task Updated",
        task
    });
};

const deleteUserById = async (req, res) => {
    const { id: userID } = req.params;
    const user = await userSchema.findOneAndDelete({ id: userID });
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