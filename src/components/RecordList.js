import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
} from "reactstrap";

const RecordList = ({ data, methods }) => {
  console.log(data.list);
  return (
    <>
      <ListGroup style={{ textAlign: "left" }}>
        {data.list.map(record => {
          return (
            <ListGroupItem className="justify-content-between " key={record}>
              <span style={{ textTransform: "uppercase" }}>
                entry no. {record}</span>
              <ButtonGroup size="sm" style={{ float: "right" }}>
                <Button color="primary" onClick={(e)=>methods(record,'update',e)}>
                  Update
                </Button>
                <Button color="dark" onClick={(e)=>methods(record, 'delete',e)}>
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

