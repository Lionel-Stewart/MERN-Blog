const express = require('express');
const router  = express.Router();

//Models
const Blog = require('../models/Blog');

// @route   GET api/blogs
// @desc    Get All Blogs
// @access  Public
router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  Blog.findBlog(page, (err, blogs) => {
    err ? res.status(500).send(err) : res.json(blogs)
  });
});

// @route   GET api/blogs/length
// @desc    Get Number of Blogs
// @access  Public
router.get("/length", (req, res) => { 
  Blog.countBlogs((err, numberOfBlogs) => {
    err ? res.status(500).send(err) : res.json(numberOfBlogs)
  });
});

// @route   GET api/blogs/:id
// @desc    Show A Blog Entry
// @access  Public
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(404).send(err)); 
});

// @route   POST api/blogs
// @desc    Create A Blog
// @access  Public
router.post('/', (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    image: req.body.image, 
    content: req.body.content
  });
  
  Blog.addBlog(newBlog, (err, blogs) => {
    err ? res.status(500).send(err) : res.json(blogs)
  });
});


// @route   PUT api/blogs/:id
// @desc    Update A Blog
// @access  Public
router.put('/:id', (req, res) => { 
  //find a way to make this conditional (not everything has to be updated)
  const updatedBlog = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content
 };

  Blog.updateBlog({_id: req.params.id}, updatedBlog, (err, blogs) => {
    err ? res.status(404).send(err) : res.json(blogs)
  });
});

// @route   DELETE api/blogs/:id
// @desc    Delete A Blog
// @access  Public
router.delete('/:id', (req, res) => {
  Blog.deleteBlog(req.params.id, err => {
    err ? res.status(404).send(err) : res.json({sucess:true, msg:'Blog Post Deleted'});
  });
});

module.exports = router;