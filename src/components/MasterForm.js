import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./MasterForm.css";
import SubFormLv1 from "./SubFormLv1";

const MasterForm = () => {
  
    return (
      <div>
        <Form style={{ textAlign: "left" }} onSubmit={()=>console.log('change')}>
          <Label>Do you own a car?</Label>
          <FormGroup check>
            <Label check>
              <Input
                onChange={()=>console.log('change')}
                type="radio"
                id="rad1"
                value="1"
                checked={()=>console.log('change')}
                name="ownsCar"
                required
              />{" "}
              YES
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                onChange={()=>console.log('change')}
                type="radio"
                id="rad2"
                value="0"
                checked={()=>console.log('change')}
                name="ownsCar"
                required
              />{" "}
              NO
            </Label>
          </FormGroup>
          <SubFormLv1
            subState={()=>console.log('change')}
            updateForm={()=>console.log('change')}
            updateRadio={()=>console.log('change')}
          />
          <FormGroup className="mgr">
            <Label for="building">What year was your building built?</Label>
            <Input
              onChange={()=>console.log('change')}
              type="number"
              name="buildingBuilt"
              id="building"
              placeholder="Enter number"
              value={()=>console.log('change')}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="companyName">Company name</Label>
            <Input
              onChange={()=>console.log('change')}
              type="text"
              name="companyName"
              id="cn"
              placeholder="Company name"
              value={()=>console.log('change')}
              required
            />
          </FormGroup>
          <div style={{ textAlign: "center" }}>
            <Button color="primary">Submit</Button>
          </div>
        </Form>
      </div>
    );
  };
export default MasterForm;
