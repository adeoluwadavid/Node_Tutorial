const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Schema
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        requred: true
    }
},{timestamps: true})

// Model
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;