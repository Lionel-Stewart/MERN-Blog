import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  ListGroup, 
  ListGroupItem 
} from 'reactstrap';

const BlogList = props => {
	return (
    <Container>
      <div className="header text-center">
        <h1>RESTful Blog App</h1>
      </div>
      
      {props.blogs.map(({ _id, title, image, content, displayDate }) => (
        <div key={_id} className="index-container">
          <ListGroup>
            <ListGroupItem className="text-center">
              <h1 className="title text-center">
                {title.toLowerCase()}
              </h1>

              <img src={image} className="image img-fluid img-thumbnail" alt="" />
            </ListGroupItem>

            <ListGroupItem className="date">
              {displayDate.substr(0, 15)}
            </ListGroupItem>

            <ListGroupItem className="content">
              {content.length < 100 ? content : content.substr(0, 100)+'...'}
            </ListGroupItem>

            <ListGroupItem className="read-more">
              <Link to={`/blogs/${_id}`}>
                <Button 
                  className="show-button"
                  size="lg"
                  color="info"
                  outline
                >
                  Read More
                  <i className="fa fa-chevron-right"></i>
                </Button>
              </Link>
            </ListGroupItem>

          </ListGroup>
        </div>
      ))}
    </Container>
  )
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired
}; 

export default BlogList;