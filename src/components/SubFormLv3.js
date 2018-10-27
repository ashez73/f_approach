import React from "react";
import { FormGroup, Label, Input} from "reactstrap";

const SubFormLv3 = ({ subState, setInput }) => {
  return parseInt(subState.wheels) > 4 ? (
    <><Label>Is your Ford road legal?</Label>
      <FormGroup className="mgr" check><Label check>
        <Input onChange={setInput} type="radio" value="yes" checked={subState.legal === "yes"} name="legal" required />
        YES
        </Label>
      </FormGroup>
      <FormGroup check><Label check>
        <Input onChange={setInput} type="radio" id="rad6" value="no" checked={subState.legal === "no"} name="legal" required />
        NO
        </Label>
      </FormGroup>
    </>
  ) : null;
};

export default SubFormLv3;
