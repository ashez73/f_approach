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
                <Button color="primary" onClick={(e)=>methods(e,'update')}>
                  Update
                </Button>
                <Button color="dark" onClick={(e)=>methods(e, 'delete')}>
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

