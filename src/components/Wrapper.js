import React, { Component } from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
import AddNewRecordBtn from './AddNewRecordBtn'
import MasterForm from '../containers/MasterForm';
class Wrapper extends Component {
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
    }
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
        legal: nextProps.data.response.legal,
        recalled: nextProps.data.response.recalled
      };
    }
    else {
      return null;
    }
  }
  //wrapper methods -all form methods moved here

  setInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  processSubmit = (e) => {
    e.preventDefault();
    if (this.props.data.mode === "add") {
      this.props.methods(e, "add", this.state)
    }
  }
  //opening form
  
  render() {
    return (
      <>
        <MyHeader />
        <main>
          <Container style={{ marginTop: "160px" }}>
            <h1>{(this.props.data.list)}</h1>
            <RecordList data={this.props.data} methods={this.props.methods} />
            {this.props.data.formVis ? <MasterForm data={this.props.data} formData={this.state} setInput={this.setInput} processSubmit={this.processSubmit} /> : null}
            <AddNewRecordBtn btAdd={this.props.data.addNewVis} showForm={this.props.showForm} />
          </Container>
        </main>
      </>
    )
  }
}
export default Wrapper;