import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const SubFormLv3 = ({ subState, updateForm, updateRadio }) => {
  return parseInt(subState.wheels) > 4 ? (
    <>
      <Label>Is your Ford road legal?</Label>
      <FormGroup className="mgr" check>
        <Label check>
          <Input onChange={updateRadio}
            type="radio"
            id="rad5"
            value="1"
            checked={subState.legal}
            name="legal"
            required
          />{" "}
          YES
        </Label>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input onChange={updateRadio}
            type="radio"
            id="rad6"
            value="0"
            checked={!subState.legal}
            name="legal"
            required
          />{" "}
          NO
        </Label>
      </FormGroup>
    </>
  ) : null;
};

export default SubFormLv3;
