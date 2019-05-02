import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import BlogList from '../components/BlogList';
import PaginationLinks from '../components/PaginationLinks';

//Redux
import { connect } from 'react-redux';
import { getBlogs } from '../actions/blogActions';

class BlogListContainer extends Component {

  componentDidMount() {
    this.getBlogs();
  }

  getBlogs = () => {
    const pageNumber = parseInt(this.props.routeProps.match.params.pageNumber) || 1;

    this.props.getBlogs(pageNumber);
  }

  onPageNumberPropChange = (prevProps) => {
    const currentPageNumber = this.props.routeProps.match.params.pageNumber;
    const previousPageNumber = prevProps.routeProps.match.params.pageNumber;
    
    if(previousPageNumber!==currentPageNumber){
      this.getBlogs();
    }
  }

  onBlogItemDeleted = (prevProps) => {
    const currentNumberOfBlogs  = this.props.blog.numberOfBlogs;
    const previousNumberOfBlogs = prevProps.blog.numberOfBlogs;
    const previousPageSize = Math.floor((prevProps.blog.numberOfBlogs-1)/3) + 1;
    
    if(previousNumberOfBlogs > currentNumberOfBlogs){
      if(previousPageSize>1){
        this.getBlogs();
      }
    }
  }

  ifPageIsEmpty = () => {
    const blogs = this.props.blog.blogs;
    const loading = this.props.blog.loading;
    const pageNumber = this.props.routeProps.match.params.pageNumber;

    if(blogs.length===0 && loading===false && pageNumber!==1){
      window.location = '/blogs';
    }
  }

  componentDidUpdate(prevProps) {
    this.onPageNumberPropChange(prevProps);
    this.onBlogItemDeleted(prevProps);
    this.ifPageIsEmpty();
  }
  
  render(){
    const pageSize   = Math.floor((this.props.blog.numberOfBlogs-1)/3) + 1;
    const pageNumber = parseInt(this.props.routeProps.match.params.pageNumber) || 1;
    return (
      <div>
        <BlogList blogs={this.props.blog.blogs} />
        <PaginationLinks
          pageSize={pageSize}
          pageNumber={pageNumber}
        />
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  blog: PropTypes.object.isRequired,
  getBlogs: PropTypes.func.isRequired
}; 

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { getBlogs }
)(BlogListContainer);