import React  from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./MasterForm.css";
import SubFormLv1 from "../components/SubFormLv1";

const MasterForm =({processSubmit, setInput, formData, data})=>{
  console.log(formData);
      return (
        <div>
          <Form style={{ textAlign: "left" }} onSubmit={processSubmit}>
            <Label>Do you own a car?</Label>
            <FormGroup check> <Label check>
              <Input onChange={setInput} type="radio" value="yes" checked={formData.ownsCar === "yes"} name="ownsCar" required readOnly={data.mode === "read"} />
              YES
            </Label></FormGroup>
            <FormGroup check><Label check>
              <Input onChange={setInput} type="radio" value="no" checked={formData.ownsCar === "no"} name="ownsCar" required readOnly={data.mode === "read"} />
              NO
            </Label></FormGroup>
            <SubFormLv1 subState={formData} data={data} setInput={setInput} />
            <FormGroup className="mgr"><Label for="building">What year was your building built?</Label>
              <Input onChange={setInput} type="number" name="buildingBuilt" placeholder="Enter number" value={formData.buildingBuilt} required readOnly={data.mode === "read"} />
            </FormGroup>
            <FormGroup>
              <Label for="companyName">Company name</Label>
              <Input type="text" name="companyName" placeholder="Company name" value={formData.companyName} required readOnly={data.mode === "read"} onChange={setInput} />
            </FormGroup>
            <div style={{ textAlign: "center" }}>
              {data.subVis ? <Button color="primary">Submit</Button> : null}
            </div>
          </Form>
        </div>
      );
    };
  export default MasterForm;
