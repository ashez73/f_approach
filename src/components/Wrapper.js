import React from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
import AddNewRecordBtn from './AddNewRecordBtn'
const Wrapper = ({data, methods})=>{
  return(
    <>
    <MyHeader/>
    <main>
    <Container style={{marginTop: "160px"}}>
    <h1>{data.list}</h1>
    <RecordList data={data} methods ={methods} />
    <AddNewRecordBtn btAdd = {data.addNewVis}/>
    </Container>
    </main>
    </>
  )
}
export default Wrapper;