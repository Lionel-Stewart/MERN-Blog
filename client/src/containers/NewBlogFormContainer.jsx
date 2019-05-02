import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import NewBlogForm from '../components/NewBlogForm';

//Redux
import { connect } from 'react-redux';
import { createBlog } from '../actions/blogActions';

class NewBlogFormContainer extends Component {
  state = {
    title: '',
    image: '',
    content: ''
  }

  onSubmit = e => {
    e.preventDefault();

    const newBlog = {
      title: this.state.title,
      image: this.state.image,
      content: this.state.content
    }; 

    this.props.createBlog(newBlog);

  }

  onChange= e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render(){
    return (
      <NewBlogForm 
        title={this.state.title}
        image={this.state.image}
        content={this.state.content}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

NewBlogFormContainer.propTypes = {
  createBlog: PropTypes.func.isRequired
}; 

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { createBlog }
)(NewBlogFormContainer);