const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide Name"],
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const taskModel = mongoose.model("task", TaskSchema);
module.exports = taskModel;