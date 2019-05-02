const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, 
  content: { type: String, required: true },
  created: { type: Date, default: new Date() }, 
  displayDate: { type: String, default: new Date() }
});

const Blog = module.exports = mongoose.model('Blog', blogSchema);

module.exports.findBlog = (page, callback) => {
  Blog.find(callback) 
    .skip((page-1)*3)
    .limit(3)
}

module.exports.countBlogs = (callback) => {
  Blog.countDocuments(callback) 
}

module.exports.addBlog = (newBlog, callback) => {
  newBlog.save(callback);
}

module.exports.updateBlog = (id, updatedBlog, callback) => {
  Blog.updateOne(id, updatedBlog, callback) 
}

module.exports.deleteBlog = (id, callback) => {
  Blog.findById(id, callback)
    .then(blog => blog.remove())
}