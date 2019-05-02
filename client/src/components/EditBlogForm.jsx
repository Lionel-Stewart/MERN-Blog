import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Container
} from 'reactstrap';

const EditBlogForm = (props) => {  
  return (
    <Container>
     <Form onSubmit={props.onSubmit}>

        <h1 className="text-center">Edit {props.title}</h1>
        
        <Col sm={11}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={props.title}
              onChange={props.onChange}
              required
            />
          </FormGroup>
        </Col>
        
        <Col sm={11}>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              placeholder="Image"
              value={props.image}
              onChange={props.onChange}
              required
            />
          </FormGroup>
        </Col>
        
        <Col sm={11}>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input
              type="textarea"
              name="content"
              placeholder="Content"
              value={props.content}
              onChange={props.onChange}
              required
            />
          </FormGroup>
        </Col>

        <Col sm={11}>
          <Button 
            className="edit button"
            size="lg"
            color="success"
            outline
          >
            Submit
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

EditBlogForm.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}; 

export default EditBlogForm;