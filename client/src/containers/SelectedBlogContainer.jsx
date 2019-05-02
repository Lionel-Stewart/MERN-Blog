import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import SelectedBlog from '../components/SelectedBlog';

//Redux
import { connect } from 'react-redux';
import { findBlog } from '../actions/blogActions';

class SelectedBlogContainer extends Component {
  state = {
    id: this.props.routeProps.match.params.id
  }

  componentDidMount() {
    this.props.findBlog(this.state.id);
  }
  
  render(){
    return (
      <SelectedBlog 
        blogs={this.props.blog.blogs}
        onDeleteClick={this.onDeleteClick} 
      />
    );
  }
}

SelectedBlogContainer.propTypes = {
  blog: PropTypes.object.isRequired,
  findBlog: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired
}; 

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { findBlog }
)(SelectedBlogContainer);