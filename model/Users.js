const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // username would be user email address
    email : {
        type:String,
        required: true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
},{
    timestamps:true
});

const User = mongoose.model('User' , userSchema);

module.exports = User;

