const mongoose  =require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    age:Number
})

module.exports = mongoose.model("Author", authorSchema)