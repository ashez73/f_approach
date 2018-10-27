import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import "./MasterForm.css";
import SubFormLv1 from "../components/SubFormLv1";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownsCar: '',
      buildingBuilt: '',
      companyName: '',
      model: '',
      color: '',
      wheels:'',
      legal:'',
      recalled:''
    };
  }
  toggleRadio = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  setInputText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  processSubmit = (e) => {
    e.preventDefault();
    if (this.props.data.mode === "add") {
      console.log(this.props.data.mode)
      this.props.methods(e, "add", this.state)
    }
  }
  render() {
    return (
      <div>
        <Form style={{ textAlign: "left" }} onSubmit={this.processSubmit}>
          <Label>Do you own a car?</Label>
          <FormGroup check> <Label check>
            <Input onChange={this.toggleRadio} type="radio" value="yes" checked={this.state.ownsCar === "yes"} name="ownsCar" required />
            YES
            </Label></FormGroup>
          <FormGroup check><Label check>
            <Input onChange={this.toggleRadio} type="radio" value="no" checked={this.state.ownsCar === "no"} name="ownsCar" required />
            NO
            </Label></FormGroup>
          <SubFormLv1 subState={this.state} updateForm={this.setInputText} updateRadio={this.toggleRadio} />
          <FormGroup className="mgr"><Label for="building">What year was your building built?</Label>
            <Input onChange={this.setInputText} type="number" name="buildingBuilt" placeholder="Enter number" value={this.state.buildingBuilt} required />
          </FormGroup>
          <FormGroup>
            <Label for="companyName">Company name</Label>
            <Input onChange={this.setInputText} type="text" name="companyName" placeholder="Company name" value={this.state.companyName} required />
          </FormGroup>
          <div style={{ textAlign: "center" }}>
            <Button color="primary">Submit</Button>
          </div>
        </Form>
      </div>
    );
  };
}
export default MasterForm;
