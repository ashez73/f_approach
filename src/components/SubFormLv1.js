import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import SubFormLv2 from "./SubFormLv2";

const SubFormLv1 = ({ subState, updateForm, updateRadio }) => {
  return subState.ownsCar ? (
    <>
      <FormGroup className="mgr">
        <Label for="companyName">What is your car model?</Label>
        <Input onChange={updateForm} type="text" name="model" placeholder="Car model" value={subState.model} required/>
      </FormGroup>
      <SubFormLv2 subState={subState} updateForm={updateForm} updateRadio={updateRadio}
      />
    </>
  ) : null;
};
export default SubFormLv1;
