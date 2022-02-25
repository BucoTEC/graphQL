const mongoose  =require('mongoose')

const bookSchema = new mongoose.Schema({
    name:String,
    gener:String,
    author:String
})

module.exports = mongoose.model("Book", bookSchema)