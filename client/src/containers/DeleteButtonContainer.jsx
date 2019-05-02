import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import DeleteButton from '../components/DeleteButton';

//Redux
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/blogActions';

class DeleteButtonContainer extends Component {

  onDeleteClick = () => {
    this.props.deleteBlog(this.props.id);
  }

  render(){
    return (
      <DeleteButton 
        onDeleteClick={this.onDeleteClick} 
      />
    );
  }
}

DeleteButtonContainer.propTypes = {
  id: PropTypes.string.isRequired,
  deleteBlog: PropTypes.func.isRequired
}; 

const mapStateToProps = state => ({
  blog: state.blog
});

export default connect(
  mapStateToProps,
  { deleteBlog }
)(DeleteButtonContainer);