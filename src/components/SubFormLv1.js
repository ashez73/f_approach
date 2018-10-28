import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import SubFormLv2 from "./SubFormLv2";

const SubFormLv1 = ({ state, setInput }) => {
  return state.ownsCar === "yes" ? (
    <>
      <FormGroup className="mgr">
        <Label for="companyName">What is your car's model?</Label>
        <Input disabled={state.mode === "read"} onChange={setInput} type="text" name="model" placeholder="Car's model" value={state.model} required />
      </FormGroup>
      <SubFormLv2 state={state} setInput={setInput} />
    </>
  ) : null;
};
export default SubFormLv1;
