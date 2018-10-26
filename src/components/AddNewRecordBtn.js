import React from "react";
import { Button } from "reactstrap";

const AddNewRecordBtn = ({ btAdd, methods }) => {
  return (btAdd === 0) ? null : (
    <div>
      <Button
        color="primary"
        type="button"
        style={{ margin: "20px" }}
        onClick={(e)=>methods(e,"getForm")}>
        Add New Record
      </Button>
    </div>
  );
};
export default AddNewRecordBtn;
