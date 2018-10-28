import React from "react";
import { FormGroup, Label, Input, } from "reactstrap";
import SubFormLv3 from "./SubFormLv3";
const SubFormLv2 = ({ state, setInput }) => {
  if (state.model === "Ford") {
    return (
      <>
        <FormGroup className="mgr"><Label for="color">What color is your Ford?</Label>
          <Input onChange={setInput} type="text" name="color" placeholder="Yout Ford's color" value={state.color}  required disabled={state.mode === "read"}/>
        </FormGroup>
        <FormGroup className="mgr"><Label for="wheels">How many wheels on your Ford?</Label>
          <Input onChange={setInput} type="number" name="wheels" placeholder="Number of wheels" value={state.wheels} required disabled={state.mode === "read"} />
        </FormGroup>
        <SubFormLv3 state={state} setInput={setInput} />
      </>
    );
  } else if (state.model === "Toyota") {
    return (
      <>
        <Label>Has your Toyota been recalled?</Label>
        <FormGroup className="mgr" check>
          <Label check>
            <Input onChange={setInput} type="radio" value="yes" checked={state.recalled === "yes"} name="recalled" required disabled={state.mode === "read"}/>
            YES
        </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input onChange={setInput} type="radio" value="no" checked={state.recalled === "no"} name="recalled" required disabled={state.mode === "read"}/>
            NO
      </Label>
        </FormGroup>
      </>
    );
  } else return null;
};
export default SubFormLv2;
