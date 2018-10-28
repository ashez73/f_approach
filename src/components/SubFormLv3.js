import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SubFormLv3 = ({ state, setInput }) => {
  return parseInt(state.wheels) > 4 ? (
    <><Label>Is your Ford road legal?</Label>
      <FormGroup className="mgr" check><Label check>
        <Input onChange={setInput} type="radio" value="yes" checked={state.legal === "yes"} name="legal" required disabled={state.mode === "read"} />
        YES
        </Label>
      </FormGroup>
      <FormGroup check><Label check>
        <Input onChange={setInput} type="radio" value="no" checked={state.legal === "no"} name="legal" required disabled={state.mode === "read"}/>
        NO
        </Label>
      </FormGroup>
    </>
  ) : null;
};

export default SubFormLv3;
