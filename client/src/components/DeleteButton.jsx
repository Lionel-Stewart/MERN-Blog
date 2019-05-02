import React from 'react';
import { Button } from 'reactstrap';

const DeleteButton = (props) => {
  return (
     <Button 
        className="delete button"
        size="lg"
        color="danger"
        outline 
        onClick={props.onDeleteClick}
      >
        Delete
      </Button>
  );
}

export default DeleteButton;