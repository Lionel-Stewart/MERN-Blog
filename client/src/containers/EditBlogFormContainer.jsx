import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import EditBlogForm from '../components/EditBlogForm';

//Redux
import { connect } from 'react-redux';
import { findBlog, updateBlog } from '../actions/blogActions';

class EditBlogFormContainer extends Component {
  state = {
    id: this.props.routeProps.match.params.id,
    blog: [], 
    title: '', 
    image: '', 
    content: ''
  }

  componentDidMount() {
    this.props.findBlog(this.state.id);
  }

  static getDerivedStateFromProps(nextProps, prevState){ 
    if (prevState.blog !== nextProps.blog) {
      const blog = nextProps.blog.blogs;
      if(blog.length > 0) {
        return {
          blog: nextProps.blog,
          image: blog[0].image,
          title: blog[0].title,
          content: blog[0].content
        } 
      } else { return null }
    } else { return null }
  } 

  onSubmit = e => {
    e.preventDefault(); 

    const updatedBlog = {
      id: this.state.id,
      title: this.state.title,
      image: this.state.image,
      content: this.state.content
    }; 

    this.props.updateBlog(updatedBlog);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render(){
    return (
      <EditBlogForm 
        title={this.state.title}
        image={this.state.image}
        content={this.state.content}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

EditBlogFormContainer.propTypes = {
  findBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired
}; 

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { findBlog, updateBlog }
)(EditBlogFormContainer);