import React from "react";
import { Button } from "reactstrap";

const AddNewRecordBtn = ({ btAdd }) => {
  return (btAdd === 0) ? null : (
    <div>
      <Button
        color="primary"
        type="button"
        style={{ margin: "20px" }}
        onClick={() => console.log('lol')}>
        Add New Record
      </Button>
    </div>
  );
};
export default AddNewRecordBtn;
