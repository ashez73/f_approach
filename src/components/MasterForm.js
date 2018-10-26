import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./MasterForm.css";
import SubFormLv1 from "./SubFormLv1";

const MasterForm = ({ formState, updateForm, updateRadio, handleSubmit,mode }) => {
  if (mode!=="submit"&& mode!=="add") {
    return <div></div>;
  } else {
    return (
      <div>
        <Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
          <Label>Do you own a car?</Label>
          {console.log(formState.ownsCar)}
          <FormGroup check>
            <Label check>
              <Input
                onChange={updateRadio}
                type="radio"
                id="rad1"
                value="1"
                checked={formState.ownsCar}
                name="ownsCar"
                required
              />{" "}
              YES
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                onChange={updateRadio}
                type="radio"
                id="rad2"
                value="0"
                checked={!formState.ownsCar}
                name="ownsCar"
                required
              />{" "}
              NO
            </Label>
          </FormGroup>
          <SubFormLv1
            subState={formState}
            updateForm={updateForm}
            updateRadio={updateRadio}
          />
          <FormGroup className="mgr">
            <Label for="building">What year was your building built?</Label>
            <Input
              onChange={updateForm}
              type="number"
              name="buildingBuilt"
              id="building"
              placeholder="Enter number"
              value={formState.buildingBuilt}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="companyName">Company name</Label>
            <Input
              onChange={updateForm}
              type="text"
              name="companyName"
              id="cn"
              placeholder="Company name"
              value={formState.companyName}
              required
            />
          </FormGroup>
          <div style={{ textAlign: "center" }}>
            <Button color="primary">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
};
export default MasterForm;
