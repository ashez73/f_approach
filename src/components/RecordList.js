import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
} from "reactstrap";

const RecordList = ({ state, listManageMethods }) => {
  return (
    <>
      <ListGroup style={{ textAlign: "left" }}>
        {state.list.map(record => {
          return (
            <ListGroupItem className="justify-content-between " key={record}>
              <span style={{ textTransform: "uppercase" }}>
                entry no. {record}</span>
              <ButtonGroup size="sm" style={{ float: "right" }}>
                <Button color="primary" onClick={(e) => listManageMethods(e, 'read', record)}>
                  Read
                </Button>
                <Button color="primary" style={{ backgroundColor: "#1ea3eb" }} onClick={(e) => listManageMethods(e, 'update', record)}>
                  Update
                </Button>
                <Button color="dark" onClick={(e) => listManageMethods(e, 'delete', record)}>
                  Delete
                </Button>
              </ButtonGroup>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  )
}

export default RecordList;

