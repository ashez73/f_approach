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
      wheels: '',
      legal: '',
      recalled: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.data.response) {
      return {
        ownsCar: nextProps.data.response.ownsCar,
        buildingBuilt: nextProps.data.response.buildingBuilt,
        companyName: nextProps.data.response.companyName,
        model: nextProps.data.response.model,
        color: nextProps.data.response.color,
        wheels: nextProps.data.response.wheels,
        legal:nextProps.data.response.legal,
        recalled: nextProps.data.response.recalled
      };
    }
    else {
      return null;
    }
  }
    setInput = (e) => {
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
      //console.log(this.props.data.mode);
      /*
      checkMode=()=>{
      return this.props.data.mode==="read"?
      };
      */
      return (

        <div>
          <Form style={{ textAlign: "left" }} onSubmit={this.processSubmit}>
            <Label>Do you own a car?</Label>
            <FormGroup check> <Label check>
              <Input onChange={this.setInput} type="radio" value="yes" checked={this.state.ownsCar === "yes"} name="ownsCar" required readOnly={this.props.data.mode === "read"} />
              YES
            </Label></FormGroup>
            <FormGroup check><Label check>
              <Input onChange={this.setInput} type="radio" value="no" checked={this.state.ownsCar === "no"} name="ownsCar" required readOnly={this.props.data.mode === "read"} />
              NO
            </Label></FormGroup>
            <SubFormLv1 subState={this.state} data={this.props.data} setInput={this.setInput} />
            <FormGroup className="mgr"><Label for="building">What year was your building built?</Label>
              <Input onChange={this.setInput} type="number" name="buildingBuilt" placeholder="Enter number" value={this.state.buildingBuilt} required readOnly={this.props.data.mode === "read"} />
            </FormGroup>
            <FormGroup>
              <Label for="companyName">Company name</Label>
              <Input type="text" name="companyName" placeholder="Company name" value={this.state.companyName} required readOnly={this.props.data.mode === "read"} onChange={this.setInput} />
            </FormGroup>
            <div style={{ textAlign: "center" }}>
              {this.props.data.subVis ? <Button color="primary">Submit</Button> : null}
            </div>
          </Form>
        </div>
      );
    };
  }

  export default MasterForm;
