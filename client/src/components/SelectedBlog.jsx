import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  ListGroup, 
  ListGroupItem 
} from 'reactstrap';

//Containers
import DeleteButtonContainer from '../containers/DeleteButtonContainer';

const SelectedBlog = (props) => {
  return (
    <Container>
      {props.blogs.map(({ _id, title, image, content, displayDate }) => (
        <div key={_id}>
        
          <ListGroup>

            <ListGroupItem className="image text-center">
              <h1 className="title text-center">
                {title}
              </h1>

              <img src={image} className="image img-fluid img-thumbnail" alt="" />
            </ListGroupItem>

            <ListGroupItem className="date">
              {displayDate.substr(0, 15)}
            </ListGroupItem>

            <ListGroupItem className="content">
              {content}
            </ListGroupItem>

          </ListGroup>

          <Link to={`${_id}/edit`}>
            <Button 
              className="edit-form button"
              size="lg"
              color="primary"
              outline
            >
              Edit
            </Button>
          </Link>

          <DeleteButtonContainer id={_id}/>

        </div>
      ))}
    </Container>
  );
}

SelectedBlog.propTypes = {
  blogs: PropTypes.array.isRequired
}; 

export default SelectedBlog;