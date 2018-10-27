import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import SubFormLv2 from "./SubFormLv2";

const SubFormLv1 = ({ subState, setInput, data}) => {
  return subState.ownsCar === "yes" ? (
    <>
      <FormGroup className="mgr">
        <Label for="companyName">What is your car's model?</Label>
        <Input readOnly ={data.mode==="read"} onChange={setInput} type="text" name="model" placeholder="Car's model" value={subState.model} required />
      </FormGroup>
      <SubFormLv2 subState={subState} data = {data} setInput={setInput} />
    </>
  ) : null;
};
export default SubFormLv1;
