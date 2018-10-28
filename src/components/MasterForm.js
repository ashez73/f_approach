import React  from "react";
import { Form, FormGroup, Label, Input, Button, Badge } from "reactstrap";
import "./MasterForm.css";
import SubFormLv1 from "./SubFormLv1";

const MasterForm =(props)=>{
  const { state, setInput, processSubmit } = props;
  console.log(state.addNewVis);
      return (
        <div>
          <h5>mode: <Badge color="secondary">{state.mode}</Badge></h5>
          <Form style={{ textAlign: "left" }} onSubmit={processSubmit}>
            <Label>Do you own a car?</Label>
            <FormGroup check> <Label check>
              <Input onChange={setInput} type="radio" value="yes" checked={state.ownsCar === "yes"} name="ownsCar" required readOnly={state.mode === "read"} />
              YES
            </Label></FormGroup>
            <FormGroup check><Label check>
              <Input onChange={setInput} type="radio" value="no" checked={state.ownsCar === "no"} name="ownsCar" required readOnly={state.mode === "read"} />
              NO
            </Label></FormGroup>
            {/*
            <SubFormLv1 subState={state} data={data} setInput={setInput} />
            */}
            <FormGroup className="mgr"><Label for="building">What year was your building built?</Label>
              <Input onChange={setInput} type="number" name="buildingBuilt" placeholder="Enter number" value={state.buildingBuilt} required readOnly={state.mode === "read"} />
            </FormGroup>
            <FormGroup>
              <Label for="companyName">Company name</Label>
              <Input type="text" name="companyName" placeholder="Company name" value={state.companyName} required readOnly={state.mode === "read"} onChange={setInput} />
            </FormGroup>
            <div style={{ textAlign: "center" }}>
              {state.subVis ? <Button color="primary">Submit</Button> : null}
            </div>
          </Form>
        </div>
      );
    };
  export default MasterForm;