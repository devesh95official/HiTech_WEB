const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true,
    },
    name : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model('Users', usersSchema);