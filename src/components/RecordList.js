import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
} from "reactstrap";

const RecordList = ({ state, listManageMethods }) => {
  if (state.list.length===0){
    return <h2>Database empty! Add your first record!</h2>
  } 
  return (
    <>
      <ListGroup style={{ textAlign: "left" }}>
        {state.list.map(record => {
          return (
            <ListGroupItem className="justify-content-between " style={record !== state.recStore?{backgroundColor: "white"}:{backgroundColor: "#f8f8f8"}} key={record}>
              <span style={{ textTransform: "uppercase" }}>
                entry no. {record}</span>
              <ButtonGroup size="sm" style={{ float: "right" }}>
                <Button color="primary" onClick={(e) => listManageMethods(e, record)}>
                  Read
                </Button>
                <Button color="primary" style={{ backgroundColor: "#1ea3eb" }} onClick={(e) => listManageMethods(e, record)}>
                  Update
                </Button>
                <Button color="dark" onClick={(e) => listManageMethods(e, record)}>
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

