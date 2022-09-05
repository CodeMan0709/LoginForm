const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    
});

const form = mongoose.model("form",taskSchema);

module.exports = form;
