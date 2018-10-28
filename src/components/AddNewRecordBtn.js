import React from "react";
import { Button } from "reactstrap";

const AddNewRecordBtn = (props) => {
  const { state, showForm } = props;
  return (state.addNewVis === 0) ? null : (
    <div>
      <Button
        color="primary"
        type="button"
        style={{ margin: "20px" }}
        onClick={showForm}>
        Add New Record
      </Button>
    </div>
  );
};
export default AddNewRecordBtn;
