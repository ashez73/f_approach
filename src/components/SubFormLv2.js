import React from "react";
import { FormGroup, Label, Input, } from "reactstrap";
import SubFormLv3 from "./SubFormLv3";
const SubFormLv2 = ({ subState, updateForm, updateRadio }) => {
  if (subState.model === "Ford") {
    return (
      <>
        <FormGroup className="mgr"><Label for="color">What color is your Ford?</Label>
          <Input onChange={updateForm} type="text" name="color" placeholder="Car color" value={subState.color} required />
        </FormGroup>
        <FormGroup className="mgr"><Label for="wheels">How many wheels on your Ford?</Label>
          <Input onChange={updateForm} type="number" name="wheels" placeholder="Number of wheels" value={subState.wheels} required />
        </FormGroup>
        <SubFormLv3 subState={subState} updateRadio={updateRadio} />
      </>
    );
  } else if (subState.model === "Toyota") {
    return (
      <>
        <Label>Has your Toyota been recalled?</Label>
        <FormGroup className="mgr" check>
          <Label check>
            <Input onChange={updateRadio} type="radio" value="1" checked={subState.recalled} name="recalled" required />
            YES
        </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input onChange={updateRadio} type="radio" value="0" checked={!subState.recalled} name="recalled" required />
            NO
      </Label>
        </FormGroup>
      </>
    );
  } else return null;
};
export default SubFormLv2;
