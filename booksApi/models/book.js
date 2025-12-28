const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:String,
    genres:[String],
    price:Number,
    stock:{type:Number,default:0},
    rating:Number
},{timestamps:true}
);
module.exports = mongoose.model("Book",bookSchema);