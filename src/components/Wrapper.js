import React from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
import AddNewRecordBtn from './AddNewRecordBtn'
import MasterForm from './MasterForm';

const Wrapper = (props) => {
  const { state, showForm, listManageMethods, setInput, processSubmit } = props;
  return (
    <>
      <MyHeader />
      <main>
        <Container style={{ marginTop: "160px" }}>
          <h1>{Object.keys(state.list).length}</h1>
          <RecordList state={state} listManageMethods={listManageMethods} />
          {state.formVis ? <MasterForm setInput={setInput} state={state} processSubmit={processSubmit} /> : null}
          <AddNewRecordBtn state={state} showForm={showForm} />
        </Container>
      </main>
    </>
  )
}
export default Wrapper;