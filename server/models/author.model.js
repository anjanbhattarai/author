const mongoose= require("mongoose");

const AuthorSchema = new mongoose.Schema({
    authorName:{
        type:String,
        required: [true, "must have a name"],
        minLength: [3,"Author name must be at leaste 3 characters"]
    }
}, {timestamp: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports= Author;